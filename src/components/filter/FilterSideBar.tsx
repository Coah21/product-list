import { useState } from 'react';
import type { FilterCategory } from '../../types/Filter';

interface FilterSidebarProps {
  onFilterChange: (filters: any) => void;
}

const FilterSidebar = ({ onFilterChange }: FilterSidebarProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['categories', 'price', 'brands', 'years', 'origins']);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');

  // Sample filter data matching the image
  const filterCategories: FilterCategory[] = [
    {
      id: 'categories',
      title: 'Danh mục sản phẩm',
      isExpanded: true,
      options: [
        { id: 'air-filter', label: 'Lọc gió Động cơ - Air Filter', count: 24, checked: true },
        { id: 'fuel-filter', label: 'Lọc Nhiên Liệu - Fuel Filter', count: 24, checked: true },
        { id: 'oil-filter', label: 'Bộ lọc dầu', count: 24, checked: true },
        { id: 'spare-parts', label: 'Phụ phẩm loại', count: 24, checked: false },
        { id: 'other', label: 'Khác', count: 24, checked: false },
      ]
    },
    {
      id: 'brands',
      title: 'Thương hiệu',
      isExpanded: true,
      options: [
        { id: 'asakashi', label: 'Asakashi', count: 24, checked: false },
        { id: 'bosch', label: 'Bosch', count: 24, checked: false },
        { id: 'hyundai', label: 'Hyundai', count: 24, checked: false },
      ]
    },
    {
      id: 'years',
      title: 'Năm sản xuất',
      isExpanded: true,
      options: [
        { id: '2021', label: '2021', count: 24, checked: false },
        { id: '2020', label: '2020', count: 24, checked: false },
        { id: '2019', label: '2019', count: 24, checked: false },
        { id: '2018', label: '2018', count: 24, checked: false },
      ]
    },
    {
      id: 'origins',
      title: 'Xuất xứ',
      isExpanded: true,
      options: [
        { id: 'germany', label: 'Đức', count: 24, checked: false },
        { id: 'japan', label: 'Nhật Bản', count: 24, checked: false },
        { id: 'china', label: 'Trung Quốc', count: 24, checked: false },
      ]
    }
  ];

  const [filters, setFilters] = useState(filterCategories);

  const priceRanges = [
    { id: 'under-100k', label: 'Dưới 100.000 đ', value: 'under-100k' },
    { id: '100k-300k', label: '100.000 đ - 300.000 đ', value: '100k-300k' },
    { id: '300k-500k', label: '300.000 đ - 500.000 đ', value: '300k-500k' },
    { id: 'over-500k', label: 'Trên 500.000 đ', value: 'over-500k' },
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleCheckboxChange = (categoryId: string, optionId: string) => {
    const updatedFilters = filters.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          options: category.options.map(option =>
            option.id === optionId 
              ? { ...option, checked: !option.checked }
              : option
          )
        };
      }
      return category;
    });
    
    setFilters(updatedFilters);
    onFilterChange({ categories: updatedFilters, selectedPriceRange });
  };

  const handlePriceRangeChange = (rangeValue: string) => {
    setSelectedPriceRange(rangeValue);
    onFilterChange({ categories: filters, selectedPriceRange: rangeValue });
  };

  return (
    <div className="w-80 bg-white p-6">
      {/* Header */}
      <div className="flex items-center gaap-3 mb-8 pb-6 border-b border-gray-200">
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-blue-600">Bộ Lọc</h2>
      </div>

      {/* Danh mục sản phẩm - ĐỨNG ĐẦU */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button
          onClick={() => toggleSection('categories')}
          className="w-full flex items-center justify-between mb-4 group"
        >
          <h3 className="text-lg font-semibold text-gray-900">Danh mục sản phẩm</h3>
          <svg 
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              expandedSections.includes('categories') ? 'rotate-180' : ''
            }`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {expandedSections.includes('categories') && (
          <div className="space-y-4">
            {filters.find(f => f.id === 'categories')?.options.map((option) => (
              <label
                key={option.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={option.checked}
                    onChange={() => handleCheckboxChange('categories', option.id)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                    option.checked 
                      ? 'bg-blue-600 border-blue-600' 
                      : 'border-gray-300 group-hover:border-blue-400'
                  }`}>
                    {option.checked && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-gray-700 text-base flex-1 group-hover:text-gray-900">
                  {option.label}
                </span>
                <span className="text-gray-400 text-sm">({option.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Khoảng giá - THỨ 2 */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button
          onClick={() => toggleSection('price')}
          className="w-full flex items-center justify-between mb-4 group"
        >
          <h3 className="text-lg font-semibold text-gray-900">Khoảng giá</h3>
          <svg 
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              expandedSections.includes('price') ? 'rotate-180' : ''
            }`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {expandedSections.includes('price') && (
          <div className="space-y-3">
            {priceRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => handlePriceRangeChange(range.value)}
                className={`w-full py-3 px-4 rounded-lg border text-left transition-all duration-200 ${
                  selectedPriceRange === range.value
                    ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Thương hiệu - THỨ 3 */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button
          onClick={() => toggleSection('brands')}
          className="w-full flex items-center justify-between mb-4 group"
        >
          <h3 className="text-lg font-semibold text-gray-900">Thương hiệu</h3>
          <svg 
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              expandedSections.includes('brands') ? 'rotate-180' : ''
            }`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {expandedSections.includes('brands') && (
          <div className="space-y-4">
            {filters.find(f => f.id === 'brands')?.options.map((option) => (
              <label
                key={option.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={option.checked}
                    onChange={() => handleCheckboxChange('brands', option.id)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                    option.checked 
                      ? 'bg-blue-600 border-blue-600' 
                      : 'border-gray-300 group-hover:border-blue-400'
                  }`}>
                    {option.checked && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-gray-700 text-base flex-1 group-hover:text-gray-900">
                  {option.label}
                </span>
                <span className="text-gray-400 text-sm">({option.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Năm sản xuất - THỨ 4 */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button
          onClick={() => toggleSection('years')}
          className="w-full flex items-center justify-between mb-4 group"
        >
          <h3 className="text-lg font-semibold text-gray-900">Năm sản xuất</h3>
          <svg 
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              expandedSections.includes('years') ? 'rotate-180' : ''
            }`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {expandedSections.includes('years') && (
          <div className="space-y-4">
            {filters.find(f => f.id === 'years')?.options.map((option) => (
              <label
                key={option.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={option.checked}
                    onChange={() => handleCheckboxChange('years', option.id)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                    option.checked 
                      ? 'bg-blue-600 border-blue-600' 
                      : 'border-gray-300 group-hover:border-blue-400'
                  }`}>
                    {option.checked && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-gray-700 text-base flex-1 group-hover:text-gray-900">
                  {option.label}
                </span>
                <span className="text-gray-400 text-sm">({option.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Xuất xứ - CUỐI CÙNG (không có border-bottom) */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('origins')}
          className="w-full flex items-center justify-between mb-4 group"
        >
          <h3 className="text-lg font-semibold text-gray-900">Xuất xứ</h3>
          <svg 
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              expandedSections.includes('origins') ? 'rotate-180' : ''
            }`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {expandedSections.includes('origins') && (
          <div className="space-y-4">
            {filters.find(f => f.id === 'origins')?.options.map((option) => (
              <label
                key={option.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={option.checked}
                    onChange={() => handleCheckboxChange('origins', option.id)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                    option.checked 
                      ? 'bg-blue-600 border-blue-600' 
                      : 'border-gray-300 group-hover:border-blue-400'
                  }`}>
                    {option.checked && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-gray-700 text-base flex-1 group-hover:text-gray-900">
                  {option.label}
                </span>
                <span className="text-gray-400 text-sm">({option.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;