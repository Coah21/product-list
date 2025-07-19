const StoreLocator = () => {
  return (
    <section className="bg-blue-100 py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <img src="../../locate.svg" alt="" />
            </div>
            <span className="text-gray-700 font-medium">
              Xem hệ thống 88 cửa hàng trên toàn quốc
            </span>
          </div>
          <div className="bg-white p-4 rounded-4xl flex items-center gap-2 text-blue-600 hover:text-blue-700 cursor-pointer transition-colors">
            <span className="font-medium">Xem ngay</span>
            <img src="../../rightarrow.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;
