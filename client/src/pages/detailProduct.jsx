import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams(); // Ambil ID produk dari URL
  return (
    <div>
      <h1>Detail Produk</h1>
      <p>Produk dengan ID: {id}</p>
    </div>
  );
}
export default ProductDetail;
