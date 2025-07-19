import Breadcrumb from "../breadcrumb/Breadcrumb";
import Hero from "../hero/Hero";
import ProductListing from "../product/ProductListing";
import ServiceFeatures from "../service/ServiceFeatures";
import StoreLocator from "../store/StoreLocator";

const Body = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Breadcrumb />
      <Hero />
      <ProductListing onSortChange={() => {}} onFilterChange={() => {}} />
      <ServiceFeatures />
      <StoreLocator />
    </div>
  );
};

export default Body;
