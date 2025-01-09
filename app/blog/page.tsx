// src/components/common/Footer/Footer.tsx
import Link from 'next/link';

export default function BlogPage() {
  return (
    <footer className="py-4 text-center bg-gray-800 text-white">
      <p>© {new Date().getFullYear()} My Portfolio</p>
      <Link href="/about" className="text-blue-300 hover:text-blue-200">
        About Page
      </Link>
    </footer>
  );
}