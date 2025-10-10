import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-white lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <header className="flex items-center justify-between py-4 md:py-8">
            <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
              <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
              </svg>
              ショップ
            </a>

            <nav className="hidden gap-12 lg:flex">
              <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">ホーム</a>
              <a href="#" className="inline-flex items-center gap-1 text-lg font-semibold text-indigo-500">
                商品カテゴリ

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">セール</a>
              <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">お問い合わせ</a>
            </nav>

            <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
              <a href="#" className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base">ログイン</a>

              <a href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">新規登録</a>
            </div>

            <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>

              メニュー
            </button>

          </header>


          <div className="hidden w-full overflow-hidden rounded-lg border bg-gray-50 shadow-sm lg:block">
            <div className="mx-auto flex max-w-screen-lg items-center gap-8 p-8">
              <div className="grid w-2/3 grid-cols-2 gap-8">
                <a href="#" className="group flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>

                  <div>
                    <div className="mb-1 font-semibold">ファッション</div>
                    <p className="text-sm text-gray-500">最新のトレンドアイテムを多数取り揃えております。</p>
                  </div>
                </a>

                <a href="#" className="group flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>

                  <div>
                    <div className="mb-1 font-semibold">家電・ガジェット</div>
                    <p className="text-sm text-gray-500">最新のテクノロジー製品をお手頃価格で。</p>
                  </div>
                </a>

                <a href="#" className="group flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>

                  <div>
                    <div className="mb-1 font-semibold">インテリア</div>
                    <p className="text-sm text-gray-500">お部屋を彩る素敵なアイテムが揃っています。</p>
                  </div>
                </a>

                <a href="#" className="group flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>

                  <div>
                    <div className="mb-1 font-semibold">書籍・雑貨</div>
                    <p className="text-sm text-gray-500">人気の書籍から便利な雑貨まで幅広く。</p>
                  </div>
                </a>
              </div>

              <div className="w-1/3 overflow-hidden rounded-lg border">
                <div className="h-48 bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1619118884592-11b151f1ae11?auto=format&q=75&fit=crop&w=320" loading="lazy" alt="注目商品" className="h-full w-full object-cover object-center" />
                </div>

                <div className="flex items-center justify-between gap-2 bg-white p-3">
                  <p className="text-sm text-gray-500">今月の特集商品をチェック</p>

                  <a href="#" className="inline-block shrink-0 rounded-lg border bg-white px-3 py-1 text-sm font-semibold text-indigo-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-50 focus-visible:ring active:bg-gray-100">詳細</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
      <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
        <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
            <div className="col-span-full lg:col-span-2">
              <div className="mb-4 lg:-mt-2">
                <a href="/" className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
                  <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-5 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                  </svg>

                  ショップ
                </a>
              </div>

              <p className="mb-6 text-gray-500 sm:pr-8">お客様に最高の商品とサービスを提供することを使命としています。</p>

              <div className="flex gap-4">
                <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                  <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                  <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>

                <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                  <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                  <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">商品</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">全商品</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">新着商品</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">セール商品</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">人気商品</a>
                </div>
              </nav>
            </div>

            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">会社情報</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">会社概要</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">採用情報</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">ニュース</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">プレスリリース</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">ブログ</a>
                </div>
              </nav>
            </div>

            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">サポート</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">お問い合わせ</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">ヘルプセンター</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">チャット</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">よくある質問</a>
                </div>
              </nav>
            </div>

            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">法的情報</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">利用規約</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">プライバシーポリシー</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cookie設定</a>
                </div>
              </nav>
            </div>
          </div>

          <div className="border-t py-8 text-center text-sm text-gray-400">© 2021 - Present ショップ. All rights reserved.</div>
        </footer>
      </div>
    </div>
  );
}
