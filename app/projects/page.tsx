// app/projects/page.tsx
'use client';

import useFetchWordPressPosts from '@/app/useFetchWordPressPosts';
import Image from 'next/image';
import PostModal from '@/app/PostModal';
import { useState } from 'react';

interface Post {
    id: number;
    title: {
        rendered: string;
    };
    content: {
      rendered: string;
    };
    featured_media: number;
    _embedded?: {
        'wp:featuredmedia'?: {
            source_url: string;
        }[]
    };
    categories: number[];
}

export interface Category {
    id: number;
    name: string;
}

export default function ProjectsPage() {
    const { posts, categories, loading, error } = useFetchWordPressPosts();
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error:{error}</p>;
    }

    const truncateText = (text: string, maxLength: number) => {
        if (!text) return '';
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    };

    const handleReadMoreClick = (post: Post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
        setIsModalOpen(false);
    };

    const handleCategoryClick = (categoryId: number | null) => {
        setSelectedCategory(categoryId);
    };

    const filteredPosts = selectedCategory
        ? posts.filter((post) => post.categories.includes(selectedCategory))
        : posts;

    return (
        <section className="py-16">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between text-sm gap-4">

                </div>
                <div className="h-[1px] bg-border w-full mb-8 mt-3"></div>
                <div className="flex flex-col justify-between gap-6 lg:flex-row">
                    <h2 className="text-3xl font-medium lg:w-1/2">Projects</h2>
                    <div className='mx-20'>
                        <p className="lg:w-1/2 text-gray-600 break-words">
                            作ったものを載せてます、画像かReadMoreをタップすると詳細がモーダルで表示されます
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-start gap-4 mb-8">
                    <button
                        onClick={() => handleCategoryClick(null)}
                        className={`px-4 py-2 rounded-md text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-500 focus:outline-none ${
                            selectedCategory === null ? 'bg-blue-100 border-blue-500 text-blue-500' : ''
                        }`}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryClick(category.id)}
                            className={`px-4 py-2 rounded-md text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-500 focus:outline-none ${
                                selectedCategory === category.id ? 'bg-blue-100 border-blue-500 text-blue-500' : ''
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
                <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post) => (
                        <div key={post.id} className="rounded-lg border  text-gray-900 dark:text-white shadow-sm bg-transparent w-full flex flex-col">
                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && (
                                <button
                                    onClick={() => handleReadMoreClick(post)}
                                    className="w-full  relative aspect-video"
                                >
                                    <Image
                                        src={post._embedded['wp:featuredmedia'][0].source_url}
                                        alt={post.title.rendered}
                                        fill
                                        className="object-cover rounded-t-lg"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </button>
                            )}
                            <div className="p-4 flex flex-col">
                                <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">{truncateText(post.title.rendered, 50)}</h3>
                                <div
                                     className="text-sm  overflow-hidden line-clamp-3 text-gray-600 dark:text-gray-400 flex-1"
                                    dangerouslySetInnerHTML={{ __html: truncateText(post.content.rendered, 50) }}
                                />

                                 <div className="text-center py-2">
                                    <button
                                        onClick={() => handleReadMoreClick(post)}
                                        className="text-blue-500 hover:underline dark:text-blue-400"
                                    >Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {selectedPost &&
                    <PostModal
                        post={selectedPost}
                        onClose={handleCloseModal}
                        isOpen={isModalOpen}
                    />
                }
            </div>
        </section>
    );
}