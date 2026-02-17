import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("philosophy");

  const navLinks = [
    { id: "philosophy", label: "Philosophy" },
    { id: "approach", label: "Approach" },
    { id: "research", label: "Research" },
    { id: "inpractice", label: "In Practice" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo/Home Icon */}
        <div className="navbar-logo">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-menu">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`navbar-link ${
                  activeLink === link.id ? "active" : ""
                }`}
                onClick={() => setActiveLink(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Request Invite Button */}
        <button className="navbar-button">Request Invite</button>
      </div>
    </nav>
  );
}
