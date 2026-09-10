import { useParams, Link } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="container py-5">
      <h1>Product details</h1>
      <p className="text-secondary">Showing details for product id: {id}</p>
      <Link to="/products" className="btn btn-outline-secondary">
        Back to products
      </Link>
    </div>
  );
}