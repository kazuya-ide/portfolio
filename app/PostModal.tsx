// app/PostModal.tsx


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

const PostModal: React.FC<PostModalProps> = ({post, onClose, isOpen}) => {
   if(!post || !isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-4/5 max-h-screen overflow-y-auto relative">
                <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">{post.title.rendered}</h2>
                <div
                    className="text-gray-700 dark:text-gray-300 overflow-hidden "
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
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