'use client';

import { useParams } from 'next/navigation';
import useFetchWordpressBlog from '@/app/useFetchWordpressBlog'; // カスタムフックをインポート
import Image from 'next/image';
import { useEffect, useState } from 'react';


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
const BlogPostPage = () => {
  const { posts, loading, error } = useFetchWordpressBlog();
  const [post, setPost] = useState<Post | null>(null);
  const params = useParams();
   const id = params.id as string;

    useEffect(() => {
        if (posts && id) {
            const foundPost = posts.find(p => p.id === Number(id));
            setPost(foundPost || null);
        }
    },[posts, id]);
  

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    
    if(!post){
       return <p>Not found post.</p>
      }
  
    return (
      <section className="relative py-16 overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-semibold mb-4">
                {post.title.rendered}
            </h1>
            <div
                className="text-gray-700 max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
            {post._embedded && post._embedded["wp:featuredmedia"] && post._embedded["wp:featuredmedia"][0] && (
                <div className="w-full relative aspect-video">
                    <Image
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    alt={post.title.rendered}
                    fill
                        className="object-cover"
                     />
                  </div>
           )}
       </div>
    </section>
  );
};

export default BlogPostPage;