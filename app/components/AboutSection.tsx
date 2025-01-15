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


  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
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
    >

      <div className="container max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-8xl font-bold mb-12 text-center py-16 text-black"
          variants={textVariants}
        >
          Portfolio
        </motion.h2>

        <motion.div
            className="md:w-2/3 px-4 md:px-0 mx-auto"
            variants={textVariants}
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
          >
            <motion.div
              className=" mb-12 text-5xl font-bold py-6 text-black"
              style={{ textAlign: 'center' }}
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
                          style={{ display: 'inline-block', color: 'black' }}
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
                          style={{ display: 'inline-block', color: 'black' }}
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