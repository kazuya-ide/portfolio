'use client';

import { useParams } from 'next/navigation';
import useSWR from 'swr';
import CodeBlock from '@/app/components/CodeBlock/CodeBlock';  // CodeBlockのパスを適切に設定

interface Post {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    acf?: {  // ACFフィールドの型定義を追加
        code?: string;
    };
    featured_media: number;
    _embedded?: {
        'wp:featuredmedia'?: {
            source_url: string;
        }[]
    };
    categories: number[];
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

const BlogPostPage = () => {
    const params = useParams();
    const id = params.id as string;
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

    const { data: post, error, isLoading } = useSWR<Post>(
        apiUrl ? `${apiUrl}/wp/v2/blog/${id}?_embed` : null,
        fetcher
    );

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!post) {
        return <p>Not found post.</p>;
    }

    console.log('BlogPostPage: post:', post); // 投稿データ全体を出力

    return (
        <section className="relative py-16 overflow-hidden">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-3xl font-semibold mb-4">
                    {post.title.rendered}
                </h1>
                {/* ACFフィールド 'code' が存在する場合、CodeBlockを表示 */}
                {post.acf?.code && (
                    <CodeBlock code={post.acf.code} /> // language プロパティを削除
                )}
                <div
                    className="text-gray-700 max-w-3xl mx-auto"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
            </div>
        </section>
    );
};

export default BlogPostPage;