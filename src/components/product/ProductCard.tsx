import { Products } from '@/types/products';
import Image from 'next/image';

interface ProductCardProps {
    product: Products;
}


export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <a href={`/product/${product.id}`} className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
        <img
          src={product.imageUrl}
          loading="lazy"
          alt={product.name}
          className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        {/* バッジ表示 */}
        {product.isNew && (
          <div className="absolute left-0 bottom-2 flex gap-2">
              <span className="rounded-r-lg bg-indigo-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                NEW
              </span>
          </div>
        )}
        {product.isPickUp && (
          <div className="absolute left-0 bottom-2 flex gap-2">
              <span className="rounded-r-lg bg-indigo-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                Pick Up
              </span>
          </div>
        )}
        
          {product.discountLabelList.map((discountLabel, index) => (
            <div className="absolute left-0 bottom-2 flex gap-2" key={index} >
              <span className="rounded-r-lg bg-indigo-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                {discountLabel}
              </span>
            </div>
          ))}
        
      </a>

      <div className="flex items-start justify-between gap-2 px-2">
        <div className="flex flex-col">
          <a
            href={`/product/${product.id}`}
            className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
          >
            {product.name}
          </a>
          <div className="flex flex-wrap gap-2">
          {product.categories.map((categoryName, index) => (
            <span className="text-gray-500" key={index}>{categoryName}</span>
          ))}
          </div>
        </div>

        <div className="flex flex-col items-end">
          <span className="font-bold text-gray-600 lg:text-lg">
            ¥{product.price}
          </span>
          {product.originalPrice && product.isEvent &&(
            <span className="text-sm text-red-500 line-through">
              ¥{product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
