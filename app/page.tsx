
import WordPressPosts from "./WordpressPosts";

import SkillsSection from "@/app/components/SkillsSection"; // スキルセクションの追加

import AboutSection from "@/app/components/AboutSection"; // アバウトセクションの追加
import ContactSection from "@/app/components/ContactSection"; // コンタクトセクションの追加

export default function Home() {
  return (
    <div>
        
        <AboutSection />
  
    
   
      <WordPressPosts />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}