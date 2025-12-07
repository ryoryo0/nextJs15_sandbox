import {Product, ProductResponse} from '@/types/product';
import { API_BASE_URL } from './config';


export async function getProduct(id: number, color?: string): Promise<Product | ProductResponse> {

  const url = color
    ? `${API_BASE_URL}/api/v1/products/${id}?color=${color}`
    : `${API_BASE_URL}/api/v1/products/${id}`;

  try {
    const response = await fetch(url, {
      next: {revalidate: 60},
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.status === 204) {
      return {
        status: 204,
        message: '現在在庫登録中'
      };
    }

    if (!response.ok) {
      throw new Error(`商品詳細のデータ取得に失敗しました: ${response.status}`);
    }

    const json = await response.json();

    return json.data || [];
  } catch (error) {
    console.error('商品詳細の取得エラー:', error);
    return {} as Product; 
  }
}