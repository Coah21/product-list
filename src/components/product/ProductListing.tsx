import { useState } from 'react';
import ProductGrid from './ProductGrid';
import { sampleProducts } from '../../data/sampleProducts';
import type { Product } from '../../types/Product';
import FilterSidebar from '../filter/FilterSideBar';

const ProductListing = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(sampleProducts);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState('default');

  const handleFilterChange = (filters: any) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Apply filters logic here
      let filtered = [...sampleProducts];
      
      // Example filter logic
      const selectedCategories = filters.categories
        ?.find((cat: any) => cat.id === 'categories')
        ?.options?.filter((opt: any) => opt.checked)
        ?.map((opt: any) => opt.id) || [];

      if (selectedCategories.length > 0) {
        // Filter by selected categories
        // This is just example logic - implement based on your data structure
      }

      setFilteredProducts(filtered);
      setLoading(false);
    }, 500);
  };

  const handleSortChange = (sortValue: string) => {
    setSortBy(sortValue);
    let sorted = [...filteredProducts];
    
    switch (sortValue) {
      case 'price-asc':
        sorted.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.salePrice - a.salePrice);
        break;
      case 'name-asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        // Sort by newest (you'd need a date field)
        break;
      default:
        // Default sorting
        break;
    }
    
    setFilteredProducts(sorted);
  };

  const handleQuickBuy = (productId: string) => {
    console.log('Quick buy:', productId);
  };

  return (
    <div className="">
      <div className="container mx-auto py-6">
        <div className="flex gap-8">
          {/* Sidebar Filter */}
          <div className="flex-shrink-0">
            <FilterSidebar onFilterChange={handleFilterChange} />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="rounded-lg mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-bold text-gray-900 mb-2">Danh sách sản phẩm</h1>
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">Sắp xếp theo:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="default">Liên quan</option>
                    <option value="price-asc">Giá: Thấp đến Cao</option>
                    <option value="price-desc">Giá: Cao đến Thấp</option>
                    <option value="name-asc">Tên: A-Z</option>
                    <option value="newest">Mới nhất</option>
                  </select>

                  {/* View Toggle */}
                  <div className="flex items-center gap-2 ml-4">
                    <span className="text-sm text-gray-600">Bán chạy</span>
                    <span className="text-sm text-gray-600">Mới nhất</span>
                    <span className="text-sm text-gray-600">Nổi bật</span>
                    <span className="text-sm text-blue-600 font-medium">Giá Thấp - Cao</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <ProductGrid
              products={filteredProducts}
              loading={loading}
              onQuickBuy={handleQuickBuy}
            />

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
                  ←
                </button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;