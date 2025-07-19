const Breadcrumb = () => {
  return (
    <nav className="py-3">
      <div className="container mx-auto">
        <ol className="list-reset flex text-gray-700">
          <li>
            <a href="/" className="text-gray-400 hover:text-blue-800">
              Trang Chủ
            </a>
          </li>
          <li className="mx-2">/</li>
          <li>
            <span className="text-blue-800">Sản phẩm</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
