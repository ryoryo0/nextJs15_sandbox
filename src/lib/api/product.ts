import {Product} from '@/types/product';

export async function getProduct(id: number): Promise<Product> {
  const data: Product = 
    {
      id: 3,
      name: "テスト商品",
      imageUrl: ['https://laravel12.local/storage/images/product/01KBE2GRXNPEK7FPZ9CHA98KNZ.jpg', 'https://laravel12.local/storage/images/product/01KBE2GRXNPEK7FPZ9CHA98KNZ.jpg'],
      categories: ['ピアス', 'リング', 'ネックレス'],
      isNew: true,
      isEvent: true,
      price: 9800,
      originalPrice: 12000,
      discountLabelList: "テスト登録: 30%OFF",
    };

  return data; 
}