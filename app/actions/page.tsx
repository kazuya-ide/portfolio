import AnimatedTooltipPreview from "@/components/ui/animated-tooltip";
import { AnimatedTestimonialsDemo } from "../components/actions/animatedtestimmonialsdemo";
import GlowingEffectDemo from "../components/actions/GlowingEffectDemo";
import { ExpandableCardDemo } from "../components/actions/ExpandableCardDemo";

import { OrbitingCirclesDemo } from "../components/actions/OrbitingCirclesDemo";




export default function Home() {
  const tooltipItems = [
    { id: 1, name: "ジョン・ドウ", designation: "ソフトウェアエンジニア", image: "/1.png" },
    { id: 2, name: "ジェーン・スミス", designation: "UIデザイナー", image: "1.png" },
    ];
  return (
    <div className="flex flex-col items-center justify-center"> {/* flex-colを追加 */}
      <AnimatedTooltipPreview items={tooltipItems} />
      <AnimatedTestimonialsDemo />
      <OrbitingCirclesDemo/>


      <GlowingEffectDemo/>
      <ExpandableCardDemo/>
  
    </div>
  );
}