import HandWrittenTitleDemo from '../components/demo/tegaki'

import SplineSceneBasic from '@/app/components/demo/3Ddemo'
import SparklesPreview from '@/app/components/demo/hosikuzu'
import BackgroundBoxesDemo  from '@/app/components/demo/bkblockanimation'
import DemoHeroGeometric from '@/app/components/demo/bg-shape'


export default function Home() {
  return (
   <div>
   <DemoHeroGeometric/>
<SplineSceneBasic/>
<SparklesPreview />
<BackgroundBoxesDemo/>

<HandWrittenTitleDemo/>

   </div>
  );
}