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
    return <div>読み取り中...</div>;
  }

  // 商品データが取得できなかった場合
  if (!product) {
    return <div>商品が見つかりません</div>
  }

  // ProductResponseの場合（status 204など）
  if ('status' in product && product.status === 204) {
    return <div>{product.message || '現在在庫登録中'}</div>
  }

  // Product型として扱う（型ガード）
  const productData = product as Product;

  return (
    <div>
      {/* 商品名 */}
      <p>{productData.name}</p>

      {/* 商品画像 */}
      {productData.imageUrl.map((url, index) => (
        <li key={index}>
          <img src={url} alt={`商品画像-${index + 1}`} />
        </li>
      ))}

      {/* カテゴリー */}
      {productData.categories.map((category, index) => (
        <span key={index}>{category}</span>
      ))}
      
      {/* 新着 */}
      {productData.isNew
        ? <p>新着</p>
        : null
      }

      {/* イベント適用 */}
      {productData.isEvent 
        ? <p>{productData.discountLabelList}</p>
        : null
      }

      <strong>
        {/* 商品価格 */}
        {productData.price}
        {/* 元の商品の価格 */}
        {productData.isEvent
          ? <span>{productData.originalPrice}</span>
          : null
        }
        
      </strong>
      
      {/* サイズ */}
      {productData.colorList.map((color, index)=>(
        <button key={index} onClick={() => handleRefresh(color)}>{color}</button>
      ))}

      {/* ストックデータ */}
      {productData.stockDate.map((date, index)=>(
        <label key={index}>
        <input
          key={index}
          type="radio"
          name="size"
          value={date.size}
          checked={selectedSize === date.size}
          onChange={(e) => setSelectedSize(e.target.value)}
        />
        {date.size} : {date.stock}
      </label>
      ))}
    </div>
  );
}