'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CategoryAutocomplete from './CategoryAutocomplete';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const router = useRouter();

  if (!isOpen) return null;

  const categories = [
    { value: 'all', label: 'すべて', icon: '🔍' },
    { value: 'product', label: '商品名', icon: '📦' },
    { value: 'author', label: '作者名', icon: '✍️' },
    { value: 'category', label: 'カテゴリ', icon: '🏷️' },
    { value: 'event', label: 'イベント', icon: '🎉' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // 検索クエリが空の場合は何もしない
    if (!searchQuery.trim()) {
      return;
    }

    // 検索パラメータを構築
    const params = new URLSearchParams();
    params.set('q', searchQuery);
    if (selectedCategory !== 'all') {
      params.set('category', selectedCategory);
    }

    // 検索結果ページに遷移
    router.push(`/search?${params.toString()}`);

    // モーダルを閉じる
    onClose();

    // フォームをリセット
    setSearchQuery('');
    setSelectedCategory('all');
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-lg bg-white shadow-2xl">
        {/* ヘッダー */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800">商品検索</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
            aria-label="閉じる"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* 検索フォーム */}
        <form onSubmit={handleSearch} className="px-6 py-6">
          <div className="space-y-5">
            {/* 検索キーワード */}
            <div>
              <label htmlFor="search" className="mb-2 block text-sm font-medium text-gray-700">
                キーワード
              </label>
              <input
                type="text"
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="商品名、作者名を入力..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                autoFocus
              />
            </div>

            {/* カテゴリフィルター */}
            <div>
              <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-700">
                検索対象
              </label>
              <CategoryAutocomplete
                categories={categories}
                value={selectedCategory}
                onChange={setSelectedCategory}
                placeholder="カテゴリを選択または入力..."
              />
            </div>

            {/* 検索ボタン */}
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
              >
                検索する
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-lg border border-gray-300 bg-white px-6 py-3 text-center font-semibold text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 sm:w-auto"
              >
                キャンセル
              </button>
            </div>
          </div>
        </form>

        {/* クイック検索リンク */}
        <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
            人気の検索
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                router.push('/search?q=新作');
                onClose();
              }}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              新作
            </button>
            <button
              type="button"
              onClick={() => {
                router.push('/search?q=セール');
                onClose();
              }}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              セール
            </button>
            {/* <button
              type="button"
              onClick={() => {
                router.push('/search?q=人気');
                onClose();
              }}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              人気商品
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
