'use client';

import { useState, useEffect } from 'react';

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

const useFetchWordpressBlog = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                 const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
                 if (!apiUrl) {
                    setError('WordPress API URLが設定されていません。');
                     setLoading(false);
                     return;
                 }

                const categoriesResponse = await fetch(`${apiUrl}/wp/v2/categories`);
                 if (!categoriesResponse.ok) {
                    throw new Error(`カテゴリAPIリクエストに失敗しました: ${categoriesResponse.status}`);
                 }
                const categoriesData = await categoriesResponse.json() as Category[];
                setCategories(categoriesData);

                const response = await fetch(
                     `${apiUrl}/wp/v2/blog?_embed` // 投稿エンドポイントを/wp/v2/blogに変更
                );

                if (!response.ok) {
                    throw new Error(`APIリクエストに失敗しました: ${response.status}`);
                }

                const data = await response.json() as Post[];
                   const postsWithCategories = data.map(post => ({
                     ...post,
                     categories: post.categories
                  }));
                setPosts(postsWithCategories);

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

        fetchBlogPosts();
    }, []);

    return { posts, categories, loading, error };
};

export default useFetchWordpressBlog;