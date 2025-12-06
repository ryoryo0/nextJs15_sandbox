"use client";

import { getProduct } from "@/lib/api/product"
import { useParams } from "next/navigation";
import {useEffect, useState} from "react";
import {Product} from '@/types/product';

export default  function Show() {
  const id = Number(useParams().id);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // const product =  getProduct(id);
  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProduct(id);
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.error('商品の取得に失敗しました');
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>読み取り中...</div>;
  }

  if (!product) {
    return <div>商品が見つかりません</div>
  }

  return (
    <div>
      {/* 商品名 */}
      <p>{product.name}</p>

      {/* 商品画像 */}
      {product.imageUrl.map((url, index) => (
        <li key={index}>
          <img src={url} alt={`商品画像-${index + 1}`} />
        </li>
      ))}

      {/* カテゴリー */}
      {product.categories.map((category, index) => (
        <span key={index}>{category}</span>
      ))}
      
      {/* 新着 */}
      {product.isNew
        ? <p>新着</p>
        : null
      }

      {/* イベント適用 */}
      {product.isEvent 
        ? <p>{product.discountLabelList}</p>
        : null
      }

      <strong>
        {/* 商品価格 */}
        {product.price}
        {/* 元の商品の価格 */}
        <span>{product.originalPrice}</span>
      </strong>

    </div>
  );
}