const ServiceFeatures = () => {
  const features = [
    {
      id: 1,
      icon: "../../money.svg",
      title: "Miễn phí vận chuyển",
      description: "Với hóa đơn từ 1 triệu",
    },
    {
      id: 2,
      icon: "../../support.svg",
      title: "Hỗ trợ 24/7",
      description:
        "Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm",
    },
    {
      id: 3,
      icon: "../../delivery.svg",
      title: "Giao hàng nhanh 2h",
      description: "Trong vòng bán kính 10km nội thành TP.HCM",
    },
    {
      id: 4,
      icon: "../../package.svg",
      title: "30 ngày đổi trả",
      description:
        "Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển",
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto py-4">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg p-2 flex items-center gap-4 shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
