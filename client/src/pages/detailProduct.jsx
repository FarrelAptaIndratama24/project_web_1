import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/detailProduct.css";

function ProductDetail() {
  const { id } = useParams(); // Mengambil id dari URL

  // Data dummy untuk produk
  const product = {
    id,
    title: "Baju kaos murah 100rb 3",
    price: "Rp. 901.989",
    image: "https://via.placeholder.com/400x400", // Gambar utama placeholder
    thumbnails: [
      "https://via.placeholder.com/80x80",
      "https://via.placeholder.com/80x80",
      "https://via.placeholder.com/80x80",
      "https://via.placeholder.com/80x80",
    ],
    colors: ["Merah", "Hijau", "Kuning", "Coklat", "Hitam", "Abu"],
    sizes: ["XL", "XXL", "L", "M", "S"],
    stock: 1002,
  };

  // State untuk interaktivitas
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(12);

  // Fungsi untuk mengubah jumlah
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  // Fungsi untuk tombol Beli
  const handleBuy = () => {
    alert(
      `Membeli ${quantity} ${product.title} (Warna: ${selectedColor}, Ukuran: ${selectedSize})`
    );
  };

  // Fungsi untuk tombol Masukkan Keranjang (sementara hanya alert)
  const handleAddToCart = () => {
    alert(
      `Menambahkan ${quantity} ${product.title} (Warna: ${selectedColor}, Ukuran: ${selectedSize}) ke keranjang`
    );
  };

  return (
    <div className="product-detail">
      <h1>Detail Produk</h1>
      <div className="detail-container">
        {/* Bagian Kiri: Gambar */}
        <div className="image-section">
          <div className="main-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="thumbnail-grid">
            {product.thumbnails.map((thumb, index) => (
              <div key={index} className="thumbnail">
                <img src={thumb} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Kanan: Detail Produk */}
        <div className="detail-section">
          <h2 className="detail-title">{product.title}</h2>
          <p className="detail-price">{product.price}</p>

          {/* Pilihan Warna */}
          <div className="color-options">
            <h3>Pilih Warna:</h3>
            <div className="color-buttons">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`color-btn ${
                    selectedColor === color ? "selected" : ""
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Pilihan Ukuran */}
          <div className="size-options">
            <h3>Pilih Ukuran:</h3>
            <div className="size-buttons">
              {product.sizes.map((size, index) => (
                <button
                  key={`${size}-${index}`}
                  className={`size-btn ${
                    selectedSize === size ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Panel Samping: Atur Jumlah Pesanan */}
        <div className="order-panel">
          <h3>Atur Jumlah Pesanan</h3>
          <div className="order-input">
            <p>Baju kaos murah 100rb 3</p>
          </div>
          <div className="quantity-section">
            <button className="quantity-btn" onClick={handleDecrease}>
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="quantity-input"
            />
            <button className="quantity-btn" onClick={handleIncrease}>
              +
            </button>
            <span className="stock-info">stok: {product.stock}</span>
          </div>
          <p className="subtotal">
            Sub Total: <span>{product.price}</span>
          </p>
          {/* Tombol Masukkan Keranjang */}
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            + Keranjang
          </button>
          {/* Tombol Beli */}
          <button className="buy-btn" onClick={handleBuy}>
            Beli
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
