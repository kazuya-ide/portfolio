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

const fetcher = (url: string) => fetch(url).then(res => res.json());

const useFetchWordpressBlogPost = (id: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
    const { data, error, isLoading } = useSWR<Post>(
        apiUrl ? `${apiUrl}/wp/v2/blog/${id}?_embed` : null,
        fetcher
    );

    return { post: data, loading: isLoading, error };
};

export default useFetchWordpressBlogPost;