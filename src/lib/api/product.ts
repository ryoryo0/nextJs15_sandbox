import {Product} from '@/types/product';

export async function getProduct(id: number): Promise<Product> {
  const data: Product = 
    {
      id: 3,
      name: "テスト商品",
      imageUrl: "テスト商品",
      categories: ['テスト登録:30%OFF'],
      isNew: true,
      isEvent: true,
      price: 9800,
      originalPrice: 12000,
      discountLabelList: [],
    };
  return data; 
}