interface CategoryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  href: string;
}

interface CategoryDropdownProps {
  isVisible: boolean;
}

const CategoryDropdown = ({ isVisible }: CategoryDropdownProps) => {
  const categoryItems: CategoryItem[] = [
    {
      id: "oil-filter",
      name: "Bộ Lọc Dầu",
      href: "/category/oil-filter",
      icon: (
        <svg
          className="w-5 h-5 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      id: "air-filter",
      name: "Bộ Lọc Không Khí",
      href: "/category/air-filter",
      icon: (
        <svg
          className="w-5 h-5 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
    },
    {
      id: "fuel-filter",
      name: "Bộ Lọc Nhiên Liệu",
      href: "/category/fuel-filter",
      icon: (
        <svg
          className="w-5 h-5 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      id: "cabin-filter",
      name: "Bộ Lọc Trong Cabin",
      href: "/category/cabin-filter",
      icon: (
        <svg
          className="w-5 h-5 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
    },
    {
      id: "air-filter-2",
      name: "Bộ Lọc Không Khí",
      href: "/category/air-filter-2",
      icon: (
        <svg
          className="w-5 h-5 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
        </svg>
      ),
    },
  ];

  const handleCategoryClick = (categoryId: string) => {
    console.log("Category clicked:", categoryId);
    // Thêm logic navigation hoặc filter ở đây
  };

  return (
    <div
      className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-md transition-all duration-200 z-50 group-hover:opacity-100 group-hover:visible ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="py-2">
        {categoryItems.map((item, index) => (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              handleCategoryClick(item.id);
            }}
            className={`flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 ${
              index < categoryItems.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
  );
};

export default CategoryDropdown;
