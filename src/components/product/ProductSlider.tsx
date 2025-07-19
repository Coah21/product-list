import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ProductCard from "./ProductCard";
import type { Product } from "../../types/Product";

import "swiper/swiper-bundle.css";

interface ProductSliderProps {
  products: Product[];
  title?: string;
  autoplay?: boolean;
  showNavigation?: boolean;
  showPagination?: boolean;
  onQuickBuy?: (productId: string) => void;
}

const ProductSlider = ({
  products,
  title,
  autoplay = true,
  showNavigation = true,
  showPagination = false,
  onQuickBuy,
}: ProductSliderProps) => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-6">
        {title && (
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {title}
          </h2>
        )}

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            loop={products.length > 5}
            grabCursor={true}
            navigation={
              showNavigation
                ? {
                    nextEl: ".product-slider-next",
                    prevEl: ".product-slider-prev",
                  }
                : false
            }
            // Pagination
            pagination={
              showPagination
                ? {
                    el: ".product-slider-pagination",
                    clickable: true,
                    dynamicBullets: true,
                  }
                : false
            }
            autoplay={
              autoplay
                ? {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
                : false
            }
            // Responsive breakpoints
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
            }}
            // Events
            onSlideChange={() => {
              // console.log('Slide changed to:', swiper.activeIndex);
            }}
            className="product-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="h-full">
                  <ProductCard product={product} onQuickBuy={onQuickBuy} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          {showNavigation && (
            <>
              <button className="product-slider-prev absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-blue-300 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 swiper-button-disabled:opacity-50">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button className="product-slider-next absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-blue-300 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 swiper-button-disabled:opacity-50">
                <svg
                  className="w-5 h-5 text-gray-600"
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
              </button>
            </>
          )}

          {/* Custom Pagination */}
          {showPagination && (
            <div className="product-slider-pagination flex justify-center mt-6"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
