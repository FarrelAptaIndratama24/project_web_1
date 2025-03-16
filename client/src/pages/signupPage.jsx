import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";

function Login() {
  // State untuk menyimpan input email dan password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fungsi untuk menangani signup (sementara hanya alert)
  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password) {
      alert(`berhasil mendaftar: ${email}`);
    } else {
      alert("Harap isi email dan password!");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSignup}>
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

          <button type="submit" className="signup-btn">
            daftar
          </button>

          {/* Tautan Lupa Password */}
        </form>

        {/* Ikon Login dengan Sosial Media */}
        <div className="social-signup">
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
