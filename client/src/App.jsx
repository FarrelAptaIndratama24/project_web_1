import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Kategori from "./pages/kategori";
import ProductDetail from "./pages/detailProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Kategori" element={<Kategori />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
