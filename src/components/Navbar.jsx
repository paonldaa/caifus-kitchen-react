import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar({ cartCount, onClear }) {
  const [open, setOpen] = useState(false); // mobile menu open/closed
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={close}>🍲 Caifu's Kitchen</Link>

      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? "✕" : "☰"}
      </button>

      <nav className={open ? "nav-links open" : "nav-links"}>
        <NavLink to="/" end onClick={close}>Home</NavLink>
        <NavLink to="/about" onClick={close}>About</NavLink>
        <NavLink to="/menu" onClick={close}>Menu</NavLink>
        <NavLink to="/contact" onClick={close}>Contact</NavLink>
        <button className="cart" onClick={onClear} title="Click to clear your order">
          🛒 Order: {cartCount}
        </button>
      </nav>
    </header>
  );
}
