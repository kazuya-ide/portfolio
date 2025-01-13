import React, { useRef, useEffect } from 'react';

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
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
             document.addEventListener('mousedown', handleClickOutside); // マウスイベントを追加
             document.addEventListener('touchstart', handleClickOutside); // タッチイベントを追加
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isOpen, onClose]);
    
    if (!post || !isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[5vh] bg-black/50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-[90vw] max-h-[90vh] overflow-y-auto relative max-w-4xl" ref={modalRef}>
                <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">{post.title.rendered}</h2>
                  {parseHTMLContent(post.content.rendered)} {/* ここを修正 */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default PostModal;


// HTMLを解析して表示する関数
const parseHTMLContent = (html: string): React.ReactNode => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const elements = doc.body.childNodes;
  const result = [];

  for(let i = 0; i < elements.length; i++){
    const element = elements[i];

     if(element.nodeType === Node.TEXT_NODE){
        result.push(element.textContent);
      } else if(element.nodeType === Node.ELEMENT_NODE) {
        const el = element as Element;

        if(el.tagName === 'P') {
           result.push( <p key={i} className="mb-4 text-gray-700 dark:text-gray-300">{el.textContent}</p> )
         }
       else if (el.tagName === 'A') {
           result.push(<a key={i} href={el.getAttribute('href') || ""} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{el.textContent}</a>);
        }
         else if(el.tagName === 'H1'){
          result.push( <h1 key={i} className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{el.textContent}</h1>)
          }
          else if(el.tagName === 'H2'){
          result.push( <h2 key={i} className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{el.textContent}</h2>)
          }
           else if(el.tagName === 'H3'){
          result.push( <h3 key={i} className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{el.textContent}</h3>)
          }
         else if (el.tagName === 'UL') {
            const listItems = Array.from(el.children)
             result.push(
                <ul key={i} className="list-disc pl-5 mb-4">
                    {listItems.map((li, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">{li.textContent}</li>
                    ))}
                </ul>
             )
        }
          else if(el.tagName === 'OL'){
           const listItems = Array.from(el.children)
             result.push(
                <ol key={i} className="list-decimal pl-5 mb-4">
                    {listItems.map((li, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">{li.textContent}</li>
                    ))}
                </ol>
             )
           }
         else if (el.tagName === 'IMG') {
           result.push(<img key={i} src={el.getAttribute('src') || ""} alt={el.getAttribute('alt') || ""}  className="max-w-full mb-4 rounded-md"/>);
          }
           else if(el.tagName === 'BLOCKQUOTE'){
            result.push(
                <blockquote key={i} className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic text-gray-700 dark:text-gray-300 mb-4">
                    {el.textContent}
                </blockquote>
              );
            }
        }
  }

  return <>{result}</>;
};