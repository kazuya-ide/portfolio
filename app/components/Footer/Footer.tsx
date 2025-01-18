// src/components/common/Footer/Footer.tsx

export default function Footer() {
  return (
    <footer
      className="py-4 text-center text-black bg-transparent !important"
      // className="py-8 text-center text-white bg-gray-800 !important" // 背景色とテキストカラーを変更
      //  style={{ backgroundColor: '#f0f0f0', color: '#333', padding: '1rem' }} // style属性で背景色とテキストカラーを変更
      >
      <p>
       © {new Date().getFullYear()} kazuya ide Portfolio
       {/* <span style={{fontSize: '1.2rem'}}>© {new Date().getFullYear()} kazuya ide Portfolio</span> // テキストサイズを変更 */}
      </p>
      {/* <p>   {/*  追加のフッターテキスト */}
       {/*  連絡先: example@example.com  */}
      {/*  </p> */}
     {/*  <Link href="/terms"  className="text-blue-500 underline">利用規約</Link>   利用規約ページへのLink */}
    </footer>
  );
}