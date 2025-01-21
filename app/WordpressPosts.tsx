'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useFetchWordPressPosts from './useFetchWordPressPosts';

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
    categoryNames?: string[];
}

const WordPressPosts = () => {
    const [displayedCount, setDisplayedCount] = useState(6);
     const { posts, loading, error } = useFetchWordPressPosts({perPage: displayedCount });
    const cardRefs = useRef<HTMLElement[]>([]);

    const handleResize = useCallback(() => {
        if (window.innerWidth < 1024) {
            setDisplayedCount(4);
        } else {
            setDisplayedCount(6);
        }
    }, []);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);


    useEffect(() => {
     
            handleResize();
      
    }, [handleResize]);


    useEffect(() => {
        if (cardRefs.current) {
             cardRefs.current.forEach((card, index) => {
                if (card) {
                    setTimeout(() => {
                         card.style.opacity = '1';
                       card.style.transform = 'translateX(0)';
                    }, index * 200);
                 }
             });
         }
    }, [posts]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const hasMore = posts.length > displayedCount;


    return (
        <section className="py-16">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between text-sm gap-4">
                </div>
                <div className="h-[1px] bg-border w-full mb-8 mt-3"></div>
                <div className="flex flex-col justify-between gap-6 lg:flex-row">
                    <h2 className="text-3xl font-medium lg:w-1/2 text-black">Project</h2>

                    <p className="lg:w-1/2  break-words text-black">
                       画像をクリックすると詳細が表示されます
                    </p>
                </div>
                <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts?.map((post: Post, index: number) => (
                        <div
                            key={post.id}
                            className="rounded-lg text-black shadow-sm bg-transparent w-full flex flex-col overflow-hidden"
                            style={{
                                opacity: 0,
                                transform: 'translateX(-20px)',
                                transition: 'opacity 0.6s ease, transform 0.6s ease',
                            }}
                            ref={(el) => {
                                if (el) {
                                    cardRefs.current[index] = el;
                                }
                            }}
                        >
                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && (
                                    <div
                                    className="w-full relative aspect-square"
                                >
                                    <Image
                                        src={post._embedded['wp:featuredmedia'][0].source_url}
                                        alt={post.title.rendered}
                                        fill
                                        className="object-cover rounded-lg"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                        priority={index < 6 ? true : false}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {hasMore && (
                    <div className="flex justify-center mt-6">
                        <Link href="/projects" className="bg-gray-200 hover:bg-gray-300 text-black font-medium py-2 px-4 rounded">
                            もっと見る
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default WordPressPosts;