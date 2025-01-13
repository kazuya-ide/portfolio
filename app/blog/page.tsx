// app/blog/page.tsx
'use client';

import WordPressPostBlog from "@/app/WordpressPostBlog";
import Image from 'next/image';
import { motion } from 'framer-motion';

const BlogPage = () => {
  return (
    <motion.section
      className="relative py-16 overflow-hidden"
    >
      <motion.div
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0.4 }}
      >
        <Image
          src="/4.png"
          alt="背景画像"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>
      <div className="container relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <WordPressPostBlog />
      </div>
    </motion.section>
  );
};

export default BlogPage;