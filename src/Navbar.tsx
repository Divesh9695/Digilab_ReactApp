import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  const handleNavigation = (path: string) => {
    navigate("/");

    // Scroll to the corresponding section
    setTimeout(() => {
      const section = document.getElementById(path);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        if (navRef.current) {
          navRef.current.classList.remove("responsive_nav");
        }
      }
    }, 0);
  };

  return (
    <div className="cen">
      <header>
        <h1>DIGILAB</h1>
        <nav ref={navRef}>
          <div>
          <Link to="/" onClick={() => handleNavigation("home")}>Home</Link>
            <Link to="/" onClick={() => handleNavigation("services")}>Services</Link>
            <Link to="/" onClick={() => handleNavigation("project")}>Project</Link>
            <Link to="/" onClick={() => handleNavigation("about")}>About</Link>
            <Link to="/" onClick={() => handleNavigation("CustomCarousel")}>Testimony</Link>
            <Link to="/" onClick={() => handleNavigation("blog")}>Blog</Link>
            <Link to="/" onClick={() => handleNavigation("contact")}>Contact</Link>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
           <FaTimes />
            </button>
          </div>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />  MENU
        </button>
      </header>
    </div>
  );
};

export default Navbar;