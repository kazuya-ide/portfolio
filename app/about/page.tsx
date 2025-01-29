"use client";

import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import LineButton from "../components/LineButton";


const AboutPage = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.1, ease: "easeInOut" },
    }),
  };
  

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const aboutElement = aboutRef.current;

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
            observer.unobserve(aboutElement);
          }
        };
      }
    }
  }, [isClient]);

  return (
    <div className="relative">
       <motion.div
        className="fixed inset-0 z-0 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
          suppressHydrationWarning={true}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}

      >
        <motion.div
          className="absolute inset-0 z-0"
        >
            <Image
              src="/2.png"
              alt="背景画像"
              fill
              style={{ objectFit: "cover" }}
              priority
              className="opacity-50"
            />
        </motion.div>
      </motion.div>
      <div
        className="container relative max-w-7xl mx-auto py-16 text-white text-center z-10"
        ref={aboutRef}
      >
        <motion.h2
          className="text-3xl font-bold mb-8 text-white"
          variants={textVariants}
        >
          自己紹介
        </motion.h2>
        <div className="mb-8">
          <motion.p
            className="text-white mb-4"
            variants={textVariants}
          >
            はじめまして、井手和弥と申します。
            <br />
            Web開発者として、主にフロントエンド開発を担当しています。
          </motion.p>
          <motion.p
            className="text-white mb-4"
            variants={textVariants}
          >
            特に、React、Next.js を用いた開発が好きで、UI/UX デザインにも興味があります。
            <br />
            このサイトもnext.jsとvercelを使ってwordpressから投稿を更新できるように設計しました。
            <br />
            ユーザーにとって使いやすいウェブサイトを制作することを念頭に置いております。
          </motion.p>
          <motion.p
            className="text-white mb-4"
            variants={textVariants}
          >
            WordPress を使用した開発経験もあり、お客様のニーズに合わせたウェブサイト構築が可能です。
            <br />
            常に新しい技術を学び、自己成長を続けています。
          </motion.p>
        </div>
        <motion.h3
          className="text-2xl font-bold mb-4 text-white"
          variants={textVariants}
        >
          主なスキル
        </motion.h3>
        <motion.ul
          className="text-white mb-8 pl-6 list-none"
          variants={textVariants}
        >
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "WordPress",
            "Framer Motion",
          ].map((skill, index) => (
            <motion.li
              key={skill}
              variants={listItemVariants}
              custom={index}
               className="py-2 border-b border-gray-300  hover:bg-gray-100 transition-colors duration-200 inline-block text-white"
              style={{ padding: "0 10px", width: "fit-content" }}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
        <motion.h3
          className="text-2xl font-bold mb-4 text-white"
          variants={textVariants}
        >
          今後の目標
        </motion.h3>
        <motion.p
          className="text-white mb-4"
          variants={textVariants}
        >
          今後は、バックエンド技術にも挑戦し、より幅広い開発ができるようにスキルアップを目指しています。
          <br /> また、チームでの開発を出来るようにgithubのブランチ等の勉強を進めて、より高品質なウェブサイトを提供できるようにしたいです。
        </motion.p>
        <motion.p
          className="text-white mb-4"
          variants={textVariants}
        >
          もし何かご質問やご依頼などございましたら、お気軽にお問い合わせください。
        </motion.p>
        <motion.div
          className="mt-4 flex items-center justify-center"
          variants={textVariants}
        >
            <Link href="https://github.com/kazuya-ide" className="mr-4 hover:text-blue-500">
                <FaGithub size={24} color="white" />
                <span className="sr-only">GitHub</span>
            </Link>
        </motion.div>
        <LineButton lineId="@755gjcjk" />
      </div>
    </div>
  );
};

export default AboutPage;