import React from "react";
import { Link } from "react-router-dom"; // Impor Link untuk navigasi
import "../styles/home.css"; // Impor CSS untuk styling Home

function Home() {
  // Data dummy untuk kartu rekomendasi (nanti bisa diganti dengan API)
  const recommendations = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    title: `Produk ${index + 1}`,
    price: `Rp ${(index + 1) * 10000}`, // Harga dummy
    image: "https://via.placeholder.com/150", // Gambar placeholder
  }));

  return (
    <div className="home">
      {/* Banner Promosi */}
      <div className="banner">
        <h1>Promo Guncang 9.9</h1>
        <p>Barang Terbaik Harga Terbaik - Bebas Ongkir Rp 0</p>
        <p>2-9 September</p>
      </div>

      {/* Kategori */}
      <div className="categories">
        <button>Top Up & tagihan</button>
        <button>Isi Pulsa & Paket Data</button>
        <button>Top Up & tagihan</button>
        <button>Isi Pulsa & Paket Data</button>
        <button>Top Up & tagihan</button>
        <button>Isi Pulsa & Paket Data</button>
      </div>

      {/* Daftar Kartu Rekomendasi */}
      <div className="recommendations">
        <h2>Rekomendasi Barang</h2>
        <div className="card-grid">
          {recommendations.map((item) => (
            <Link
              to={`/detailProduct/${item.id}`} // Mengarahkan ke halaman Detail Product berdasarkan id
              key={item.id}
              className="card-link" // Class untuk styling tautan
            >
              <div className="card">
                <img src={item.image} alt={item.title} className="card-image" />
                <h3 className="card-title">{item.title}</h3>
                <p className="card-price">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
