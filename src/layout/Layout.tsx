import Body from "../components/body/Body";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import TopBar from "../components/header/TopBar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />

      <div className="flex flex-col flex-1">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
