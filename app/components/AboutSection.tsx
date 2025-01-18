"use client";

import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

const AboutSection = () => {
  const [isClient, setIsClient] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);


  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
      if (isClient && titleRef.current) {
          titleRef.current.style.opacity = '1';
          titleRef.current.style.transform = 'translateX(0)';
        }
    },[isClient]);

  useEffect(() => {
    if (isClient && text1Ref.current && text2Ref.current) {
      const animateText = async () => {
          if(text1Ref.current){
              text1Ref.current.style.opacity = '1';
              text1Ref.current.style.transform = 'translateY(0)';
             }
          if(text2Ref.current){
            text2Ref.current.style.opacity = '1';
            text2Ref.current.style.transform = 'translateY(0)';
         }
        };
        animateText();
      }
    }, [isClient]);



  return (
    <section
      className="py-16 overflow-hidden relative"
    >
      <div className="container max-w-7xl mx-auto relative z-10">
        <h2
          className="text-8xl font-bold mb-12 text-center py-16 text-black transition-opacity duration-400 ease-in-out transform-none"
          style={{
            opacity: 0,
            transform: 'translateX(-50px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
          ref={titleRef}
        >
          Portfolio
        </h2>
        <div
            className="md:w-2/3 px-4 md:px-0 mx-auto"
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
          >
            <div
              className=" mb-12 text-5xl font-bold py-6 text-black"
              style={{ textAlign: 'center' }}
            >
              {
                <>
                  <div
                       style={{
                         marginBottom: '2rem',
                          opacity: 0,
                          transform: 'translateY(20px)',
                          transition: 'opacity 0.6s ease, transform 0.6s ease',
                       }}
                       ref={text1Ref}
                    >
                     あなたの世界観を伝える
                  </div>
                  <div
                       style={{
                         opacity: 0,
                         transform: 'translateY(20px)',
                        transition: 'opacity 0.6s ease, transform 0.6s ease',
                       }}
                       ref={text2Ref}
                  >
                       お手伝いをしたい
                  </div>
                </>
              }
            </div>
          </div>
      </div>
    </section>
  );
};

export default AboutSection;