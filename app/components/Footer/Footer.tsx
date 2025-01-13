// src/components/common/Footer/Footer.tsx

export default function Footer() {
  return (
    <footer className="py-4 text-center text-black bg-transparent !important">
      <p>© {new Date().getFullYear()} kazuya ide Portfolio</p>
    </footer>
  );
}