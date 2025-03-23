
import HandWrittenTitle1 from '../components/demo/HandWrittenTitleDemo'
import SparklesPreview from '@/app/components/demo/hosikuzu'
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

<SparklesPreview />
    <HandWrittenTitle1/>
    <TimelineDemo/>









       
   </div>
  );
}