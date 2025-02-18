import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-gray-100">
        <div className="container mx-auto py-4 px-4 md:px-6 lg:px-8 flex items-center justify-between">
          <div className="text-xl font-bold text-blue-800">
            HONMA DISMANTLE INDUSTRY
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-700">
              Corporate Philosophy & Vision
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700">
              Business Information
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700">
              Company Information
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700">
              Equipment & Machine Pool
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700">
              News
            </a>
          </nav>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            CONTACT
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <Image
          src="/1.jpg"
          alt="Hero Image"
          width={1920}
          height={700}
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            THE <br /> FUTURE IS REBORN
          </h1>
          <button className="bg-white text-blue-700 py-2 px-4 rounded font-semibold">
            Scroll Down
          </button>
        </div>
      </section>

      {/* News & Topics Section */}
      <section className="bg-white py-8 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">NEWS & TOPICS</h2>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center border-b pb-2">
              <span>2023.01.30 新規求人情報掲載中です</span>
              <button className="text-gray-500">+</button>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span>2023.01.14 さっぽろ創生スクエア事業 認定を受けました！</span>
              <button className="text-gray-500">+</button>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span>2022.10.25 燃焼実験を行いました</span>
              <button className="text-gray-500">+</button>
            </div>
          </div>
          <div className="text-right mt-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              ニュース・トピックス一覧 +
            </a>
          </div>
        </div>
      </section>

      {/* About Honma Section */}
      <section className="bg-white py-8 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">ABOUT HONMA</h2>
          <p className="text-gray-700 mb-4">企業理念・ビジョン</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Image
                src="/1.jpg"
                alt="About Image"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                新しい街づくりへ、<br />
                私たちができること。
              </h3>
              <p className="text-gray-700">
                生まれ変わる未来のために、人と人との新しい出会いが広がるように。
                私たちは今までに培った技術力を駆使する仕事です。
                そう、それは未来へ届く無数の可能性を創ること。
                新しい街づくりへ、私たちができること。
                時代を先駆ける確かな技術で、清々しい未来へのベースを築き上げていきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-blue-900 text-white py-8 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Value 1 */}
            <div className="p-4 rounded bg-blue-800">
              <div className="text-center mb-2">
                <div className="bg-blue-500 rounded-full w-12 h-12 mx-auto">
                   <Image
                      src="/1.jpg"
                      alt="Value 1 Icon"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain p-2"
                    />
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-center">01 <br/>未来を描くこと</h4>
              <p className="text-sm text-gray-300">
                高度な技術力と豊かな経験をもって、顧客のニーズに応え、安全かつ効率的な解体工事を提供します。
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-4 rounded bg-blue-800">
              <div className="text-center mb-2">
                 <div className="bg-blue-500 rounded-full w-12 h-12 mx-auto">
                   <Image
                      src="/1.jpg"
                      alt="Value 2 Icon"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain p-2"
                    />
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-center">02 <br/>挑戦すること</h4>
              <p className="text-sm text-gray-300">
                常に技術革新と変化を恐れず、新しい技術や工法に積極的に挑戦し、高品質なサービスを提供します。
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-4 rounded bg-blue-800">
              <div className="text-center mb-2">
                 <div className="bg-blue-500 rounded-full w-12 h-12 mx-auto">
                   <Image
                      src="/1.jpg"
                      alt="Value 3 Icon"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain p-2"
                    />
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-center">03 <br/>実行すること</h4>
              <p className="text-sm text-gray-300">
                法令遵守を徹底し、誠実かつ責任感を持って業務に取り組み、顧客満足度の向上を目指します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Policy Section */}
      <section className="bg-white py-8 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">BASIC POLICY</h2>
          <p className="text-gray-700 mb-4">本間解体工業の基本方針</p>
          <p className="text-gray-700 mb-4">
            私たち本間解体工業では、働くにあたりとても大切にしているモットーは「キレイ」「安全」「安心」の３要素です。
            解体新基準をしっかり守り、安全・安心の解体をめざします。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Policy 1 */}
            <div className="text-center">
               <div className="bg-gray-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                   <Image
                      src="/1.jpg"
                      alt="Policy 1 Icon"
                      width={64}
                      height={64}
                      className="w-auto h-auto object-contain p-2"
                    />
               </div>
              <h4 className="text-lg font-semibold mb-2">騒音対策</h4>
              <p className="text-sm text-gray-700">
                騒音を極力発生させない、静かな解体。解体時の騒音レベルを低減させています。
              </p>
            </div>

            {/* Policy 2 */}
            <div className="text-center">
                <div className="bg-gray-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                   <Image
                      src="/1.jpg"
                      alt="Policy 2 Icon"
                      width={64}
                      height={64}
                      className="w-auto h-auto object-contain p-2"
                    />
               </div>
              <h4 className="text-lg font-semibold mb-2">ごみ処理</h4>
              <p className="text-sm text-gray-700">
                建設廃棄物の分別を徹底して資源の再利用と環境保全に努めています。
              </p>
            </div>

            {/* Policy 3 */}
            <div className="text-center">
                <div className="bg-gray-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                   <Image
                      src="/1.jpg"
                      alt="Policy 3 Icon"
                      width={64}
                      height={64}
                      className="w-auto h-auto object-contain p-2"
                    />
               </div>
              <h4 className="text-lg font-semibold mb-2">安全対策</h4>
              <p className="text-sm text-gray-700">
                解体工事の安全・衛生には万全を期し、関係法令による周辺対策を徹底します。
              </p>
            </div>

            {/* Policy 4 */}
            <div className="text-center">
               <div className="bg-gray-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                   <Image
                      src="/1.jpg"
                      alt="Policy 4 Icon"
                      width={64}
                      height={64}
                      className="w-auto h-auto object-contain p-2"
                    />
               </div>
              <h4 className="text-lg font-semibold mb-2">近隣対策</h4>
              <p className="text-sm text-gray-700">
                工事中は近隣・通行者への安全確保を徹底し、騒音、振動対策に努めます。
              </p>
            </div>

            {/* Policy 5 */}
            <div className="text-center">
                 <div className="bg-gray-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                   <Image
                      src="/1.jpg"
                      alt="Policy 5 Icon"
                      width={64}
                      height={64}
                      className="w-auto h-auto object-contain p-2"
                    />
               </div>
              <h4 className="text-lg font-semibold mb-2">迅速対応</h4>
              <p className="text-sm text-gray-700">
                多様な要望に応える為、常に準備万端。相談から工事完了まで安心してお任せください。
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              PHILOSOPHY
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              BASIC POLICY
            </button>
          </div>
        </div>
      </section>

       {/* HONMA WORK EXPERIENCE Section */}
      <section className="bg-blue-900 text-white py-8 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            HONMA <br/> WORK EXPERIENCE
          </h2>
          <p className="text-gray-300 mb-4">解体事例紹介</p>
          <p className="text-gray-300 mb-4">
            本間解体工業は、昭和52年創業。これまで45年以上に渡り、札幌を拠点に多数の実績を重ねて参りました。札幌駅周辺合同庁舎や宮島建設ビル、道北北海道玉葱卸売市場会館などのランドマークとなる大型解体を始め、会社住宅や店舗解体、さらには土木工事に関わる撤去工事まで、新たな街づくりに向けた、あらゆる解体工事を手掛けております。
          </p>
            <div className="relative">
             <Image
                src="/1.jpg"
                alt="work experience"
                width={300}
                height={200}
                className="w-full h-auto object-cover rounded"
              />
             <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h4 className="text-lg font-semibold mb-1">
                 富山第一ホテル札幌 増築解体工事
                </h4>
                <p className="text-sm">（仮）ホテルノース</p>
              </div>
           </div>
           <div className="text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              WORK EXPERIENCE
            </button>
          </div>
        </div>
      </section>

       {/*MOVIES Section*/}
       <section className="bg-blue-900 py-8 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
           <h2 className="text-2xl font-bold text-white mb-4 text-center">MOVIES</h2>
           <p className="text-gray-300 mb-4 text-center">動画で見る本間解体体験</p>
          <div className="grid grid-cols-2 gap-4">

          <div className="relative">
            <Image
                src="/1.jpg"
                alt="movie"
                width={300}
                height={200}
                className="w-full h-auto object-cover rounded"
              />
                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h4 className="text-lg font-semibold mb-1">
                 South2 west3
                </h4>
                <p className="text-sm">東南地区再開発</p>
              </div>
          </div>

          <div className="relative">
            <Image
                src="/1.jpg"
                alt="movie"
                width={300}
                height={200}
                className="w-full h-auto object-cover rounded"
              />
               <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h4 className="text-lg font-semibold mb-1">
                YUJI ISHIHARA
                </h4>
                <p className="text-sm">石原裕次郎記念館</p>
              </div>
          </div>
          </div>
           <div className="mt-4 flex justify-center">
              {/* Custom Slider Controls (replace with actual implementation) */}
              <div className="flex items-center space-x-2">
                <button className="text-gray-300 hover:text-white"></button>
                <div className="h-1 w-16 bg-gray-500 rounded-full">
                  <div className="h-1 w-4 bg-orange-500 rounded-full"></div>
                </div>
                <button className="text-gray-300 hover:text-white"></button>
              </div>
            </div>
        </div>
       </section>

       {/* EQUIPMENT Section */}
      <section className="bg-white py-8 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">EQUIPMENT</h2>
          <p className="text-gray-700 mb-4">重機・解体ツール</p>
          <p className="text-gray-700 mb-4">
            常に現場で最適なシナリオを構築する「本間解体工業」では、安全と環境が個人のプライバシー。
            そのための設備投資は必然だと考えております。
          </p>
            <p className="text-gray-700 mb-4">
           より騒音が少なく、安全、迅速に作業を進めるために、国内でも数少ない大型設備を取り揃えております。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Image
                src="/1.jpg"
                alt="equipment"
                width={300}
                height={200}
                className="w-full h-auto object-cover rounded"
              />
               <Image
                src="/1.jpg"
                alt="equipment"
                width={300}
                height={200}
                className="w-full h-auto object-cover rounded"
              />
               <Image
                src="/1.jpg"
                alt="equipment"
                width={300}
                height={200}
                className="w-full h-auto object-cover rounded"
              />
               <Image
                src="/1.jpg"
                alt="equipment"
                width={300}
                height={200}
                className="w-full h-auto object-cover rounded"
              />
          </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <Image
                    src="/1.jpg"
                    alt="long altitude"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover rounded"
                  />
                  <h4 className="text-lg font-semibold mb-2">Long Altitude Dedicated Machine</h4>
                  <p className="text-sm text-gray-700">ロング高度機械</p>
                  <a href="#" className="text-blue-500 hover:text-blue-700">MORE +</a>
                </div>

                <div className="text-center">
                   <Image
                    src="/1.jpg"
                    alt="Disassembly"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover rounded"
                  />
                  <h4 className="text-lg font-semibold mb-2">Disassembly Specification Machine</h4>
                  <p className="text-sm text-gray-700">解体仕様機械</p>
                  <a href="#" className="text-blue-500 hover:text-blue-700">MORE +</a>
                </div>

                 <div className="text-center">
                    <Image
                    src="/1.jpg"
                    alt="Backhoe"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover rounded"
                  />
                  <h4 className="text-lg font-semibold mb-2">Backhoe</h4>
                  <p className="text-sm text-gray-700">バックホウ</p>
                  <a href="#" className="text-blue-500 hover:text-blue-700">MORE +</a>
                </div>

                  <div className="text-center">
                     <Image
                    src="/1.jpg"
                    alt="wheel-leader"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover rounded"
                  />
                  <h4 className="text-lg font-semibold mb-2">wheel leader</h4>
                  <p className="text-sm text-gray-700">ホイールローダ</p>
                  <a href="#" className="text-blue-500 hover:text-blue-700">MORE +</a>
                </div>

                <div className="text-center">
                   <Image
                    src="/1.jpg"
                    alt="Attachment"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover rounded"
                  />
                  <h4 className="text-lg font-semibold mb-2">Attachment</h4>
                  <p className="text-sm text-gray-700">アタッチメント</p>
                  <a href="#" className="text-blue-500 hover:text-blue-700">MORE +</a>
                </div>

                <div className="text-center">
                   <Image
                    src="/1.jpg"
                    alt="Jaw Crusher"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover rounded"
                  />
                  <h4 className="text-lg font-semibold mb-2">Jaw Crusher</h4>
                  <p className="text-sm text-gray-700">ジョーククラッシャ</p>
                  <a href="#" className="text-blue-500 hover:text-blue-700">MORE +</a>
                </div>
             </div>
          <div className="text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              EQUIPMENT
            </button>
          </div>
        </div>
      </section>

       {/* RECRUIT Section */}
       <section className="bg-blue-900 text-white py-8 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            RECRUIT
          </h2>
          <p className="text-gray-300 mb-4">採用情報</p>
            <h2 className="text-3xl font-bold mb-4">
            HONMA DISMANTLE
          </h2>
          <h2 className="text-3xl font-bold mb-4">
            新しい未来へ、挑戦する仲間を求めています。
          </h2>
          <p className="text-gray-300 mb-4">
           ゼロから目標を築き上げ、街の未来を創造する仲間達がいます。
           何を守り、何を生み出すか。チームワークを大切にする私たちの一員になりませんか？
          </p>
          <Image
                src="/1.jpg"
                alt="recruit"
                width={1920}
                height={700}
                className="w-full h-auto object-cover"
          />
             <div className="text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              RECRUIT
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-8 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">CONTACT</h2>
          <p className="text-gray-700 mb-4">コンタクト</p>
          <p className="text-gray-700 mb-4">
            本間解体工業は「キレイ・安全・安心」をセットに。これまでの45年以上に渡って多くの解体工事を手掛けてきました。
            解体工事に関するご質問等は以下よりお問い合わせください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              WEBでのお問い合わせ
            </button>
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              電話でのお問い合わせ
            </button>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-gray-700 mb-4">お問い合わせフォーム +</p>
             <p className="text-gray-700 mb-4">tel. 011-669-8777</p>
          </div>
        </div>
      </section>

      {/* client section */}
      <section className="bg-gray-300 py-8 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto">
             <h2 className="text-xl font-bold text-blue-700 mb-4">CLIENT</h2>
          </div>
            <div className="flex items-center justify-center">
                <Image
                    src="/1.jpg"
                    alt="kenten"
                    width={200}
                    height={100}
                />

                <Image
                    src="/1.jpg"
                    alt="KOBELCO"
                    width={200}
                    height={100}
                />

                <Image
                    src="/1.jpg"
                    alt="hitachi"
                    width={200}
                    height={100}
                />
            </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-4 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-700">
            © {new Date().getFullYear()} HONMA DISMANTLE INDUSTRY CORPORATION ALL RIGHTS RESERVED.
          </div>
          <nav className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="text-gray-700 hover:text-blue-700">
              企業理念・ビジョン
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700">
              事業案内
            </a>
             <a href="#" className="text-gray-700 hover:text-blue-700">
              設備・機械プール
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700">
              会社概要
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700">
              ニュース
            </a>
             <a href="#" className="text-gray-700 hover:text-blue-700">
              サイトマップ
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700">
              基本方針
            </a>
          </nav>
        </div>
          <div className="flex items-center justify-center mt-4">
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              お問合せはこちら
            </button>

             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              お問い合わせフォーム
            </button>
          </div>
      </footer>
    </div>
  );
}