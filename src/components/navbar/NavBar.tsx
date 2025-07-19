import { useState, useRef } from "react";
import CategoryDropdown from "./CategoryDropdown";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    // Delay 300ms trước khi ẩn dropdown để user có thể di chuyển chuột
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300);
  };

  return (
    <nav className="text-sm">
      <div className="container mx-auto flex items-center justify-between py-2">
        {/* Left Side - Menu chính */}
        <div className="flex items-center space-x-4">
          {/* Dropdown Menu */}
          <div 
            className="relative text-white"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="bg-blue-700 px-2 py-2 rounded flex items-center gap-2 hover:bg-blue-800 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Danh Mục Sản Phẩm</span>
              <img src="./dropdown.svg" alt="" />
            </button>

            {/* Dropdown content*/}
            <CategoryDropdown isVisible={showDropdown} />
          </div>

          {/* Navigation Links */}
          <a href="#" className="hover:text-blue-500 transition-colors">
            Về Chúng Tôi
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors">
            Bài Viết
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors">
            Catalog
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors">
            Liên Hệ
          </a>
        </div>

        {/* Right Side - Services */}
        <div className="flex items-center space-x-4">
          {/* Hỗ trợ 24/7 */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center">
              <img src="./clock.svg" alt="" />
            </div>
            <span>Hỗ trợ 24/7</span>
          </div>

          {/* Miễn Phí Vận Chuyển */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center">
              <img src="./handmoney.svg" alt="" />
            </div>
            <span>Miễn Phí Vận Chuyển</span>
          </div>

          {/* Giao Hàng Nhanh 2h */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center">
              <img src="./truck_fill.svg" alt="" />
            </div>
            <span>Giao Hàng Nhanh 2h</span>
          </div>

          {/* 30 Ngày Đổi Trả */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center">
              <img src="./circle.svg" alt="" />
            </div>
            <span>30 Ngày Đổi Trả</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;