// app/page.tsx

"use client";

import WordPressPosts from "./WordpressPosts";
import SkillsSection from "@/app/components/SkillsSection";
import AboutSection from "@/app/components/AboutSection";
import ContactSection from "@/app/components/ContactSection";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <motion.div style={{ position: 'relative' }}>
       <motion.div
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, opacity: 0.8  }} // opacityを0.2に変更
         >
            <Image
              src="/4.png"
              alt="背景画像"
              fill
              style={{ objectFit: "cover" }}
              priority
              />
        </motion.div>

       <div style={{ position: 'relative', zIndex: 1 }}>
        <AboutSection />
         <SkillsSection />
         <WordPressPosts />
         <ContactSection />
       </div>
    </motion.div>
  );
}