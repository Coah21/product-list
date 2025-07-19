import { useState } from 'react';

interface ProductListingHeaderProps {
  totalProducts: number;
  onSortChange: (sortBy: string) => void;
  onViewChange?: (view: string) => void;
}

const ProductListingHeader = ({ totalProducts, onSortChange, onViewChange }: ProductListingHeaderProps) => {
  const [activeSort, setActiveSort] = useState('relevant');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const sortOptions = [
    { value: 'relevant', label: 'Liên quan' },
    { value: 'bestseller', label: 'Bán chạy' },
    { value: 'newest', label: 'Mới nhất' },
    { value: 'popular', label: 'Nổi bật' },
    { value: 'price-asc', label: 'Giá: Thấp → Cao' },
    { value: 'price-desc', label: 'Giá: Cao → Thấp' },
  ];

  const handleSortClick = (sortValue: string) => {
    if (sortValue === 'price-dropdown') {
      setShowSortDropdown(!showSortDropdown);
      return;
    }
    
    setActiveSort(sortValue);
    onSortChange(sortValue);
    setShowSortDropdown(false);
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Left side - Title */}
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-gray-900">Danh sách sản phẩm</h1>
            <span className="text-gray-500">Sắp xếp theo</span>
          </div>

          {/* Right side - Sort Options */}
          <div className="flex items-center gap-1">
            {/* Liên quan Button */}
            <button
              onClick={() => handleSortClick('relevant')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSort === 'relevant'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Liên quan
            </button>

            {/* Bán chạy Button */}
            <button
              onClick={() => handleSortClick('bestseller')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSort === 'bestseller'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Bán chạy
            </button>

            {/* Mới nhất Button */}
            <button
              onClick={() => handleSortClick('newest')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSort === 'newest'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Mới nhất
            </button>

            {/* Nổi bật Button */}
            <button
              onClick={() => handleSortClick('popular')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSort === 'popular'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Nổi bật
            </button>

            {/* Price Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleSortClick('price-dropdown')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeSort.includes('price')
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span>
                  {activeSort === 'price-asc' ? 'Giá: Thấp → Cao' : 
                   activeSort === 'price-desc' ? 'Giá: Cao → Thấp' : 
                   'Giá: Thấp → Cao'}
                </span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showSortDropdown ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {showSortDropdown && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    <button
                      onClick={() => handleSortClick('price-asc')}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                        activeSort === 'price-asc' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                      }`}
                    >
                      Giá: Thấp → Cao
                    </button>
                    <button
                      onClick={() => handleSortClick('price-desc')}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                        activeSort === 'price-desc' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
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

export default ProductListingHeader;