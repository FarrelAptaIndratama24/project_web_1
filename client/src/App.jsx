import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Kategori from "./pages/kategori";
import ProductDetail from "./pages/detailProduct";
import Login from "./pages/loginPage"; // Impor halaman Login
import Signup from "./pages/signupPage";

const MainLayout = ({ children }) => {
  return (
    <div className="App">
      <Navbar />
      <main className="container mx-auto p-4" style={{ paddingTop: "60px" }}>
        {children}
      </main>
    </div>
  );
};

function App() {
  return (
    <Routes>
      {/* Halaman dengan Navbar */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/Kategori/:category?"
        element={
          <MainLayout>
            <Kategori />
          </MainLayout>
        }
      />
      <Route
        path="/detailProduct/:id"
        element={
          <MainLayout>
            <ProductDetail />
          </MainLayout>
        }
      />
      {/* Halaman tanpa Navbar */}
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
