'use client';

import { useState, useRef, useEffect } from 'react';

export interface CategoryOption {
  value: string;
  label: string;
  icon?: string;
}

interface CategoryAutocompleteProps {
  categories: CategoryOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function CategoryAutocomplete({
  categories,
  value,
  onChange,
  placeholder = 'カテゴリを選択または入力...',
}: CategoryAutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 選択されたカテゴリの情報を取得
  const selectedCategory = categories.find((cat) => cat.value === value);

  // 検索語に基づいてフィルタリング
  const filteredCategories = categories.filter((cat) =>
    cat.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 外部クリックでドロップダウンを閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // ドロップダウンが開かれたときにハイライトインデックスをリセット
  useEffect(() => {
    if (isOpen) {
      setHighlightedIndex(0);
    }
  }, [isOpen, filteredCategories]);

  const handleSelect = (categoryValue: string) => {
    onChange(categoryValue);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === 'ArrowDown') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredCategories.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredCategories[highlightedIndex]) {
          handleSelect(filteredCategories[highlightedIndex].value);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setSearchTerm('');
        break;
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* 入力フィールド */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={isOpen ? searchTerm : selectedCategory?.label || ''}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            if (!isOpen) {
              setIsOpen(true);
            }
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-300 p-3 pl-4 pr-10 text-base text-gray-900 outline-none ring-indigo-300 transition duration-100 focus:border-indigo-500 focus-visible:ring"
        />
        {/* アイコン表示 */}
        
      </div>

      {/* ドロップダウンリスト */}
      {isOpen && (
        <div className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg">
          {filteredCategories.length > 0 ? (
            <ul className="py-1">
              {filteredCategories.map((category, index) => (
                <li key={category.value}>
                  <button
                    type="button"
                    onClick={() => handleSelect(category.value)}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition duration-100 ${
                      index === highlightedIndex
                        ? 'bg-indigo-50 text-indigo-700'
                        : value === category.value
                          ? 'bg-indigo-100 text-indigo-800 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onMouseEnter={() => setHighlightedIndex(index)}
                  >
                    {category.icon && (
                      <span className="text-lg">{category.icon}</span>
                    )}
                    <span className="flex-1">{category.label}</span>
                    {value === category.value && (
                      <svg
                        className="h-5 w-5 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-8 text-center text-sm text-gray-500">
              一致するカテゴリが見つかりません
            </div>
          )}
        </div>
      )}
    </div>
  );
}
