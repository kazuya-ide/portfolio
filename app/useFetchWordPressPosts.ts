// src/hooks/useFetchWordPressPosts.ts
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
}

const useFetchWordPressPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
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

              const response = await fetch(
                  `${apiUrl}/wp/v2/posts?_embed`
              );
              if (!response.ok) {
                  throw new Error(`APIリクエストに失敗しました: ${response.status}`);
              }
              const data: Post[] = await response.json();
              setPosts(data);
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

    return {posts, loading, error};
};

export default useFetchWordPressPosts;