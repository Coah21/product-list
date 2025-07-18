import React from "react";

const Header = () => {
  return (
     <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
        <span className="font-bold text-xl text-blue-600">ProductList</span>
      </div>
      <div className="flex-1 px-6">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          className="w-full border rounded px-3 py-2 focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="text-gray-700 hover:text-blue-600">Tài khoản</button>
        <button className="relative">
          <span className="material-icons">shopping_cart</span>
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">2</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
