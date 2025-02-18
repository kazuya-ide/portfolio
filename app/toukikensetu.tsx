import Image from 'next/image';

export default function ToukiKensetsu() {
  return (
    <>
      <header className="relative">
        <Image
          src="/1.jpg"
          alt="Construction site"
          width={1920}
          height={750}
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-white text-5xl font-extrabold leading-tight">KEEP CHANGING</h1>
          <h2 className="text-white text-3xl mt-2">TO STAY THE SAME</h2>
          <p className="text-white mt-6 text-lg">変わらないために</p>
          <p className="text-white text-lg">変わり続ける。</p>
        </div>
        <div className="absolute bottom-8 left-8 bg-yellow-500 bg-opacity-80 px-4 py-2 rounded-md">
          <p className="text-black text-sm font-bold">TOUKI CONSTRUCTION</p>
          <p className="text-black text-sm font-bold">SPECIAL TRAILER ▶</p>
        </div>
        <div className="absolute bottom-8 right-8 bg-white bg-opacity-80 px-4 py-2 rounded-md">
          <p className="text-gray-600 text-sm font-bold">TOPICS</p>
          <p className="text-gray-600 text-sm">2024/11/06 災害復旧支援者への支援活動 3</p>
        </div>
      </header>

      <main>
        <section className="relative py-24 overflow-hidden">
          <div className="absolute top-1/2 -left-32 transform -translate-y-1/2 -rotate-90 text-5xl text-blue-500 font-extrabold opacity-70">
            MESSAGE
          </div>
          <div className="container mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  「本気になる」という日々の気持ちが、仕事でも仕事以外でも人生を彩るためにとても重要な要素であると、考えています。
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  仲間・仕事、そして自分自身に本気で向き合うこと。そうすると、見えてくる景色が変わっていきます。
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  私達は、街を創り、地域を創り、そして笑顔の連鎖を創ることに本気です。私達は、変わらない目的のために、変わり続けることに本気です。
                </p>
              </div>
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  この本気になると、人との出会いや触れ合いを大切にできるかもしれません。実際、高所での作業や建物を解体しているプロの職人の仕事は建設業界の中でも危険の多い仕事です。
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  ですが、だからこそみんな本気で取り組んでいます。一つひとつの工事、ひとつひとつの仕事が、そこで働く人たち、協力会社の人たち、そして地域の人たちを繋ぎ、街を創り、地域を創ります。私たちは、この本気の連鎖を大切にし、より良い街づくりを目指しています。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-900 text-white py-24">
          <div className="container mx-auto px-8 md:px-16">
            <h2 className="text-4xl font-extrabold mb-12 text-center">ABOUT US</h2>
            <p className="text-xl mb-8 text-center">東輝建設について</p>
            <p className="text-xl mb-8 text-center">
              3事業部の融合に9つの力を加え <br /> 仮設工事、解体工事、リニューアル工事を <br />「ALL IN ONE 対応」
            </p>
            <p className="text-lg leading-relaxed mb-8">
              平成9年に仮設工事から始まった東輝建設は、現在、解体工事、リニューアル工事まで対応できる企業へと成長しました。計画段階からプロジェクトに参画し、経験を生かした効率の良い作業方法の提案や、図面作成のお手伝いなど、誠実で一貫したサービスはお客様にご好評をいただいております。重工事一式、解体工事、リニューアル(改修)工事など、どのような工事でもお気軽にご相談ください。
            </p>
            <div className="relative w-80 h-80 mx-auto">
              <Image
                src="/1.jpg"
                alt="Pie Chart"
                width={400}
                height={400}
                className="object-contain absolute inset-0"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-2xl font-bold">ALL IN ONE</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-700 text-white py-24">
          <div className="container mx-auto px-8 md:px-16">
            <h2 className="text-4xl font-extrabold mb-12 text-center">OUR BUSINESS</h2>
            <p className="text-xl mb-8 text-center">東輝建設のビジネス</p>
            <p className="text-lg leading-relaxed text-center">
              各事業部のスムーズな連携で <br /> Safety, Speedy&Satisfaction <br /> 安全・迅速・そしてお客様の満足を実現
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-4 left-4 text-5xl font-extrabold text-blue-500">01</div>
              <Image
                src="/1.jpg"
                alt="Scaffolding"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">仮設事業部</h3>
                <p className="text-gray-700 leading-relaxed mb-4">図面作成から各種届出まで、元請会社の「手が回らない」をサポートします。</p>
                <p className="text-gray-700 leading-relaxed mb-4">東輝建設では、新築・解体・改修の各種仮設工事は当然のこと、鉄骨建方、PC工事、コンクリート打設工事も行っています。</p>
                <a href="#" className="text-blue-500 hover:underline">
                  仮設事業部について
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-4 left-4 text-5xl font-extrabold text-pink-500">02</div>
              <Image
                src="/1.jpg"
                alt="Demolition"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">解体事業部</h3>
                <p className="text-gray-700 leading-relaxed mb-4">解体工事はその「過程」が大事</p>
                <p className="text-gray-700 leading-relaxed mb-4">私達はプロとして、お客様の求めるものに的確に応えてまいります。</p>
                <a href="#" className="text-blue-500 hover:underline">
                  解体事業部について
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-4 left-4 text-5xl font-extrabold text-green-500">03</div>
              <Image
                src="/1.jpg"
                alt="Renewal"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">リニューアル事業部</h3>
                <p className="text-gray-700 leading-relaxed mb-4">技術と知識を融合し イノベーションを提供します。</p>
                <a href="#" className="text-blue-500 hover:underline">
                  リニューアル本部について
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-yellow-400 py-24">
          <div className="container mx-auto px-8 md:px-16 text-center">
            <h2 className="text-4xl font-extrabold mb-12">RECRUIT</h2>
            <p className="text-xl mb-8">採用情報</p>
            <p className="text-lg leading-relaxed mb-8">
              仮設、解体、リニューアルと広がるフィールド <br /> しかし、人がエンジンであることは変わりません。
            </p>
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md inline-block">
              採用情報へ
            </a>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-8 md:px-16 flex justify-center gap-8">
            <a href="#" className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-md">
              BLOG
            </a>
            <a href="#" className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-md">
              安全活動BLOG
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/1.jpg"
              alt="Touki Kensetsu Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p>〒125-0057 東京都世田谷区玉堤1-16-18</p>
            <p>TEL 03-5758-7697 / FAX 03-5758-7698</p>
            <p className="mt-4">
              仮設工事、解体工事、リニューアル工事なら東輝建設にご相談ください。 豊富な経験と実績から最適な提案を行い、お客様の満足行く工事を実施します。
            </p>
            <p className="mt-4">TEL 03-5758-7697</p>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md inline-block mb-8">
              お問い合わせ
            </a>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-bold mb-2">企業情報</p>
                <ul className="list-none">
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      ごあいさつ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      会社情報
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold mb-2">事業内容</p>
                <ul className="list-none">
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      仮設事業部
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      解体事業部
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      リニューアル事業部
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold mb-2">実績紹介</p>
                <ul className="list-none">
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      仮設事業部
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      リニューアル事業部
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-8 md:px-16 text-center mt-12">
          <p>© 2020 Touki Kensetsu Co.,Ltd. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}