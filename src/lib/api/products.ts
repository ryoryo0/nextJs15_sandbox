  import { Products } from '@/types/api/products';
  import {API_BASE_URL} from './config' 

  /**
   * 環境変数でAPIのベースURLを管理する場合
   */

  export async function getFeaturedProducts(): Promise<Products[]> {
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
      
      console.log(json.data);

      return json.data || [];
    } catch (error) {
      console.error('商品取得エラー:', error);
      return [];
    }
  }

  /**
   * 商品を検索する
   */
  export async function searchProducts(query: string, category?: string): Promise<Products[]> {
    try {
      const params = new URLSearchParams();
      params.set('q', query);
      if (category && category !== 'all') {
        params.set('category', category);
      }

      const response = await fetch(`${API_BASE_URL}/api/v1/products/search?${params.toString()}`, {
        next: { revalidate: 0 }, // 検索結果はキャッシュしない
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`検索に失敗しました: ${response.status}`);
      }

      const json = await response.json();
      return json.data || [];
    } catch (error) {
      console.error('検索エラー:', error);
      return [];
    }
  }
