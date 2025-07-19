import { sampleProducts } from "../../data/sampleProducts";
import ProductSlider from "../product/ProductSlider";

const Hero = () => {
  const handleQuickBuy = (productId: string) => {
    console.log("Quick buy:", productId);
  };

  return (
    <section>
      <div className="container mx-auto">
        <img src="./image/banner.png" alt="" />
        <div className="bg-blue-500 rounded-b-xl">
          <ProductSlider 
          products={sampleProducts}
          onQuickBuy={handleQuickBuy}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
