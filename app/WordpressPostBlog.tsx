'use client';

import Image from 'next/image';
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
          }[] | undefined
        } | undefined;
}

interface WordPressPostBlogProps {
   posts: Post[];
   loading: boolean;
    error: string | null;
}

const WordPressPostBlog: React.FC<WordPressPostBlogProps> = ({posts, loading, error}) => {
   

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

    return (
        <section className="py-32">
            <div className="container max-w-7xl mx-auto">
                <div className="flex items-center justify-between text-sm">
                     <Link href="/blog" className="hover:text-gray-800 hover:underline">もっと見る
                        <svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-2 inline-block size-4">
                        <path d="m9 18 6-6-6-6"></path>
                        </svg>
                        </Link>
                </div>
                <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full mb-8 mt-3"></div>
                <div className="flex flex-col justify-between gap-6 md:flex-row">
                    <h2 className="text-3xl font-medium md:w-1/2 text-black">Next,jsを利用したHPの作成ブログ</h2>
                    <p className="md:w-1/2 text-black">
                    開発環境：tailwindcss,typescript,github,vercel,wordpress,gemini
                    <br/>
                    個人で勉強したことをブログ形式でメモしていきます。
                    
                    </p>
                </div>
                <div className="mt-11 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                       <Link key={post.id} href={`/blog/${post.id}`} className="rounded-lg border bg-card text-card-foreground shadow-sm w-full hover:opacity-70 transition-opacity duration-300">
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
                            <div className="p-4">
                                <p className="mb-1 font-medium text-black">{truncateText(post.title.rendered, 50)}</p>
                            </div>
                        </Link>
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
            </section>
    );
};

export default WordPressPostBlog;