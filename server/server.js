const express = require("express");
const app = express();
const PORT = 3000;

// Rute utama
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
