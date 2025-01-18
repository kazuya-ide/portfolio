"use client";

import React from 'react';
import Image from 'next/image'; // Image コンポーネントをインポート

interface LineButtonProps {
  lineId: string;
}

const LineButton: React.FC<LineButtonProps> = ({ lineId }) => {
    const lineAddFriendUrl = `https://line.me/R/ti/p/${lineId}`;
  return (
    <div className="mt-4 text-center flex flex-col items-center">
      <div className="mb-[3%] mt-[3%] text-white">
        まずは気軽にLINEアプリで質問する！
      </div>
      <div className="mb-[3%]">
        <a href={lineAddFriendUrl} target="_blank" rel="noopener noreferrer">
            <Image // img タグを Image コンポーネントに置き換え
            src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
            alt="LINEで友だち追加"
            width={144} // 幅を定義 (画像の実際の幅に合わせて調整)
            height={36} // 高さを定義 (画像の実際の高さに合わせて調整)
           />
        </a>
      </div>
      <p className="text-sm mt-2 text-white" style={{marginBottom:"3%"}}>スマートフォンでアクセスして<br/>
      LINEアプリで友だち追加してください。</p>
     </div>
  );
};

export default LineButton;