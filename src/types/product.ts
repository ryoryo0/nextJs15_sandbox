// 商品詳細ページの方定義
export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  categories: Array<string>;
  isNew: boolean;
  isEvent: boolean;
  price: number;
  originalPrice?: number;
  discountLabelList: Array<string>;
}