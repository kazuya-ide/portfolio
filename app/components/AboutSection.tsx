"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useLayoutEffect } from 'react';
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
   // visible: { x: 0, opacity: 1, transition: { duration: 1, type: "spring", stiffness: 100 } }, // アニメーションをspringに変更
   //  hidden: { x: -100, opacity: 0 }, // hidden時のxの値を変更
  };

  const textAnimationControls = useAnimation();

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const animateText = async () => {
        await textAnimationControls.start((i) => ({
          opacity: 1,
          transition: {
            duration: 0.05,
            delay: i * 0.03,
           // delay: i * 0.1, // delayの値を変更
          },
        }));
      };

      animateText();
    }
  }, [textAnimationControls, isClient]);

  return (
    <motion.section
      className="py-16 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      suppressHydrationWarning={true}
       // style={{ padding: '5rem 0' }} // paddingを変更
    >

      <div className="container max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-8xl font-bold mb-12 text-center py-16"
           //  className="text-5xl font-bold mb-12 text-center py-16" // h2のフォントサイズを変更
          variants={textVariants}
        >
          Portfolio
        </motion.h2>

        <motion.div
            className="md:w-2/3 px-4 md:px-0 mx-auto"
            variants={textVariants}
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
           //  style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}  // flexDirectionを変更
          >
            <motion.div
              className="text-gray-900 mb-12 text-5xl font-bold py-6"
              style={{ textAlign: 'center' }}
              //  style={{ textAlign: 'right' }} // textAlignを変更
            >
              {
                <>
                  <div style={{ marginBottom: '2rem' }}>
                      {Array.from("あなたの世界観を伝える").map((char, index) => (
                      <motion.span
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={textAnimationControls}
                          custom={index}
                          style={{ display: 'inline-block' }}
                            // style={{ display: 'block' }} // displayを変更
                      >
                          {char}
                      </motion.span>
                      ))}
                  </div>
                  <div>
                      {Array.from("お手伝いをしたい").map((char, index) => (
                      <motion.span
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={textAnimationControls}
                          custom={index}
                          style={{ display: 'inline-block' }}
                          // style={{ display: 'inline' }} // displayを変更
                      >
                          {char}
                      </motion.span>
                      ))}
                  </div>
                </>
              }
            </motion.div>
          </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;