import React, { useState } from "react";

interface ProductFilterProps {
  onSortChange: (sortBy: string) => void;
  onFilterChange: (filter: string) => void;
}

const ProductFilter = ({
  onSortChange,
  onFilterChange,
}: ProductFilterProps) => {
  const [activeSort, setActiveSort] = useState("relevant");
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);

  const handleSortClick = (sortValue: string) => {
    if (sortValue === "price-dropdown") {
      setShowPriceDropdown(!showPriceDropdown);
      return;
    }

    setActiveSort(sortValue);

    let actualSortValue = sortValue;
    switch (sortValue) {
      case "relevant":
        actualSortValue = "default";
        break;
      case "bestseller":
        actualSortValue = "default"; // hoặc tạo logic riêng cho bestseller
        break;
      case "newest":
        actualSortValue = "default"; // hoặc tạo logic riêng cho newest
        break;
      case "popular":
        actualSortValue = "default"; // hoặc tạo logic riêng cho popular
        break;
      // price-asc và price-desc giữ nguyên
    }
    onSortChange(actualSortValue);
    setShowPriceDropdown(false);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showPriceDropdown) {
        setShowPriceDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPriceDropdown]);

  return (
    <div className="">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Left side - Title */}
          {/* <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-gray-900">Danh sách sản phẩm</h1>
            <span className="text-gray-500 text-sm">Sắp xếp theo</span>
          </div> */}

          {/* Right side - Sort Buttons */}
          <div className="flex items-center gap-2">
            {/* Liên quan Button */}
            <button
              onClick={() => handleSortClick("relevant")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeSort === "relevant"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-gray-600 border-gray-300 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-400"
              }`}
            >
              Liên quan
            </button>

            {/* Bán chạy Button */}
            <button
              onClick={() => handleSortClick("bestseller")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeSort === "bestseller"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-gray-600 border-gray-300 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-400"
              }`}
            >
              Bán chạy
            </button>

            {/* Mới nhất Button */}
            <button
              onClick={() => handleSortClick("newest")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeSort === "newest"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-gray-600 border-gray-300 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-400"
              }`}
            >
              Mới nhất
            </button>

            {/* Nổi bật Button */}
            <button
              onClick={() => handleSortClick("popular")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeSort === "popular"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-gray-600 border-gray-300 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-400"
              }`}
            >
              Nổi bật
            </button>

            {/* Price Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => handleSortClick("price-dropdown")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 border ${
                  activeSort.includes("price")
                    ? "bg-blue-600 text-white border-blue-600"
                    : "text-gray-600 border-gray-300 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-400"
                }`}
              >
                <span>
                  {activeSort === "price-asc"
                    ? "Giá: Thấp → Cao"
                    : activeSort === "price-desc"
                      ? "Giá: Cao → Thấp"
                      : "Giá: Thấp → Cao"}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showPriceDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {showPriceDropdown && (
                <div className="absolute top-full right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="">
                    <button
                      onClick={() => handleSortClick("price-asc")}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        activeSort === "price-asc"
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      Giá: Thấp → Cao
                    </button>
                    <button
                      onClick={() => handleSortClick("price-desc")}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        activeSort === "price-desc"
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      Giá: Cao → Thấp
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
