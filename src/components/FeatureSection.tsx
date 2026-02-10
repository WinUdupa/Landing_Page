import { useState } from "react";
import "../styles/FeatureSection.css";

const cards = [
  {
    title: "We stay with you.",
    text: "From first investment to long term decisions, we guide every phase not just entry points.",
    color: "#a61fff",
  },
  {
    title: "Product Over Projections",
    text: "We focus on product strength, adoption, and capability rather than short-term earnings or distant forecasts.",
    color: "#1da1f2",
  },
  {
    title: "A focused set to choose from.",
    text: "A basket of 50+ researched stocks that suits your goals not endless recommendations.",
    color: "#00c2ff",
  },
  {
    title: "Diversification, made visible",
    text: "Stocks spread across industries and risk buckets to help balance desicions.",
    color: "#ff6b6b",
  },
  {
    title: "Portfolio review",
    text: "Annual reviews of equity, debt, gold, and more-at no extra cost.",
    color: "#ffa500",
  },
];

export default function FeatureSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < cards.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="feature-section">
      <div className="feature-container">
        {/* Heading */}
        <h2 className="feature-heading">
          The Structure Behind <br />
          the <span>Simplicity</span>
        </h2>

        <p className="feature-sub">
          We don't hand you reports and walk away. We stay involved through
          decisions, cycles, and time.
        </p>

        {/* Carousel Container */}
        <div className="carousel-wrapper">
          <button
            className="carousel-button carousel-button-prev"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous cards"
          >
            ←
          </button>

          {/* Cards */}
          <div className="card-grid">
            {cards.slice(currentIndex, currentIndex + 3).map((card, i) => (
              <div
                key={currentIndex + i}
                className="feature-card"
                style={{ "--accent": card.color }}
              >
                <h4 className="card-title">{card.title}</h4>
                <p className="card-text">{card.text}</p>

                {/* Image placeholder */}
                <div className="card-image" />
              </div>
            ))}
          </div>

          <button
            className="carousel-button carousel-button-next"
            onClick={handleNext}
            disabled={currentIndex === cards.length - 3}
            aria-label="Next cards"
          >
            
          </button>
        </div>
      </div>
    </section>
  );
}
