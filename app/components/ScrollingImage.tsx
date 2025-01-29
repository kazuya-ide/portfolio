// components/ScrollingImage.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScrollingImageProps {
  srcs: string[]; // 画像のパスの配列
  alt?: string;
  width?: number;
  height?: number;
  duration?: number;
  className?: string;
}

const ScrollingImage: React.FC<ScrollingImageProps> = ({
  srcs,
  alt = 'Scrolling image',
  width = 500,
  height = 300,
  duration = 3,
  className = '',
}) => {
  const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % srcs.length);
        }, duration * 1000);

        return () => clearInterval(intervalId);
    }, [duration, srcs.length]);


  return (
      <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
        <AnimatePresence>
           <motion.img
            key={index}
              src={srcs[index]}
            alt={alt}
              className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
               transition={{ duration: 0.5 }}
          />
         </AnimatePresence>
    </div>
  );
};

export default ScrollingImage;