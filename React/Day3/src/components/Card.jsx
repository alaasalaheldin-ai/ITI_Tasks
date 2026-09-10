import { useNavigate } from "react-router-dom";

function Card({ product }) {
  const navigate = useNavigate();

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-secondary">{product.description}</p>
        <button
          className="btn btn-primary mt-auto"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          Show More
        </button>
      </div>
    </div>
  );
}

export default Card;