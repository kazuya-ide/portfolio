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
const useFetchWordPressPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      const fetchPosts = async () => {
          try {
              const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
              if (!apiUrl) {
                  setError('WordPress API URLが設定されていません。');
                  setLoading(false);
                  return;
              }
                // const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL + '/alternative_path'; // API URLを変更
                // const categoriesResponse = await fetch(`${apiUrl}/wp/v2/categories?per_page=5`); // 取得するカテゴリの数を変更
                const categoriesResponse = await fetch(`${apiUrl}/wp/v2/categories`);
              if (!categoriesResponse.ok) {
                 throw new Error(`カテゴリAPIリクエストに失敗しました: ${categoriesResponse.status}`);
                }
             const categoriesData = await categoriesResponse.json() as Category[];
                setCategories(categoriesData);

              const response = await fetch(
                  `${apiUrl}/wp/v2/posts?_embed`
                   // `${apiUrl}/wp/v2/posts?_embed&per_page=5` // 取得する記事の数を変更
                  //  `${apiUrl}/wp/v2/posts?_embed&_fields=id,title,content` // 取得するフィールドを変更
              );
              if (!response.ok) {
                  throw new Error(`APIリクエストに失敗しました: ${response.status}`);
              }
              const data = await response.json() as Post[];

              //カテゴリを配列に格納
              const postsWithCategories = data.map(post => ({
                ...post,
                categories: post.categories
             }));
                setPosts(postsWithCategories);
                // setPosts([]); // 空の配列を返す
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

      fetchPosts();
  }, []);

    return {posts, categories, loading, error};
};

export default useFetchWordPressPosts;