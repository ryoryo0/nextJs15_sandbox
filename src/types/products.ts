// 商品の型定義
export interface Products {
  // 商品
  id: number;
  name: string;
  imageUrl: string;
  categories: Array<string>;
  isPickUp: boolean;
  isNew: boolean;
  isEvent: boolean;
  price: number;
  originalPrice?: number;
  discountLabelList: Array<string>;
}
