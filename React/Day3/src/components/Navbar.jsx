import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="d-flex align-items-center gap-4 p-3 border-bottom">
      <h4 className="m-0">E-commerce</h4>
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? "fw-bold text-dark" : "text-secondary text-decoration-none")}
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "fw-bold text-dark" : "text-secondary text-decoration-none")}
      >
        Products
      </NavLink>
      <NavLink
        to="/pricing"
        className={({ isActive }) => (isActive ? "fw-bold text-dark" : "text-secondary text-decoration-none")}
      >
        Pricing
      </NavLink>
    </nav>
  );
}

export default Navbar;