// app/projects/page.tsx
"use client";

import useFetchWordPressPosts from "@/app/useFetchWordPressPosts";
import Image from "next/image";
import PostModal from "@/app/PostModal";
import { useState, Suspense } from "react";
import { motion } from "framer-motion";

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
    "wp:featuredmedia"?: {
      source_url: string;
    }[];
  };
  categories: number[];
}

export interface Category {
  id: number;
  name: string;
}

function Content({
  posts,
  categories,
  selectedCategory,
  handleCategoryClick,
}: {
  posts: Post[];
  categories: Category[];
  selectedCategory: number | null;
  handleCategoryClick: (categoryId: number | null) => void;
}) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMoreClick = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.2, ease: "easeInOut" },
    }),
  };

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categories.includes(selectedCategory))
    : posts;

  return (
    <div className="container relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div className="flex flex-col sm:flex-row items-center justify-between text-sm gap-4"></div>
      <div className="h-[1px] bg-border w-full mb-8 mt-3"></div>
      <div className="flex flex-col justify-between gap-6 lg:flex-row">
        <h2 className="text-3xl font-medium lg:w-1/2">Projects</h2>
        <div className="mx-20">
          <p className="lg:w-1/2 text-gray-600 break-words">
            作ったものを載せてます、画像をクリックすると詳細がモーダルで表示されます
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-start gap-4 mb-8">
        <button
          onClick={() => handleCategoryClick(null)}
          className={`px-4 py-2 rounded-md text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-500 focus:outline-none ${
            selectedCategory === null
              ? "bg-blue-100 border-blue-500 text-blue-500"
              : ""
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`px-4 py-2 rounded-md text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-500 focus:outline-none ${
              selectedCategory === category.id
                ? "bg-blue-100 border-blue-500 text-blue-500"
                : ""
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="rounded-lg text-gray-900 dark:text-white shadow-sm bg-transparent w-full flex flex-col"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            custom={index}
          >
            {post._embedded &&
              post._embedded["wp:featuredmedia"] &&
              post._embedded["wp:featuredmedia"][0] && (
                <button
                  onClick={() => handleReadMoreClick(post)}
                  className="w-full relative aspect-square overflow-hidden rounded-lg"
                >
                  <Image
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    alt={post.title.rendered}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </button>
              )}
          </motion.div>
        ))}
      </div>
      {selectedPost && (
        <PostModal
          post={selectedPost}
          onClose={handleCloseModal}
          isOpen={isModalOpen}
        />
      )}
    </div>
  );
}

export default function ProjectsPage() {
  const { posts, categories, loading, error } = useFetchWordPressPosts();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleCategoryClick = (categoryId: number | null) => {
    setSelectedCategory(categoryId);
  };

  return (
    <motion.section className="relative py-16 overflow-hidden">
      <motion.div
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Image
          src="/2.png"
          alt="背景画像"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>
      <Suspense fallback={<p>Loading content</p>}>
        {!loading && !error && (
          <Content
            posts={posts}
            categories={categories}
            selectedCategory={selectedCategory}
            handleCategoryClick={handleCategoryClick}
          />
        )}
        {error && <p>Error:{error}</p>}
      </Suspense>
    </motion.section>
  );
}