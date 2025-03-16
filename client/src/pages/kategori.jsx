import React from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/kategori.css";

function Kategori() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "Semua"; // Default ke "Semua" jika tidak ada kategori

  // Data dummy produk (nanti bisa diganti dengan API)
  const allProducts = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    title: `Produk ${index + 1}`,
    category:
      index % 3 === 0
        ? "Pakaian"
        : index % 3 === 1
        ? "Elektronik"
        : "Aksesoris",
    price: `Rp ${(index + 1) * 15000}`,
    image: "https://via.placeholder.com/150",
  }));

  // Filter produk berdasarkan kategori yang dipilih
  const filteredProducts =
    selectedCategory === "Semua"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="kategori">
      <h1>Kategori: {selectedCategory}</h1>
      <div className="recommendations">
        <h2>Produk</h2>
        {filteredProducts.length === 0 ? (
          <p>Tidak ada produk di kategori ini.</p>
        ) : (
          <div className="card-grid">
            {filteredProducts.map((item) => (
              <div key={item.id} className="card">
                <img src={item.image} alt={item.title} className="card-image" />
                <h3 className="card-title">{item.title}</h3>
                <p className="card-price">{item.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Kategori;
