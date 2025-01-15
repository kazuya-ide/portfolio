import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

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
        'wp:featuredmedia'?: {
            source_url: string;
        }[]
    };
}

interface PostModalProps {
    post: Post | null;
    onClose: () => void;
    isOpen: boolean;
}

const PostModal: React.FC<PostModalProps> = ({ post, onClose, isOpen }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const handleClickOutside = (event: MouseEvent | TouchEvent) => {
        if (!modalRef.current) return;
        if (event.target instanceof Node) {
            if (!modalRef.current.contains(event.target)) {
                onClose();
             } else if ((event.target as Element)?.closest?.('[aria-label="Close Modal"]')) {
                   onClose();
             }
        }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!post || !isOpen) return null;

  const modalVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3 } },
      exit: { opacity: 0 },
  };

  return (
      <motion.div
          className="fixed inset-0 z-[999] flex items-start justify-center pt-[5vh] bg-black/50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
      >
          <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg p-6 w-[90vw] max-h-[90vh] relative max-w-4xl overflow-y-auto"
              ref={modalRef}
                variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
                      exit: { y: 20, opacity: 0 },
                }}
           >
              <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white text-center">
                {post.title.rendered}
              </h2>
              <div
                    className="text-gray-700 dark:text-gray-300 flex justify-center w-[95%] mx-auto max-h-[70vh] overflow-y-auto"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
                <button
                   onClick={onClose}
                   className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full p-1"
                   aria-label="Close Modal"
               >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                   </svg>
              </button>
          </motion.div>
      </motion.div>
    );
  };

export default PostModal;