const TopBar = () => (
  // Lớp ngoài: Màu trải dài toàn màn hình
  <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm py-1">
    {/* Lớp trong: Content căn giữa giống Layout */}
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex flex-row gap-2">
        <img src="./subtract-topbar.svg" />
        <span>
          Nhập mã <b className="text-yellow-400">NEWBIE</b> giảm ngay 10% cho
          lần đầu mua hàng.
        </span>
      </div>
      <div className="flex flex-row items-center gap-6">
        <div className="flex flex-row items-center gap-2">
          <img src="./call-topbar.svg" alt="" />
          <span>
            Hotline:{" "}
            <a href="tel:02837607607" className="font-semibold hover:underline text-yellow-400">
              0283 760 7607
            </a>
          </span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <img src="./app-topbar.svg" alt="" />
          <a href="#" className="hover:underline">
            Tải ứng dụng
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default TopBar;
