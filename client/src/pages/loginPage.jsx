import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

function Login() {
  // State untuk menyimpan input email dan password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fungsi untuk menangani login (sementara hanya alert)
  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      alert(`Login dengan Email: ${email}`);
    } else {
      alert("Harap isi email dan password!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          {/* Input Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email"
            />
          </div>

          {/* Input Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
            />
          </div>

          {/* Tombol Login */}
          <button type="submit" className="login-btn">
            login
          </button>

          {/* Tautan Lupa Password */}
          <Link to="/forgot-password" className="forgot-password">
            Lupa Password?
          </Link>
        </form>

        {/* Ikon Login dengan Sosial Media */}
        <div className="social-login">
          <button className="social-btn google">
            <img
              src="https://img.icons8.com/color/24/000000/google-logo.png"
              alt="Google"
            />
          </button>
          <button className="social-btn facebook">
            <img
              src="https://img.icons8.com/color/24/000000/facebook-new.png"
              alt="Facebook"
            />
          </button>
          <button className="social-btn twitter">
            <img
              src="https://img.icons8.com/ios-filled/24/000000/twitterx.png"
              alt="Twitter"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
