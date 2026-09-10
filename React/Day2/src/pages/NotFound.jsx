import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-4">404 error</h1>
      <p className="text-secondary mb-4">page not found</p>
      <Link to="/home" className="btn btn-secondary">
        Back to home
      </Link>
    </div>
  );
}