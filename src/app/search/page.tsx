import { Suspense } from 'react';
import { searchProducts } from '@/lib/api/products';
import ProductCard from '@/components/product/ProductCard';
import SearchForm from '@/components/search/SearchForm';

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q || '';
  const category = params.category;

  // 商品を検索（クエリがある場合のみ）
  const products = query ? await searchProducts(query, category) : [];

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* ヘッダー */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            商品検索
          </h2>
          {!query && (
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              検索キーワードを入力してください
            </p>
          )}
        </div>

        {/* 検索フォーム */}
        <Suspense fallback={<SearchFormSkeleton />}>
          <SearchForm />
        </Suspense>

        {/* 検索結果 */}
        {query && (
          <div className="mt-10">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800">
                &quot;{query}&quot; の検索結果
                {category && category !== 'all' && (
                  <span className="ml-2 text-sm font-normal text-gray-500">
                    （検索対象: {getCategoryLabel(category)}）
                  </span>
                )}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {products.length}件の商品が見つかりました
              </p>
            </div>

            {products.length > 0 ? (
              <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="mx-auto max-w-lg text-center">
                <div className="mb-4 text-6xl">🔍</div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  商品が見つかりませんでした
                </h3>
                <p className="text-gray-500">
                  別のキーワードで検索してみてください
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// カテゴリラベルを取得するヘルパー関数
function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    product: '商品名',
    author: '作者名',
    category: 'カテゴリ',
    event: 'イベント',
  };
  return labels[category] || category;
}

// スケルトンコンポーネント
function SearchFormSkeleton() {
  return (
    <div className="mx-auto mb-10 max-w-2xl">
      <div className="animate-pulse rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="space-y-5">
          <div>
            <div className="mb-2 h-4 w-20 rounded bg-gray-200"></div>
            <div className="h-12 w-full rounded-lg bg-gray-200"></div>
          </div>
          <div>
            <div className="mb-2 h-4 w-20 rounded bg-gray-200"></div>
            <div className="h-12 w-full rounded-lg bg-gray-200"></div>
          </div>
          <div className="h-12 w-full rounded-lg bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
