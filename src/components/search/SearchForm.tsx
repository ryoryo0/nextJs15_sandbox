'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import CategoryAutocomplete from './CategoryAutocomplete';

// useSearchParamsを使う内部コンポーネント
function SearchFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // FormDataからフォーム値を取得
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;

    // 検索クエリが空の場合は何もしない
    if (!query.trim()) {
      return;
    }

    // 検索パラメータを構築
    const params = new URLSearchParams();
    params.set('q', query);
    if (selectedCategory !== 'all') {
      params.set('category', selectedCategory);
    }

    // 検索結果ページに遷移
    router.push(`/search?${params.toString()}`);
  };

  const categories = [
    { value: 'all', label: 'すべて', icon: '🔍' },
    { value: 'product', label: '商品名', icon: '📦' },
    { value: 'author', label: '作者名', icon: '✍️' },
    { value: 'category', label: 'カテゴリ', icon: '🏷️' },
    { value: 'event', label: 'イベント', icon: '🎉' },
  ];

  // クイック検索のダミーデータ（後でDBから取得）
  const quickSearchKeywords = [
    { id: 1, keyword: '新作' },
    { id: 2, keyword: 'セール' },
    { id: 3, keyword: '人気商品' },
  ];

  return (
    <div className="mx-auto mb-10 max-w-4xl">
      {/* メインフォーム */}
      <form onSubmit={handleSearch} className="overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="p-6 md:p-8">
          {/* 検索キーワード */}
          <div className="mb-8 px-4">
            <label htmlFor="search" className="mb-2 block text-sm font-semibold text-gray-700">
              キーワードを入力
            </label>
            <div className="relative">
              {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div> */}
              <input
                type="text"
                id="search"
                name="search"
                defaultValue={searchParams.get('q') || ''}
                placeholder="商品名、作者名、キーワードを入力..."
                className="w-full rounded-lg border border-gray-300 p-3 pl-12 pr-4 text-base text-gray-900 outline-none ring-indigo-300 transition duration-100 focus:border-indigo-500 focus-visible:ring"
                autoFocus={true}
              />
            </div>
          </div>

          {/* カテゴリ選択（オートコンプリート） */}
          <div className="mb-8 px-4">
            <label htmlFor="category-autocomplete" className="mb-2 block text-sm font-semibold text-gray-700 ">
              検索対象を選択
            </label>
            <CategoryAutocomplete
              categories={categories}
              value={selectedCategory}
              onChange={setSelectedCategory}
              placeholder="カテゴリを選択または入力..."
            />
            <input type="hidden" name="category" value={selectedCategory} />
          </div>

          {/* 検索ボタン */}
          <div className="mb-8 px-4">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-500 px-8 mb-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              検索する
            </button>
          </div>
        </div>

        {/* クイック検索 */}
        <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 md:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
            人気の検索
          </p>
          <div className="flex flex-wrap gap-2">
            {quickSearchKeywords.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => router.push(`/search?q=${encodeURIComponent(item.keyword)}`)}
                className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition duration-100 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-300"
              >
                {item.keyword}
              </button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

// 外部コンポーネント（Suspenseでラップ）
export default function SearchForm() {
  return (
    <SearchFormContent />
  );
}
