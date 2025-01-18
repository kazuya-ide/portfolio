"use client";
import WordPressPosts from "./WordpressPosts";
import SkillsSection from "@/app/components/SkillsSection";
import AboutSection from "@/app/components/AboutSection";
import LineButton from "./components/LineButton";
import ContactButton from "./components/ContactButton";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      if (backgroundRef.current) {
        backgroundRef.current.style.opacity = '0.8';
      }
    }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div
         ref={backgroundRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          opacity: 0,
          transition: 'opacity 1s ease-in-out',
        }}
      >
        <Image
          src="/4.png"
          alt="背景画像"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <AboutSection />
        <SkillsSection />
        <WordPressPosts />
      </div>
      <LineButton lineId="@755gjcjk" />
      <ContactButton />
    </div>
  );
}