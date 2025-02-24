import AnimatedTooltipPreview from "@/components/ui/animated-tooltip";
import { AnimatedTestimonialsDemo } from "../components/actions/animatedtestimmonialsdemo";
import GlowingEffectDemo from "../components/actions/GlowingEffectDemo";
import { ExpandableCardDemo } from "../components/actions/ExpandableCardDemo";

import { OrbitingCirclesDemo } from "../components/actions/OrbitingCirclesDemo";
import  TestimonialsSectionDemo from "../components/actions/testimonials";



export default function Home() {
  const tooltipItems = [
    { id: 1, name: "John Doe", designation: "Software Engineer", image: "/1.png" },
    { id: 2, name: "Jane Smith", designation: "UI Designer", image: "1.png" },
  ];

  return (
    <div className="flex flex-col items-center justify-center"> {/* flex-colを追加 */}
      <AnimatedTooltipPreview items={tooltipItems} />
      <AnimatedTestimonialsDemo />
      <OrbitingCirclesDemo/>


      <GlowingEffectDemo/>
      <ExpandableCardDemo/>
      <TestimonialsSectionDemo  />
    </div>
  );
}