import Breadcrumb from "../breadcrumb/Breadcrumb";
import Hero from "../hero/Hero";
import ProductListing from "../product/ProductListing";

const Body = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Breadcrumb />
      <Hero />
      <ProductListing />
    </div>
  );
};

export default Body;
