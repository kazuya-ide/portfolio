import React from 'react';
import { FaLaptopCode, FaPalette, FaFont, FaMagic } from 'react-icons/fa';
import Image from 'next/image';

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
    "Webサイト制作、デザイン、ロゴ作成、画像生成AI（Stable Diffusion）など。現在はwbサイト作成に注力しています。このサイトはnextjs,vercelで作成しました。コーディングはtailwindcss",
  imageUrl: "/ファビコン48.jpg",
};

const SelfIntroduction: React.FC<SelfIntroductionProps> = (props) => {
  const { name, jobTitle, introduction, imageUrl } = { ...defaultProps, ...props };

  const skills = [
    { name: "Webサイト制作　wordpress react tailwindcss　でのコーディング scssは触ったことがありません", icon: <FaLaptopCode className="mr-2 text-blue-500" /> },
    { name: "Webデザイン 勉強中です", icon: <FaPalette className="mr-2 text-purple-500" /> },
    { name: "ロゴ作成　SDとイラレ、フォトショで加工できます", icon: <FaFont className="mr-2 text-green-500" /> },
    { name: "画像生成AI (Stable Diffusion)　マシンパワーでサンプルを多く出せます　RTX4090", icon: <FaMagic className="mr-2 text-red-500" /> },
  ];

  return (
    <div className="flex justify-center items-center h-screen"> {/* Flexbox で中央寄せ */}
        <div className="relative mx-10 md:mx-1/10 max-w-4xl">
          <div className="rounded-lg shadow-lg p-6 mb-5 hover:shadow-xl transition-shadow duration-300 bg-black text-white font-bold">
            <div className="flex items-center mb-4">
              {imageUrl && (
                <Image
                    src={imageUrl}
                    alt="プロフィール画像"
                    width={80}
                    height={80}
                    className="rounded-full object-cover mr-4"
                />
              )}
              <div>
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-gray-300 italic">{jobTitle}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">{introduction}</p>
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
    </div>
  );
};

export default SelfIntroduction;