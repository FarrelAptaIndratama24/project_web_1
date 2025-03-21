import { useState } from "react";
import { FiTrash, FiHeart } from "react-icons/fi";
import "../styles/cartPage.css";

// Data dummy untuk simulasi keranjang belanja
const initialCartItems = [
  {
    id: 1,
    title: "Abibas",
    description: "Running shoes nikae zoom eitdurgent dach zwei fiernant",
    color: "Black",
    size: "XL",
    price: 129000,
    quantity: 1,
    image: "https://via.placeholder.com/64x64",
    selected: false,
  },
];

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // State untuk "Pilih Semua"
  const [selectAll, setSelectAll] = useState(false);

  // Fungsi untuk mengubah kuantitas item
  const handleQuantityChange = (id, delta) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Fungsi untuk memilih/membatalkan pilihan item
  const handleSelectItem = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  // Fungsi untuk "Pilih Semua"
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setCartItems(cartItems.map((item) => ({ ...item, selected: !selectAll })));
  };

  // Fungsi untuk menghapus item yang dipilih
  const handleDeleteSelected = () => {
    setCartItems(cartItems.filter((item) => !item.selected));
  };

  // Fungsi untuk menghapus item individual
  const handleDeleteItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Fungsi untuk menambahkan ke wishlist (simulasi)
  const handleAddToWishlist = (id) => {
    alert(`Item ${id} ditambahkan ke wishlist!`);
  };

  // Fungsi untuk tombol "Beli"
  const handleBuy = () => {
    const selectedItems = cartItems.filter((item) => item.selected);
    if (selectedItems.length === 0) {
      alert("Pilih setidaknya satu item untuk membeli!");
      return;
    }
    alert(
      `Membeli ${
        selectedItems.length
      } item dengan total Rp${calculateTotal().toLocaleString("id-ID")}`
    );
  };

  // Menghitung total harga dari item yang dipilih
  const calculateTotal = () => {
    return cartItems
      .filter((item) => item.selected)
      .reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Menghitung jumlah item yang dipilih
  const selectedCount = cartItems.filter((item) => item.selected).length;

  return (
    <div className="container">
      {/* Bagian Pilih Semua dan Hapus */}
      <div className="box flex-between">
        <div className="flex-center gap-2">
          <input
            type="checkbox"
            className="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
          />
          <span className="font-semibold">
            Pilih Semua ({selectedCount}/{cartItems.length})
          </span>
        </div>
        <button
          className="text-red-500 font-medium"
          onClick={handleDeleteSelected}
          disabled={selectedCount === 0}
        >
          Hapus
        </button>
      </div>

      {/* Daftar Item di Keranjang */}
      {cartItems.length === 0 ? (
        <div className="box mt-4 text-center">
          <p>Keranjang belanja kosong.</p>
        </div>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="box flex gap-4 mt-4">
            <input
              type="checkbox"
              className="checkbox"
              checked={item.selected}
              onChange={() => handleSelectItem(item.id)}
            />
            <div
              className="product-image"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="product-info">
              <h3 className="product-title">{item.title}</h3>
              <p className="product-description">{item.description}</p>
              <p className="product-description">
                {item.color}, {item.size}
              </p>
            </div>
            <div className="flex flex-col items-end">
              <p className="product-price">
                Rp{(item.price * item.quantity).toLocaleString("id-ID")}
              </p>
              <div className="action-icons mt-2">
                <FiHeart
                  className="cursor-pointer"
                  onClick={() => handleAddToWishlist(item.id)}
                />
                <FiTrash
                  className="cursor-pointer"
                  onClick={() => handleDeleteItem(item.id)}
                />
              </div>
              <div className="quantity-controls mt-2">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      {/* Ringkasan Belanja */}
      <div className="summary-box mt-4">
        <h3 className="summary-title">Ringkasan Belanja</h3>
        <div className="flex-between mt-2">
          <span>Total</span>
          <span className="total-price">
            Rp{calculateTotal().toLocaleString("id-ID")}
          </span>
        </div>
        <button
          className="buy-button mt-4"
          onClick={handleBuy}
          disabled={selectedCount === 0}
        >
          Beli ({selectedCount})
        </button>
      </div>
    </div>
  );
}
