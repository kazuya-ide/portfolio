"use client";

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null); // 型をHTMLDivElementに変更

  useEffect(() => {
    const aboutElement = aboutRef.current; // aboutRef.current を一時変数にコピー

    if (aboutElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              aboutElement.classList.add("animate-fadeIn");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(aboutElement);

      return () => {
        if (aboutElement) {
          observer.unobserve(aboutElement); // 一時変数を使用
        }
      };
    }
  }, []); // 依存配列は空のまま

  return (
    <motion.div 
         initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      className="relative z-10 min-h-screen"
       ref={aboutRef}  // ここも変更
    >
      <div
        className="container max-w-7xl mx-auto py-16 opacity-0 text-gray-900 dark:text-white"
      >
          {/* 他のコンテンツ */}
          <p>テスト</p>
      </div>
    </motion.div>
  );
};

export default AboutPage;