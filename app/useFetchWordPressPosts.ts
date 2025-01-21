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

const fetcher = (url: string) =>
    fetch(url).then(async (res) => {
        const totalPages = res.headers.get('X-WP-TotalPages');
        const data = await res.json();
        return { data, totalPages };
    });

interface FetchOptions {
    perPage?: number;
    page?: number;
}
const useFetchWordPressPosts = (options: FetchOptions = {}) => {
    const { perPage = 10, page = 1 } = options;
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

    const { data: categoriesData, error: categoriesError } = useSWR(
        apiUrl ? `${apiUrl}/wp/v2/categories` : null,
        fetcher
    );
    const { data: postsData, error: postsError, isLoading, mutate } = useSWR(
        apiUrl ? `${apiUrl}/wp/v2/posts?_embed&per_page=${perPage}&page=${page}` : null,
        fetcher
    );

    const categories = categoriesData?.data as Category[] || [];
    const posts = postsData?.data as Post[] || [];
    const loading = isLoading;
    const error = postsError || categoriesError;
    const totalPages = postsData?.totalPages ? Number(postsData.totalPages) : null;
    const nextPage = () => mutate();

    return { posts, categories, loading, error, mutate, totalPages, nextPage };
};

export default useFetchWordPressPosts;