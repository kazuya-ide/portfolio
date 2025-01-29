"use client";
import WordPressPosts from "./WordpressPosts";
import SkillsSection from "@/app/components/SkillsSection";
import AboutSection from "@/app/components/AboutSection";
import LineButton from "./components/LineButton";
import ContactButton from "./components/ContactButton";
import SelfIntroduction from "./components/SelfIntroduction";

export default function Home() {
    return (
        <div
            style={{
                 position: 'relative',
                 minHeight: '100vh',
                 overflowX: 'hidden', // 水平スクロールを防止
            }}
        >
             <div
                style={{
                    backgroundImage: 'url(/4.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'fixed', // スクロールに追従しないように固定
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0, // コンテンツより背面に配置
                }}
            ></div>
          <div style={{position:'relative', zIndex:1}}>
              <AboutSection />
            <SelfIntroduction />
              <SkillsSection />
            <WordPressPosts />
            <LineButton lineId="@755gjcjk" />
            <ContactButton />
          </div>
        </div>
    );
}