import React from 'react';
import { FaLaptopCode, FaPalette, FaFont, FaMagic } from 'react-icons/fa';
import Image from 'next/image'; // Imageコンポーネントをインポート

interface SelfIntroductionProps {
  name?: string;
  jobTitle?: string;
  introduction?: string;
  imageUrl?: string;
}

const defaultProps: SelfIntroductionProps = {
  name: "kazuya ide",
  jobTitle: "クリエイター",
  introduction:
    "Webサイト制作、デザイン、ロゴ作成、画像生成AI（Stable Diffusion）など、幅広いクリエイティブスキルを活かして、あなたのブランドを魅力的に演出します。",
  imageUrl: "/ファビコン48.jpg",
};

const SelfIntroduction: React.FC<SelfIntroductionProps> = (props) => {
  const { name, jobTitle, introduction, imageUrl } = { ...defaultProps, ...props };

  const skills = [
    { name: "Webサイト制作", icon: <FaLaptopCode className="mr-2 text-blue-500" /> },
    { name: "Webデザイン", icon: <FaPalette className="mr-2 text-purple-500" /> },
    { name: "ロゴ作成", icon: <FaFont className="mr-2 text-green-500" /> },
    { name: "画像生成AI (Stable Diffusion)", icon: <FaMagic className="mr-2 text-red-500" /> },
  ];

  return (
    <div className="relative mx-5 md:mx-10">
      <div className="rounded-lg shadow-lg p-6 mb-5 hover:shadow-xl transition-shadow duration-300 text-black font-bold">
        <div className="flex items-center mb-4">
          {imageUrl && (
            <Image // Imageコンポーネントに変更
                src={imageUrl}
                alt="プロフィール画像"
                width={80} // widthを指定 (画像のサイズに合わせて調整)
                height={80} // heightを指定 (画像のサイズに合わせて調整)
                className="rounded-full object-cover mr-4"
            />
          )}
          <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-gray-600 italic">{jobTitle}</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">{introduction}</p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">スキル</h3>
          <ul className="list-none p-0">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center mb-2 ">
                {skill.icon}
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelfIntroduction;