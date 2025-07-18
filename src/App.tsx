import Header from "./components/header/Header";
import TopBar from "./components/header/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <div className="bg-red-500 text-white p-4 m-4">
        TEST TAILWIND - Nếu thấy màu đỏ là đã OK!
      </div>
    </>
  );
}

export default App;
