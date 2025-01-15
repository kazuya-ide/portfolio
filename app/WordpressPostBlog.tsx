'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/solid'; // クローズボタンのアイコンをインポート

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
}

const WordPressPostBlog = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
                if (!apiUrl) {
                    setError('WordPress API URLが設定されていません。');
                    setLoading(false);
                    return;
                }

                const response = await fetch(
                    `${apiUrl}/wp/v2/blog?_embed&per_page=100`
                );
                if (!response.ok) {
                    throw new Error(`APIリクエストに失敗しました: ${response.status}`);
                }
                const data: Post[] = await response.json();
                setPosts(data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message || 'データの取得に失敗しました。');
                } else {
                    setError('データの取得に失敗しました.(不明なエラー)');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const hasMore = posts.length > 0;

    const truncateText = (text: string, maxLength: number) => {
        if (!text) return '';
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    };

    const handleOpenModal = (post: Post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return (
        <section className="py-32">
            <div className="container max-w-7xl mx-auto">
                <div className="flex items-center justify-between text-sm">
                     <a href="#" className="hover:text-gray-800 hover:underline">もっと見る
                        <svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-2 inline-block size-4">
                        <path d="m9 18 6-6-6-6"></path>
                        </svg>
                        </a>
                </div>
                <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full mb-8 mt-3"></div>
                <div className="flex flex-col justify-between gap-6 md:flex-row">
                    <h2 className="text-3xl font-medium md:w-1/2 text-black">ブログ記事でできること</h2>
                    <p className="md:w-1/2 text-black">
                    ブログでは、ウェブサイト制作に関する様々な情報を個人の振り返りメモのように記事にしています
                    
                    </p>
                </div>
                <div className="mt-11 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <div key={post.id} className="rounded-lg border bg-card text-card-foreground shadow-sm w-full hover:opacity-70 transition-opacity duration-300 cursor-pointer" onClick={() => handleOpenModal(post)}>
                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && (
                                <div className="aspect-video w-full relative">
                                    <Image
                                        src={post._embedded['wp:featuredmedia'][0].source_url}
                                        alt={post.title.rendered}
                                        fill
                                        style={{ objectFit: 'cover' }}

                                    />
                                </div>
                            )}
                            <div className="p-5">
                                <p className="mb-1 font-medium text-black">{truncateText(post.title.rendered, 50)}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {hasMore && (
                    <div className="mt-4 text-center">
                        <Link href="/blog" className=" hover:underline text-black">
                            もっと記事を見る
                        </Link>
                    </div>
                )}
            </div>
            {isModalOpen && selectedPost && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg max-w-3xl w-full relative">
                        <button onClick={handleCloseModal} className="absolute top-2 right-2 cursor-pointer">
                            <XMarkIcon className="h-6 w-6 text-gray-500" />
                        </button>
                        <h2 className="text-2xl font-bold mb-4 text-black">{selectedPost.title.rendered}</h2>
                        <div className="text-black" dangerouslySetInnerHTML={{ __html: selectedPost.content.rendered }} />
                    </div>
                </div>
            )}
        </section>
    );
};

export default WordPressPostBlog;