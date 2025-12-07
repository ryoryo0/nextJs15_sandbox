"use client";

import { getProduct } from "@/lib/api/product"
import { useParams } from "next/navigation";
import {useEffect, useState} from "react";
import {Product, ProductResponse} from '@/types/product';

export default  function Show() {
  const id = Number(useParams().id);
  const color = useParams().color ? useParams().color : '';

  const [product, setProduct] = useState<Product | ProductResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedColor, setSelectedColor] = useState<string>(''); // 選択中のカラー
  const [selectedSize, setSelectedSize] = useState<string>('');


  const fetchProduct = async (color?: string) => {
    setLoading(true);
    try {
      const data = await getProduct(id, color);
      setProduct(data);
    } catch (error) {
      console.error('商品の取得に失敗しました');
    } finally {
      setLoading(false);
    }
  } 

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleRefresh = (color: string) => {
    setSelectedColor(color);
    fetchProduct(color);
  };

  // ローディング中
  if (loading) {
    return (
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="text-center">
              <div className="mb-4 text-6xl">⏳</div>
              <p className="text-lg text-gray-600">読み取り中...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 商品データが取得できなかった場合
  if (!product) {
    return (
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="text-center">
              <div className="mb-4 text-6xl">🔍</div>
              <h3 className="mb-2 text-xl font-bold text-gray-800">
                商品が見つかりません
              </h3>
              <p className="text-gray-500">
                お探しの商品は存在しないか、削除された可能性があります
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ProductResponseの場合（status 204など）
  if ('status' in product && product.status === 204) {
    return (
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="text-center">
              <div className="mb-4 text-6xl">📦</div>
              <h3 className="mb-2 text-xl font-bold text-gray-800">
                現在在庫登録中
              </h3>
              <p className="text-gray-500">
                {product.message || 'しばらくお待ちください'}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Product型として扱う（型ガード）
  const productData = product as Product;

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* 商品画像セクション */}
          <div className="space-y-4">
            {/* メイン画像 */}
            <div className="relative overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <img
                src={productData.imageUrl[0]}
                alt={productData.name}
                className="h-full w-full object-cover object-center"
              />

              {/* バッジ */}
              <div className="absolute left-0 bottom-2 flex flex-col gap-2">
                {productData.isNew && (
                  <span className="rounded-r-lg bg-indigo-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                    NEW
                  </span>
                )}
                {productData.isEvent && productData.discountLabelList && (
                  <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                    {productData.discountLabelList}
                  </span>
                )}
              </div>
            </div>

            {/* サムネイル画像 */}
            {productData.imageUrl.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {productData.imageUrl.map((url, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg bg-gray-100 shadow-md"
                  >
                    <img
                      src={url}
                      alt={`商品画像-${index + 1}`}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 商品情報セクション */}
          <div className="md:py-8">
            {/* カテゴリー */}
            <div className="mb-4 flex flex-wrap gap-2">
              {productData.categories.map((category, index) => (
                <span
                  key={index}
                  className="text-sm text-gray-500"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* 商品名 */}
            <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              {productData.name}
            </h1>

            {/* 価格 */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-800">
                  ¥{productData.price.toLocaleString('ja-JP')}
                </span>
                {productData.isEvent && productData.originalPrice && (
                  <span className="text-lg text-red-500 line-through">
                    ¥{productData.originalPrice.toLocaleString('ja-JP')}
                  </span>
                )}
              </div>
            </div>

            {/* カラー選択 */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold text-gray-800 md:text-base">
                カラー
              </h3>
              <div className="flex flex-wrap gap-2">
                {productData.colorList.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => handleRefresh(color)}
                    className={`rounded-lg border px-6 py-2 text-sm font-semibold transition duration-100 ${
                      selectedColor === color
                        ? 'border-indigo-500 bg-indigo-500 text-white'
                        : 'border-gray-300 bg-white text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* サイズ選択 */}
            <div className="mb-8">
              <h3 className="mb-3 text-sm font-semibold text-gray-800 md:text-base">
                サイズ・在庫
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {productData.stockDate.map((item, index) => (
                  <label
                    key={index}
                    className={`cursor-pointer rounded-lg border p-4 transition duration-100 ${
                      selectedSize === item.size
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-300 bg-white hover:bg-gray-50'
                    } ${item.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <input
                      type="radio"
                      name="size"
                      value={item.size}
                      checked={selectedSize === item.size}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      disabled={item.stock === 0}
                      className="sr-only"
                    />
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-800">
                        {item.size}
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        {item.stock === 0 ? '在庫なし' : `在庫: ${item.stock}点`}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* カートに追加ボタン */}
            <button className="inline-block w-full rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              カートに追加
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}