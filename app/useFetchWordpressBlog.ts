'use client';

import useSWR from 'swr';

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

const fetcher = (url: string) => fetch(url).then(res => res.json());

const useFetchWordpressBlog = () => {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

    const { data: categoriesData, error: categoriesError } = useSWR(
        apiUrl ? `${apiUrl}/wp/v2/categories` : null,
        fetcher
    );

    const { data: postsData, error: postsError, isLoading } = useSWR(
         apiUrl ? `${apiUrl}/wp/v2/blog?_embed` : null,
        fetcher
    );


    const categories = categoriesData as Category[] || [];
    const posts = postsData as Post[] || [];
    const loading = isLoading;
    const error = postsError || categoriesError;

    return { posts, categories, loading, error };
};

export default useFetchWordpressBlog;