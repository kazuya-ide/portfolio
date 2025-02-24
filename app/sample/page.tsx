import HandWrittenTitleDemo from '../components/demo/tegaki'
import HandWrittenTitle1 from '../components/demo/HandWrittenTitleDemo'
import SplineSceneBasic from '@/app/components/demo/3Ddemo'
import SparklesPreview from '@/app/components/demo/hosikuzu'
import BackgroundBoxesDemo  from '@/app/components/demo/bkblockanimation'
import DemoHeroGeometric from '@/app/components/demo/bg-shape'
import TimelineDemo from '../components/demo/timeline'


import Link from 'next/link'; // Import the Link component from Next.js

export default function Home() {
  return (
   <div>
    <Link href="/atoms" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go to sample/atoms/page
    </Link>
<br/>
    <Link href="/actions" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go to sample/actios/page
    </Link>

    <TimelineDemo/>

   <DemoHeroGeometric/>
<SplineSceneBasic/>
<SparklesPreview />
<BackgroundBoxesDemo/>

<HandWrittenTitleDemo/>
<HandWrittenTitle1/>


   </div>
  );
}