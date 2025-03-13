// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          TokoToki
        </Link>

        {/* Dropdown Kategori */}
        <div className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Kategori
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/kategori/elektronik">Elektronik</Link>
              <Link to="/kategori/fashion">Fashion</Link>
              <Link to="/kategori/makanan">Makanan</Link>
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Cari produk..."
            className="search-input"
          />
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
        </Link>

        {/* Login & Signup Buttons */}
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>
          <Link to="/signup" className="signup-btn">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
