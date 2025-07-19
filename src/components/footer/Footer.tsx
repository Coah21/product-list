const Footer = () => {
  return (
    <footer className="bg-gray-100">
      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-black font-bold text-lg mb-4 uppercase">
                VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY
              </h3>
              <div className="space-y-2 text-gray-600 text-sm">
                <p>
                  <span className="font-medium">Tax code:</span> 0305094228
                </p>
                <p>
                  <span className="font-medium">Address:</span> 13 Nghia Thuc,
                  Ward 05, District 5, Ho Chi Minh City, Viet Nam
                </p>
                <p>
                  <span className="font-medium">Phone number:</span> 0283 760
                  7607
                </p>
                <p>
                  <span className="font-medium">Opening hour:</span> 09:00 -
                  22:00 from Mon - Fri
                </p>
              </div>

              {/* Government Certificate */}
              <div className="mt-6">
                <img
                  src="../../image/bocongthuong.png"
                  alt="Đã thông báo Bộ Công Thương"
                  className="h-16"
                />
              </div>
            </div>

            {/* Sitemap */}
            <div>
              <h3 className="text-black font-bold text-lg mb-4">Sitemap</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Article
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Cart
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-black font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Cookie policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Delivery policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Download App */}
            <div>
              <h3 className="text-black font-bold text-lg mb-4">
                Download App
              </h3>
              <div className="space-y-3">
                {/* Google Play */}
                <a href="#" className="block">
                  <div className="bg-black text-white rounded-lg px-4 py-3 flex items-center gap-3 hover:bg-gray-800 transition-colors">
                    <img src="../../play-store.svg" alt="" />
                    <div>
                      <div className="text-xs">Get It On</div>
                      <div className="font-bold">Google Play Store</div>
                    </div>
                  </div>
                </a>

                {/* App Store */}
                <a href="#" className="block">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-3 flex items-center gap-3 hover:bg-blue-700 transition-colors">
                    <img src="../../apple-store.svg" alt="" />
                    <div>
                      <div className="text-xs">Download from</div>
                      <div className="font-bold">Apple App Store</div>
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-2 justify-end">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-yellow-300 text-sm font-bold">★</span>
                  </div>
                  <span className="text-gray-700 font-medium">VI</span>
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
