"use client";

import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

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
        visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
    };

    const listItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i:number) => ({
            opacity: 1,
             y: 0,
            transition: { duration: 0.4, delay: i * 0.1 , ease: 'easeInOut' },
        }),
    };

    const { scrollYProgress } = useScroll();
    const blur = useTransform(scrollYProgress, [0, 0.5], [0, 20]);


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
        <motion.div
            className="relative z-10 min-h-screen"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            suppressHydrationWarning={true}
        >
            <motion.div
                className="absolute inset-0 z-0 opacity-40"
                style={{ filter: `blur(${blur}px)` }}
            >
                <Image
                    src="/ファビコン48.jpg"
                    alt="背景画像"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
            </motion.div>
            <div
                className="container max-w-7xl mx-auto py-16 text-gray-900 dark:text-white text-center"
                ref={aboutRef}
            >
                <motion.h2
                    className="text-3xl font-bold mb-8 "
                    variants={textVariants}
                >
                    自己紹介
                </motion.h2>
                <div className="mb-8">
                    <motion.p  className="text-gray-700 dark:text-gray-300 mb-4"  variants={textVariants}>
                        はじめまして、井手和弥と申します。
                        <br />
                        Web開発者として、主にフロントエンド開発を担当しています。
                    </motion.p>
                    <motion.p  className="text-gray-700 dark:text-gray-300 mb-4"  variants={textVariants}>
                        特に、React、Next.js を用いた開発が好きで、UI/UX デザインにも興味があります。
                        <br />
                        ユーザーにとって使いやすいウェブサイトを制作することに情熱を燃やしています。
                    </motion.p>
                    <motion.p  className="text-gray-700 dark:text-gray-300 mb-4"  variants={textVariants}>
                        WordPress を使用した開発経験もあり、お客様のニーズに合わせたウェブサイト構築が可能です。
                        <br />
                        常に新しい技術を学び、自己成長を続けています。
                    </motion.p>

                </div>

                <motion.h3 className="text-2xl font-bold mb-4" variants={textVariants}>主なスキル</motion.h3>
                <motion.ul className="text-gray-700 dark:text-gray-300 mb-8 pl-6  list-none" variants={textVariants}>
                { [
                    'JavaScript (ES6+)',
                    'TypeScript',
                    'React',
                    'Next.js',
                    'HTML5',
                    'CSS3',
                    'Tailwind CSS',
                    'WordPress',
                    'Framer Motion',
                ].map((skill, index) => (
                    <motion.li
                         key={skill}
                      variants={listItemVariants}
                      custom={index}
                         className="py-2 border-b border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                        style={{display: 'inline-block', padding: '0 10px',width: 'fit-content'}}
                    >
                         {skill}
                    </motion.li>
                    ))}
                </motion.ul>


                <motion.h3 className="text-2xl font-bold mb-4" variants={textVariants}>今後の目標</motion.h3>
                <motion.p className="text-gray-700 dark:text-gray-300 mb-4" variants={textVariants}>
                    今後は、バックエンド技術にも挑戦し、より幅広い開発ができるようにスキルアップを目指しています。
                    <br /> また、チームでの開発経験を増やし、より高品質なウェブサイトを提供できるように努めてまいります。
                </motion.p>
                <motion.p className="text-gray-700 dark:text-gray-300 mb-4" variants={textVariants}>
                    もし何かご質問やご依頼などございましたら、お気軽にお問い合わせください。
                </motion.p>

                <motion.div className="mt-4 flex items-center justify-center" variants={textVariants}>
                     <Link href="#" className="mr-4 hover:text-blue-500">
                        <FaTwitter size={24} />
                        <span className="sr-only">Twitter</span>
                     </Link>

                   <Link href="#" className="mr-4 hover:text-blue-500">
                       <FaGithub size={24} />
                      <span className="sr-only">GitHub</span>
                 </Link>
                   <Link href="#" className="hover:text-blue-500">
                      <FaLinkedin size={24} />
                     <span className="sr-only">LinkedIn</span>
                 </Link>
              </motion.div>
            </div>
        </motion.div>
    );
};

export default AboutPage;