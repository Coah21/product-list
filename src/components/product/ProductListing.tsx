import { useCallback, useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";
import { sampleProducts } from "../../data/sampleProducts";
import type { Product } from "../../types/Product";
import FilterSidebar from "../filter/FilterSideBar";
import ProductFilter from "./ProductFilter";

type ProductListingProps = {
  onSortChange: () => void;
  onFilterChange: () => void;
};

const ProductListing: React.FC<ProductListingProps> = () => {
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState("default");
  const [hasMore, setHasMore] = useState(true);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);

  const PAGE_SIZE = 8;

  const loadMore = useCallback(() => {
    if (!hasMore || loading || allProducts.length === 0) return;

    setLoading(true);
    setTimeout(() => {
      const start = (page - 1) * PAGE_SIZE;
      const end = start + PAGE_SIZE;
      const newProducts = allProducts.slice(start, end);

      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        setDisplayedProducts((prev) => [...prev, ...newProducts]);
        setHasMore(end < allProducts.length);
        setPage((prev) => prev + 1);
      }
      setLoading(false);
    }, 500);
  }, [page, allProducts, hasMore, loading]);

  // Khởi tạo allProducts
  useEffect(() => {
    setAllProducts(sampleProducts);
  }, []);

  // Auto load khi allProducts thay đổi
  useEffect(() => {
    if (allProducts.length > 0 && displayedProducts.length === 0) {
      loadMore();
    }
  }, [allProducts, displayedProducts.length, loadMore]);

  // Infinite scroll listener
  useEffect(() => {
    if (!hasMore || loading) return;

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 400
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, loadMore]);

  const handleFilterChange = (filters: any) => {
    console.log("Filters received:", filters); // Debug log

    let filtered = [...sampleProducts];

    // Filter by categories
    if (filters.categories) {
      const categoryFilter = filters.categories.find(
        (cat: any) => cat.id === "categories"
      );
      const selectedCategories =
        categoryFilter?.options
          ?.filter((opt: any) => opt.checked)
          ?.map((opt: any) => opt.id) || [];

      if (selectedCategories.length > 0) {
        filtered = filtered.filter((product) =>
          selectedCategories.includes(product.category)
        );
      }
    }

    // Filter by brands
    if (filters.categories) {
      const brandFilter = filters.categories.find(
        (cat: any) => cat.id === "brands"
      );
      const selectedBrands =
        brandFilter?.options
          ?.filter((opt: any) => opt.checked)
          ?.map((opt: any) => opt.id) || [];

      if (selectedBrands.length > 0) {
        filtered = filtered.filter((product) =>
          selectedBrands.includes(product.brand)
        );
      }
    }

    // Filter by years
    if (filters.categories) {
      const yearFilter = filters.categories.find(
        (cat: any) => cat.id === "years"
      );
      const selectedYears =
        yearFilter?.options
          ?.filter((opt: any) => opt.checked)
          ?.map((opt: any) => opt.id) || [];

      if (selectedYears.length > 0) {
        filtered = filtered.filter((product) =>
          selectedYears.includes(product.year)
        );
      }
    }

    // Filter by origins
    if (filters.categories) {
      const originFilter = filters.categories.find(
        (cat: any) => cat.id === "origins"
      );
      const selectedOrigins =
        originFilter?.options
          ?.filter((opt: any) => opt.checked)
          ?.map((opt: any) => opt.id) || [];

      if (selectedOrigins.length > 0) {
        filtered = filtered.filter((product) =>
          selectedOrigins.includes(product.origin)
        );
      }
    }

    // Filter by price range
    if (filters.selectedPriceRange) {
      switch (filters.selectedPriceRange) {
        case "under-100k":
          filtered = filtered.filter((product) => product.salePrice < 100000);
          break;
        case "100k-300k":
          filtered = filtered.filter(
            (product) =>
              product.salePrice >= 100000 && product.salePrice <= 300000
          );
          break;
        case "300k-500k":
          filtered = filtered.filter(
            (product) =>
              product.salePrice >= 300000 && product.salePrice <= 500000
          );
          break;
        case "over-500k":
          filtered = filtered.filter((product) => product.salePrice > 500000);
          break;
      }
    }

    console.log("Filtered products:", filtered); // Debug log

    // Apply current sort to filtered results
    if (sortBy !== "default") {
      switch (sortBy) {
        case "price-asc":
          filtered.sort((a, b) => a.salePrice - b.salePrice);
          break;
        case "price-desc":
          filtered.sort((a, b) => b.salePrice - a.salePrice);
          break;
        case "name-asc":
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
      }
    }

    setAllProducts(filtered);
    setDisplayedProducts([]);
    setPage(1);
    setHasMore(true);
  };

  const handleSortChange = (sortValue: string) => {
    setSortBy(sortValue);
    let sorted = [...sampleProducts];

    switch (sortValue) {
      case "price-asc":
        sorted.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.salePrice - a.salePrice);
        break;
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        sorted = [...sampleProducts];
        break;
    }

    setAllProducts(sorted);
    setDisplayedProducts([]);
    setPage(1);
    setHasMore(true);
  };

  const handleQuickBuy = (productId: string) => {
    console.log("Quick buy:", productId);
  };

  return (
    <div className="">
      <div className="container mx-auto py-6">
        <div className="flex gap-8">
          <div className="flex-shrink-0">
            <FilterSidebar onFilterChange={handleFilterChange} />
          </div>

          <div className="flex-1">
            <div className="rounded-lg mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-bold text-gray-900 mb-2">
                    Danh sách sản phẩm
                  </h1>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">Sắp xếp theo</span>
                  <ProductFilter
                    onSortChange={handleSortChange}
                    onFilterChange={handleFilterChange}
                  />
                </div>
              </div>
            </div>

            {/* Sửa thành displayedProducts */}
            <ProductGrid
              products={displayedProducts}
              loading={false}
              onQuickBuy={handleQuickBuy}
            />

            {/* Loading states */}
            {loading && (
              <div className="text-center py-6">Đang tải thêm...</div>
            )}
            {!hasMore && displayedProducts.length > 0 && (
              <div className="text-center py-6 text-gray-400">
                Đã tải hết sản phẩm
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
