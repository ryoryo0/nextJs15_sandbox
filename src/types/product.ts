// 商品詳細ページの方定義
export interface Product {
  id: number;
  name: string;
  imageUrl: Array<string>;
  categories: Array<string>;
  isNew: boolean;
  isEvent: boolean;
  price: number;
  originalPrice?: number;
  discountLabelList: string;
  colorList: Array<string>;
  stockDate: StockDate[];
}

// 在庫情報の型
export interface StockDate {
  size: string;
  stock: number;
}