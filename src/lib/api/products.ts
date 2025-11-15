import { Product } from '@/types/product';


/**
 * 環境変数でAPIのベースURLを管理する場合
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
// l12dev-app
export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/products/featured`, {
      next: { revalidate: 60 },
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`商品データの取得に失敗しました: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json.data || [];
  } catch (error) {
    console.error('商品取得エラー:', error);
    return [];
  }
}
