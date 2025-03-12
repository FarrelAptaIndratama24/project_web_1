import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <header>
      {/* Logo */}
      <div className="logo">
        <Link to="/">TokoToki</Link>
      </div>

      {/* Kategori Dropdown */}
      <div>
        <select className="category-select">
          <option value="">kategori</option>
          <option value="pakaian">Pakaian</option>
          <option value="elektronik">Elektronik</option>
        </select>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="search" />
      </div>

      {/* Cart Icon */}
      <div className="cart-icon">
        <Link to="/cart">
          <div className="cart-icon">
            <Link to="/cart">
              <FaShoppingCart size={30} color="black" />
            </Link>
          </div>
        </Link>
      </div>

      {/* Login dan Register Buttons */}
      <div className="auth-buttons">
        <button>
          <Link to="/login">masuk</Link>
        </button>
        <button>
          <Link to="/register">daftar</Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
