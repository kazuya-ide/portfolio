import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

function AnimatedTestimonialsDemo() {
const testimonials = [
{
quote:
"細部へのこだわりと革新的な機能が、私たちのワークフローを完全に変革しました。まさに私たちが探し求めていたものです。",
name: "マイク",
designation: " プロダクトマネージャー",
src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
quote:
"導入はスムーズで、結果は私たちの期待を上回りました。このプラットフォームの柔軟性は驚くべきものです。",
name: "リサ・トンプソン",
designation: " CTO（最高技術責任者）",
src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
quote:
"このソリューションは、私たちのチームの生産性を大幅に向上させました。直感的なインターフェースにより、複雑なタスクがシンプルになります。",
name: "ワトソン",
designation: " オペレーションディレクター",
src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
quote:
"卓越したサポートと堅牢な機能。すべての約束を果たしてくれる製品は稀です。",
name: "金田 健太",
designation: "DataPro社 エンジニアリングリード",
src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
quote:
"スケーラビリティとパフォーマンスは、私たちの組織にとって革新的な変化をもたらしました。成長中のあらゆるビジネスに強くお勧めします。",
name: "マイケル・ロドリゲス",
designation: "FutureNet社 技術担当副社長",
src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
];
return <AnimatedTestimonials testimonials={testimonials} />;
}

export { AnimatedTestimonialsDemo };