'use client';

import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
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
            <a href="/" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">ホーム</a>
            {/* <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">セール</a> */}
            <a href="/search" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">商品を検索</a>
            <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">お問い合わせ</a>
          </nav>

          <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">


            <a href="#" className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base">ログイン</a>

            <a href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">新規登録</a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>

            メニュー
          </button>

        </header>

        {/* モバイルメニュー */}
        {isMobileMenuOpen && (
          <>
            {/* オーバーレイ */}
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* メニューパネル */}
            <div className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-white shadow-lg lg:hidden">
              <div className="flex h-full flex-col">
                {/* ヘッダー */}
                <div className="flex items-center justify-between border-b p-4">
                  <span className="text-lg font-bold text-gray-800">メニュー</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* メニューコンテンツ */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="flex flex-col gap-4">
                    {/* 検索リンク */}
                    <a
                      href="/"
                      className="rounded-lg border border-gray-200 px-4 py-3 text-center text-base font-semibold text-gray-700 transition hover:bg-gray-50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      ホーム
                    </a>
                    <a
                      href="/search" onClick={() => setIsMobileMenuOpen(false)}
                      className="rounded-lg border border-gray-200 px-4 py-3 text-center text-base font-semibold text-gray-700 transition hover:bg-gray-50"
                    >
                      商品を検索
                    </a>
                    <a
                      href="#"
                      className="rounded-lg border border-gray-200 px-4 py-3 text-center text-base font-semibold text-gray-700 transition hover:bg-gray-50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      お問い合わせ
                    </a>

                    <div className="my-4 border-t border-gray-200" />
                  </div>
                </nav>

                {/* フッターボタン */}
                <div className="border-t p-4">
                  <div className="flex flex-col gap-2">
                    <a href="#" className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600">
                      ログイン
                    </a>
                    <a href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700">
                      新規登録
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}