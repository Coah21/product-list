import { useEffect, useState } from "react";

interface ProductFilterProps {
  onSortChange: (sortBy: string) => void;
  onFilterChange: (filter: string) => void;
}

const ProductFilter = ({ onSortChange }: ProductFilterProps) => {
  const [activeSort, setActiveSort] = useState("relevant");
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);

  const handleSortClick = (sortValue: string) => {
    if (sortValue === "price-dropdown") {
      setShowPriceDropdown((prev) => !prev);
      return;
    }

    if (sortValue === "price-asc" || sortValue === "price-desc") {
      setActiveSort(sortValue);
      onSortChange(sortValue);
      setShowPriceDropdown(false);
      return;
    }

    setActiveSort(sortValue);
    let actualSortValue = "default";
    onSortChange(actualSortValue);
    setShowPriceDropdown(false);
  };

  useEffect(() => {
  const handleClickOutside = () => {
    setShowPriceDropdown(false);
  };

  if (showPriceDropdown) {
    setTimeout(() => {
    }, 0);
  }

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, [showPriceDropdown]);

  return (
    <div className="">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Right side - Sort Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSortClick("relevant")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                activeSort === "relevant"
                  ? "bg-white text-black border-blue-600"
                  : "bg-white border-gray-300 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-400"
              }`}
            >
              Liên quan
            </button>

            {/* Bán chạy Button */}
            <button
              onClick={() => handleSortClick("bestseller")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                activeSort === "bestseller"
                  ? "bg-white text-black border-blue-600"
                  : "bg-white border-gray-300 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-400"
              }`}
            >
              Bán chạy
            </button>

            {/* Mới nhất Button */}
            <button
              onClick={() => handleSortClick("newest")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                activeSort === "newest"
                  ? "bg-white text-black border-blue-600"
                  : "bg-white border-gray-300 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-400"
              }`}
            >
              Mới nhất
            </button>

            {/* Nổi bật Button */}
            <button
              onClick={() => handleSortClick("popular")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                activeSort === "popular"
                  ? "bg-white text-black border-blue-600"
                  : "bg-white border-gray-300 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-400"
              }`}
            >
              Nổi bật
            </button>

            {/* Price Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => handleSortClick("price-dropdown")}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-2  ${
                  activeSort.includes("price")
                    ? "text-black"
                    : "hover:text-gray-900 "
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
