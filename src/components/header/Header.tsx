import NavBar from "../navbar/NavBar";

const Header = () => {
  return (
    <>
      {/* Main Header */}
      <header className="bg-white">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src="./image/logo.png"
              className="h-auto w-auto"
              style={{
                clipPath: "inset(8px 20px 20px 14px)", // Crop viền oval
                transform: "scale(1)", // Phóng to một chút
              }}
            />
          </div>

          {/* Search Section */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm sản phẩm"
                className="w-full border-2 border-blue-600 rounded-full px-6 py-3 pr-20 focus:outline-none text-gray-700"
              />
              {/* Camera Icon */}
              <button className="absolute right-14 top-1/2 mr-6 transform -translate-y-1/2 text-gray-500 hover:text-blue-600">
                <img src="./camera.svg" alt="" />
              </button>
              {/* Search Button */}
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full py-2 px-5 hover:bg-blue-700">
                <img src="search.svg" alt="" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-yellow-300 text-sm font-bold">★</span>
              </div>
              <span className="text-gray-700 font-medium">VI</span>
            </div>

            {/* Cart */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <img src="./cart.svg" alt="" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center font-bold">
                  12
                </span>
              </div>
              <span className="text-gray-700 font-medium">Giỏ hàng</span>
            </div>

            {/* Account */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <img src="./default-avatar.svg" alt="" />
              </div>
              <span className="text-gray-700 font-medium">Tài khoản</span>
            </div>
          </div>
        </div>
      </header>
      {/* Navigation Bar */}
      <NavBar />
    </>
  );
};

export default Header;
