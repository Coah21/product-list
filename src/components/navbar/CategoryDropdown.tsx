import { useState, useEffect } from "react";
import { sampleProducts } from "../../data/sampleProducts";
import type { Product } from "../../types/Product";

interface CategoryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  href: string;
  categoryKey: string;
}

interface CategoryDropdownProps {
  isVisible: boolean;
}

const CategoryDropdown = ({ isVisible }: CategoryDropdownProps) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categoryItems: CategoryItem[] = [
    {
      id: "oil-filter",
      name: "Bộ Lọc Dầu",
      href: "#",
      categoryKey: "oil-filter",
      icon: <img src="../../image/oilfilter.png" alt="" />,
    },
    {
      id: "air-filter",
      name: "Bộ Lọc Không Khí",
      href: "#",
      categoryKey: "air-filter",
      icon: <img src="../../image/air-filter.png" alt="" />,
    },
    {
      id: "fuel-filter",
      name: "Bộ Lọc Nhiên Liệu",
      href: "#",
      categoryKey: "fuel-filter",
      icon: <img src="../../image/fuel-filter.png" alt="" />,
    },
    {
      id: "spare-parts",
      name: "Bộ lọc trong Cabin",
      href: "#",
      categoryKey: "spare-parts",
      icon: <img src="../../image/cabin-filter.png" alt="" />,
    },
    {
      id: "other",
      name: "Sản Phẩm Khác",
      href: "#",
      categoryKey: "other",
      icon: <img src="../../image/gold-filter.png" alt="" />,
    },
  ];

  // Tự động set category đầu tiên khi dropdown hiển thị
  useEffect(() => {
    if (isVisible && !hoveredCategory && categoryItems.length > 0) {
      setHoveredCategory(categoryItems[0].categoryKey);
    }
    if (!isVisible) {
      setHoveredCategory(null);
    }
  }, [isVisible]);

  const handleCategoryClick = (categoryId: string) => {
    console.log("Category clicked:", categoryId);
  };

  // Lấy sản phẩm theo category được hover
  const getProductsByCategory = (categoryKey: string): Product[] => {
    return sampleProducts
      .filter((product) => product.category === categoryKey)
      .slice(0, 5); // Chỉ lấy 5 sản phẩm cho phần bán chạy
  };

  // Lấy 6 sản phẩm cho grid trên
  const getTopCategories = () => {
    const topProducts = sampleProducts.slice(0, 6);
    return topProducts.map((product) => ({
      id: product.id,
      name: "Bộ lọc gió", // Tên generic cho tất cả
      image: product.image,
      category: product.category,
    }));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + " đ";
  };

  return (
    <div
      className={`absolute top-full left-0 w-[900px] bg-gray-100 shadow-xl rounded-lg transition-all duration-200 z-50 group-hover:opacity-100 group-hover:visible ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="flex">
        {/* Cột trái - Danh sách categories */}
        <div className="w-1/3 border-r border-gray-100">
          <div className=" bg-white">
            {categoryItems.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                onMouseEnter={() => setHoveredCategory(item.categoryKey)}
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick(item.id);
                }}
                className={`flex items-center justify-between px-4 py-4 text-gray-800 hover:bg-gray-100 ${
                  hoveredCategory === item.categoryKey
                    ? "bg-gray-100"
                    : ""
                } ${
                  index < categoryItems.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.name}</span>
                </div>
                <svg
                  className="w-4 h-4 text-gray-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Cột phải - Nội dung */}
        <div className="w-2/3 p-4">
          {hoveredCategory ? (
            <div>
              {/* Grid categories nhỏ phía trên */}
              <div className="mb-4 border-b border-gray-300 pb-4">
                <div className="grid grid-cols-3 gap-4">
                  {getTopCategories().map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white rounded-lg p-3 cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-white rounded flex items-center justify-center flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sản Phẩm Bán Chạy */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Sản Phẩm Bán Chạy
                  </h3>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                  >
                    Xem tất cả
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>

                {/* Grid sản phẩm bán chạy */}
                <div className="grid grid-cols-5 gap-3">
                  {getProductsByCategory(hoveredCategory).map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="aspect-square mb-2 bg-white rounded flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-16 object-contain"
                        />
                      </div>
                      <h4 className="text-xs font-medium text-gray-900 mb-1 line-clamp-2 min-h-[24px]">
                        {product.name}
                      </h4>
                      <div className="text-red-600 font-bold text-xs">
                        {formatPrice(product.salePrice)}
                      </div>
                      {product.originalPrice > product.salePrice && (
                        <div className="flex items-center gap-1 text-[10px]">
                          <span className="text-gray-400 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                          <span className="text-red-500">
                            -{product.discount}%
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {getProductsByCategory(hoveredCategory).length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <p>Chưa có sản phẩm trong danh mục này</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-3 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <p>Di chuột qua danh mục để xem sản phẩm</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown;
