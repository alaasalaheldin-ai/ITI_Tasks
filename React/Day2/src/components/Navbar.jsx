import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " active fw-bold text-dark" : " text-secondary");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom px-4">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">Navbar</span>

        <div className="navbar-nav">
          <NavLink to="/home" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/products" className={linkClass}>
            Products
          </NavLink>
        </div>
      </div>
    </nav>
  );
}