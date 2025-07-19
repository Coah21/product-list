export interface FilterOption {
  id: string;
  label: string;
  count: number;
  checked: boolean;
}

export interface FilterCategory {
  id: string;
  title: string;
  isExpanded: boolean;
  options: FilterOption[];
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface ProductFilters {
  categories: FilterCategory[];
  priceRange: PriceRange;
  brands: FilterCategory;
  years: FilterCategory;
  origins: FilterCategory;
}