import { useState } from "react";
import { Link } from "react-router-dom";

const specials = [
  "Monday: Party Jollof Rice with chicken",
  "Tuesday: Beef Suya Skewers",
  "Wednesday: Creamy Chicken Pasta",
  "Thursday: Garden Fresh Salad bowl",
  "Friday: Jollof Rice and a free Tropical Smoothie",
  "Saturday: Suya night - buy 2 get 1 free",
  "Sunday: Red Velvet Slice with every order",
];

export default function Home() {
  const [specialIndex, setSpecialIndex] = useState(0);
  const [showSpecial, setShowSpecial] = useState(false);

  const nextSpecial = () => {
    setShowSpecial(true);
    setSpecialIndex((i) => (i + 1) % specials.length);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Caifu's Kitchen</h1>
          <p>
            Fresh, home-style meals cooked with love and delivered hot to your door.
            From smoky jollof to creamy pasta, there is something for every craving.
          </p>
          <div className="hero-actions">
            <Link to="/menu" className="btn">View our menu</Link>
            <Link to="/contact" className="btn outline">Contact us</Link>
          </div>
        </div>
        <img src="/images/hero.svg" alt="A warm pot of food" />
      </section>

      <section className="section">
        <h2>Who we are</h2>
        <p className="lead">
          Caifu's Kitchen is a small family-run restaurant and delivery service. We use fresh
          local ingredients and traditional recipes so every meal tastes like home.
        </p>
      </section>

      <section className="section special">
        <h2>Special of the day</h2>
        <p>Click the button to browse our weekly specials.</p>
        <button className="btn" onClick={nextSpecial}>
          {showSpecial ? "Next special ➜" : "Show a special"}
        </button>
        {showSpecial && <p className="special-text">🎉 {specials[specialIndex]}</p>}
      </section>
    </>
  );
}
