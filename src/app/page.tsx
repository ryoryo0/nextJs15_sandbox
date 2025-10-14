import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* ヒーローセクション */}
          <section className="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
              <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">最高品質の商品をあなたに</p>

              <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                新しいライフスタイルを<br />始めよう
              </h1>

              <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
                厳選された商品を、お手頃な価格で。日々の暮らしをより豊かにする、こだわりのアイテムをお届けします。
              </p>

              <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                <a href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                  今すぐ購入
                </a>

                <a href="#" className="inline-block rounded-lg border border-gray-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                  詳しく見る
                </a>
              </div>
            </div>

            <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
              <img src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="メイン商品画像" className="h-full w-full object-cover object-center" />
            </div>
          </section>

          {/* 商品セクション */}
          <section>
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">おすすめ商品</h2>
              <a href="#" className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
                すべて見る
              </a>
            </div>

            <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
              {/* 商品カード1 */}
              <div>
                <a href="#" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                  <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="プレミアム腕時計" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                  <div className="absolute left-0 bottom-2 flex gap-2">
                    <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-20%</span>
                  </div>
                </a>

                <div className="flex items-start justify-between gap-2 px-2">
                  <div className="flex flex-col">
                    <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">プレミアム腕時計</a>
                    <span className="text-gray-500">シルバー</span>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="font-bold text-gray-600 lg:text-lg">¥19,200</span>
                    <span className="text-sm text-red-500 line-through">¥24,000</span>
                  </div>
                </div>
              </div>

              {/* 商品カード2 */}
              <div>
                <a href="#" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                  <img src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="レザーバッグ" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </a>

                <div className="flex items-start justify-between gap-2 px-2">
                  <div className="flex flex-col">
                    <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">レザーバッグ</a>
                    <span className="text-gray-500">ブラウン</span>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="font-bold text-gray-600 lg:text-lg">¥15,800</span>
                  </div>
                </div>
              </div>

              {/* 商品カード3 */}
              <div>
                <a href="#" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                  <img src="https://images.unsplash.com/photo-1610824352934-c10d87b700cc?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="ワイヤレスイヤホン" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                  <div className="absolute left-0 bottom-2 flex gap-2">
                    <span className="rounded-r-lg bg-indigo-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">NEW</span>
                  </div>
                </a>

                <div className="flex items-start justify-between gap-2 px-2">
                  <div className="flex flex-col">
                    <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">ワイヤレスイヤホン</a>
                    <span className="text-gray-500">ホワイト</span>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="font-bold text-gray-600 lg:text-lg">¥12,800</span>
                  </div>
                </div>
              </div>

              {/* 商品カード4 */}
              <div>
                <a href="#" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                  <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="スニーカー" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </a>

                <div className="flex items-start justify-between gap-2 px-2">
                  <div className="flex flex-col">
                    <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">スニーカー</a>
                    <span className="text-gray-500">ブラック</span>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="font-bold text-gray-600 lg:text-lg">¥9,800</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
