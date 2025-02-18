import React, { useCallback } from 'react';

const CodeBlock = ({ code }) => { // language プロパティを削除
  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(code);
    alert('コードをクリップボードにコピーしました！');
  }, [code]);

  return (
    <div className="rounded-md shadow-md overflow-hidden bg-gray-800 text-gray-100">
      <div className="flex items-center justify-end px-4 py-2"> {/* justify-endに変更 */}
        <button
          onClick={copyToClipboard}
          className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
            <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
          </svg>
        </button>
      </div>
      <div className="px-4 py-2 overflow-x-auto">
        <pre className="whitespace-pre text-sm">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;