import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function AddProduct() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Product "${name}" added!`);
    navigate("/products");
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Add new product</h1>

      <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3" style={{ maxWidth: "450px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success">
          Save
        </button>
      </form>

      <Link to="/products" className="btn btn-outline-secondary">
        Back to products
      </Link>
    </div>
  );
}