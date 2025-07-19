import type { Product } from "../../types/Product";

interface ProductCardProps {
  product: Product;
  onQuickBuy?: (productId: string) => void;
}

const ProductCard = ({ product, onQuickBuy }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + " đ";
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-sm">
      {/* Product Image */}
      <div className="">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Hot Deal Badge - Hiển thị ở đầu product info */}
        {product.isHotDeal && (
          <div className="mb-2">
            <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-400 via-yellow-400 to-yellow-300 px-3 py-1.5 rounded-full shadow-md border border-yellow-200">
              {/* Icon container */}
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-500 text-[10px] leading-none">
                  🔥
                </span>
              </div>
              {/* Text */}
              <span className="text-gray-800 text-[11px] font-bold whitespace-nowrap">
                Giá cực sốc
              </span>
            </div>
          </div>
        )}
        {/* Product Name */}
        <h3 className="font-medium text-sm mb-3 leading-5 line-clamp-2 min-h-[40px]">
          {product.name}
        </h3>

        {/* Price Section */}
        <div className="mb-4">
          {/* Current Price */}
          <div className="text-red-600 font-bold text-lg mb-1">
            {formatPrice(product.salePrice)}
          </div>

          {/* Original Price and Discount */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
            <span className="text-red-500 font-medium">
              -{product.discount}%
            </span>
          </div>
        </div>

        {/* Buy Button */}
        <button
          onClick={() => onQuickBuy?.(product.id)}
          className="w-full bg-blue-200 hover:bg-blue-600 hover:text-white text-blue-500 py-2.5 px-4 rounded-md font-medium transition-colors duration-200"
        >
          Mua ngay
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
