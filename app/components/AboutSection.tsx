"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useEffect,  useState, useLayoutEffect } from 'react';
import React from 'react';

const AboutSection = () => {
    const [isClient, setIsClient] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const textAnimationControls = useAnimation();

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if(isClient){
        const animateText = async () => {
          await textAnimationControls.start((i) => ({
            opacity: 1,
            transition: {
              duration: 0.05, // 各文字を表示する速さ
              delay: i * 0.03, // 各文字の表示を少しずつ遅らせる
            },
          }));
        };
    
        animateText();
    }
  }, [textAnimationControls, isClient]);


  return (
    <motion.section
      className="relative py-16 bg-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      suppressHydrationWarning={true}
    >
        <motion.div
            style={{position:"fixed", top:0,left:0,right:0,bottom:0, zIndex:0,opacity:0.4}}
           >
                <Image
                    src="/ファビコン48.jpg"
                    alt="背景画像"
                   fill
                    style={{objectFit: "cover"}}
                  priority
                />
         </motion.div>
        
      <div className="container max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          variants={textVariants}
        >
          自己紹介
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            className="relative w-full md:w-1/3 rounded-full overflow-hidden"
            variants={imageVariants}
            whileHover="hover"
          >
            
          </motion.div>
          <motion.div
            className="md:w-2/3 px-4 md:px-0"
            variants={textVariants}
          >
           <div style={{ display: 'inline-block' }}>
            <motion.p
              className="text-gray-900 mb-6"
            >
                 {Array.from("「あなた」の想いが伝わる、そんなウェブサイトを。").map((char, index) => (
                  
                    <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={textAnimationControls}
                    custom={index}
                    style={{ display: 'inline-block' }}
                >
                     { char === '\n' ? <br /> : char }
                </motion.span>

                 ))}
            </motion.p>
         </div>
             <div className="mt-4 flex items-center">
              <motion.div 
                   variants={linkVariants}
                whileHover="hover"
                className="mr-4 hover:text-blue-500"
             >
                 <Link href={"#"} >
                    <FaTwitter size={24} />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </motion.div>
              <motion.div
                   variants={linkVariants}
                whileHover="hover"
                 className="mr-4 hover:text-blue-500">
                <Link href={"#"} >
                      <FaGithub size={24} />
                    <span className="sr-only">GitHub</span>
                  </Link>
              </motion.div>
                <motion.div
                     variants={linkVariants}
                whileHover="hover"
                className="hover:text-blue-500">
                  <Link href={"#"} >
                   <FaLinkedin size={24} />
                 <span className="sr-only">LinkedIn</span>
                  </Link>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;