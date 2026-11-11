import { useState } from "react";
import ServiceCard from "../components/ServiceCard.jsx";
import menu from "../data/menu.js";

const categories = ["All", ...new Set(menu.map((item) => item.category))];

export default function Services({ onAdd }) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  // Filter by category and search text
  const visible = menu.filter(
    (item) =>
      (category === "All" || item.category === category) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="page-header">
        <h1>Our Menu</h1>
        <p>Freshly prepared every day.</p>
      </section>

      <section className="section">
        <div className="toolbar">
          <input
            type="text"
            placeholder="Search the menu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="filters">
            {categories.map((c) => (
              <button
                key={c}
                className={c === category ? "chip active" : "chip"}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="empty">No items match your search.</p>
        ) : (
          <div className="grid">
            {visible.map((item) => (
              <ServiceCard key={item.id} {...item} onAdd={onAdd} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
