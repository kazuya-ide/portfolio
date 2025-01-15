'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import PostModal from './PostModal';
import useFetchWordPressPosts from './useFetchWordPressPosts';
import { motion } from 'framer-motion';
import Link from 'next/link';

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

const WordPressPosts = () => {
  const [displayedCount, setDisplayedCount] = useState(6);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { posts, loading, error } = useFetchWordPressPosts();


    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 1024) {
          setDisplayedCount(4);
        } else {
          setDisplayedCount(6);
        }
      };

       handleResize(); // 初回ロード時に実行

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      }
    }, []);


     useEffect(() => {
         if (posts && posts.length > 0) {
            if (posts.length <= 6) {
                setDisplayedCount(posts.length)
            }else{
                 if(window.innerWidth < 1024){
                   setDisplayedCount(4)
                 }else{
                   setDisplayedCount(6);
                 }
            }
        }
     }, [posts]);



    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }


    const displayedPosts = posts?.slice(0, displayedCount) || [];
     const hasMore = posts ? posts.length > displayedCount : false;


     const cardVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, delay: i * 0.2, ease: 'easeInOut' },
        }),
      };

    const handleReadMoreClick = (post: Post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setSelectedPost(null);
        setIsModalOpen(false);
    }


    return (
        <section className="py-16">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between text-sm gap-4">
                </div>
                <div className="h-[1px] bg-border w-full mb-8 mt-3"></div>
                <div className="flex flex-col justify-between gap-6 lg:flex-row">
                    <h2 className="text-3xl font-medium lg:w-1/2 text-black">Project</h2>
                   
                    <p className="lg:w-1/2  break-words text-black">
                                画像をクリックすると詳細がモーダルで表示されます
                            </p>
                    
                </div>
                <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedPosts?.map((post, index) => (
                         <motion.div
                            key={post.id}
                            className="rounded-lg text-black shadow-sm bg-transparent w-full flex flex-col overflow-hidden"
                             initial="hidden"
                             animate="visible"
                             variants={cardVariants}
                             custom={index}
                          >
                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && (
                                <button
                                   onClick={() => handleReadMoreClick(post)}
                                     className="w-full relative aspect-square"
                                  >
                                      <Image
                                        src={post._embedded['wp:featuredmedia'][0].source_url}
                                        alt={post.title.rendered}
                                        fill
                                        className="object-cover rounded-lg"
                                         sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        style={{objectFit: 'cover'}}
                                         priority
                                      />
                                </button>
                            )}
                        </motion.div>
                    ))}
                </div>
                  {hasMore && (
                    <div className="flex justify-center mt-6">
                       <Link href="/projects"  className="bg-gray-200 hover:bg-gray-300 text-black font-medium py-2 px-4 rounded">
                            もっと見る
                        </Link>
                    </div>
                  )}
              
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
};

export default WordPressPosts;