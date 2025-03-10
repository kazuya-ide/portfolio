"use client"; // クライアントサイドコンポーネントとして指定

import Head from "next/head";
import { useParams } from "next/navigation";
import useSWR from "swr";
import CodeBlock from "@/app/components/CodeBlock/CodeBlock";

const BlogPostPage = () => {
    const params = useParams();
    const id = params.id as string;
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

    const { data: post, error, isLoading } = useSWR(
        apiUrl ? `${apiUrl}/wp/v2/blog/${id}?_embed` : null,
        (url) => fetch(url).then((res) => res.json())
    );

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!post) return <p>Not found post.</p>;

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://blog.webnest.jp/wp-content/themes/astra/assets/css/minified/main.min.css?ver=4.8.12"
                />
            </Head>
            <section className="relative py-16 overflow-hidden">
                <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h1 className="text-3xl font-semibold mb-4">
                        {post.title.rendered}
                    </h1>
                    {post.acf?.code && <CodeBlock code={post.acf.code} />}
                    <div
                        className="text-gray-700 max-w-3xl mx-auto"
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    />
                </div>
            </section>
        </>
    );
};

export default BlogPostPage;
