'use client';

import WordPressPostBlog from "@/app/WordpressPostBlog";
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import useFetchWordpressBlog from '@/app/useFetchWordpressBlog';


const BlogPage = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
    const { posts, loading, error } = useFetchWordpressBlog();

    useEffect(() => {
        if (backgroundRef.current) {
            backgroundRef.current.style.opacity = '0.4';
        }
    }, []);
    
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
           transition: 'opacity 1s ease-in-out', // CSSトランジションを追加
          }}
        >
        <Image
          src="/5.png"
          alt="背景画像"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="container relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
         <WordPressPostBlog posts={posts} loading={loading} error={error}  />
      </div>
    </section>
  );
};

export default BlogPage;