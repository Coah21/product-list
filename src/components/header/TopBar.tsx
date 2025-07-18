import React from "react";

const TopBar: React.FC = () => (
  <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm flex justify-between items-center px-4 py-1">
    <div className="bg-blue-500 text-white px-3 py-1 rounded-full">
      <span >Nhập mã <b>NEWBIE</b> giảm ngay 10% cho lần đầu mua hàng.</span>
    </div>
    <div>
      <span>Hotline: <a href="tel:02837607607" className="font-semibold hover:underline">0283 760 7607</a></span>
      <span className="mx-2">|</span>
      <a href="#" className="hover:underline">Tải ứng dụng</a>
    </div>
  </div>
);

export default TopBar;