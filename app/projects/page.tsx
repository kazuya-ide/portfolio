'use client';

import useFetchWordPressPosts from "@/app/useFetchWordPressPosts";
import Image from "next/image";
import { useState, useEffect, useRef, Suspense } from "react";
import { useRouter } from 'next/navigation';

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

interface Category {
    id: number;
    name: string;
}

function Content({
    posts,
    categories,
    selectedCategory,
    handleCategoryClick,
    handleOpenModal,
}: {
    posts: Post[];
    categories: Category[];
    selectedCategory: number | null;
    handleCategoryClick: (categoryId: number | null) => void;
    handleOpenModal: (post: Post) => void;
}) {
    const cardRefs = useRef<HTMLElement[]>([]);

    useEffect(() => {
        if (cardRefs.current) {
            cardRefs.current.forEach((card, index) => {
                if (card) {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 200);
                }
            });
        }
    }, [posts, selectedCategory]);

    const filteredPosts = selectedCategory
        ? posts.filter((post) => post.categories.includes(selectedCategory))
        : posts;

    return (
        <div className="container relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="flex flex-col sm:flex-row items-center justify-between text-sm gap-4"></div>
            <div className="h-[1px] bg-border w-full mb-8 mt-3"></div>
            <div className="flex flex-col justify-between gap-6 lg:flex-row">
                <h2 className="text-5xl font-medium lg:w-1/2">Projects</h2>
                <div className="mx-20">
                    <p className="lg:w-1/2 text-bk break-words">
                        画像をクリックすると詳細が表示されます
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap justify-start gap-4 mb-8">
                <button
                    onClick={() => handleCategoryClick(null)}
                    className={`px-4 py-2 rounded-md text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-500 focus:outline-none ${
                        selectedCategory === null
                            ? "bg-blue-100 border-blue-500 text-blue-500"
                            : "bg-white text-gray-700"
                    }`}
                >
                    All
                </button>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className={`px-4 py-2 rounded-md text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-500 focus:outline-none ${
                            selectedCategory === category.id
                                ? "bg-blue-100 border-blue-500 text-blue-500"
                                : "bg-white text-gray-700"
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post, index) => (
                    <div
                        key={post.id}
                        className="rounded-lg text-gray-900 dark:text-white shadow-sm bg-transparent w-full flex flex-col transition-opacity duration-400 ease-in-out"
                        style={{
                            opacity: 0,
                            transform: 'translateY(20px)',
                            transition: 'opacity 0.4s ease, transform 0.4s ease',
                         }}
                         ref={(el) => {
                            if (el) {
                                cardRefs.current[index] = el;
                            }
                         }}
                    >
                        {post._embedded &&
                            post._embedded["wp:featuredmedia"] &&
                            post._embedded["wp:featuredmedia"][0] && (
                                    <button
                                        onClick={() => handleOpenModal(post)}
                                        className="w-full relative aspect-square"
                                    >
                                    <Image
                                        src={post._embedded["wp:featuredmedia"][0].source_url}
                                        alt={post.title.rendered}
                                        fill
                                        className="object-cover rounded-lg"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        style={{ objectFit: "cover" }}
                                    />
                                </button>
                            )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function ProjectsPage() {
    const { posts, categories, loading, error } = useFetchWordPressPosts();
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);
    const router = useRouter();


    useEffect(() => {
        if (backgroundRef.current) {
            backgroundRef.current.style.opacity = '0.7';
        }
    }, []);

    const handleCategoryClick = (categoryId: number | null) => {
        setSelectedCategory(categoryId);
    };

    const handleOpenModal = (post: Post) => {
         router.push(`/projects/${post.id}`);
    };

    return (
        <section className="relative py-16 overflow-hidden">
            <div
                ref={backgroundRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                    opacity: 0,
                     transition: 'opacity 1s ease-in-out',
                }}
            >
                <Image
                    src="/1.png"
                    alt="背景画像"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
            </div>
            <Suspense fallback={<p>Loading content</p>}>
                {!loading && !error && (
                    <Content
                        posts={posts}
                        categories={categories}
                        selectedCategory={selectedCategory}
                        handleCategoryClick={handleCategoryClick}
                        handleOpenModal={handleOpenModal}
                    />
                )}
                {error && <p>Error:{error}</p>}
            </Suspense>
        </section>
    );
}