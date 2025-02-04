import useHeader from "@/hooks/useHeader";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Hamburger.css";
import Header from "./Header";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data } = useHeader();
  const navRef = useRef<HTMLDivElement>(null); // Reference to the navbar

  const headerData = data ? data[0] : null;

  const handleNavigateToSection = (hash: string) => {
    setIsMenuOpen(false); // Close the menu
    if (location.pathname !== "/") {
      navigate(`/#${hash}`); // Ensure navigation to the homepage
    } else {
      const element = document.getElementById(hash);
      if (element) {
        const yOffset = -80; // Adjust for fixed navbar
        const yPosition =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false); // Close the menu if the click is outside
      }
    };

    // Add click event listener
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Cleanup event listener
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleHamburgerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log("Menu toggled:", !isMenuOpen);
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 w-full bg-[#5286A4] backdrop-blur-lg z-50 pr-6 2xl:pl-6 py-4 flex justify-between items-center shadow-md"
    >
      {/* Logo and Header */}
      <Header
        title={headerData ? headerData.title : "happybrainandbody"}
        logoSrc={logo}
      />

      {/* Hamburger Icon (Visible on small screens) */}
      <div className="xl:hidden text-white z-50">
        <button
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={handleHamburgerClick}
          name="Hamburger-button"
          aria-label="Navigation-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Links for larger screens */}
      <div className="hidden xl:flex ml-auto flex-1 justify-end text-nowrap">
        {/* Buttons for sections */}
        <button
          onClick={() => handleNavigateToSection("Var-lege")}
          className="px-4 py-2  text-xl xl:text-xl text-[#FFFFFF] rounded-full hover:text-[#1A5673] hover:bg-white transition"
        >
          Vår lege
        </button>
        <button
          onClick={() => handleNavigateToSection("hva-er-eq")}
          className="px-4 py-2  text-xl xl:text-xl text-[#FFFFFF] rounded-full hover:text-[#1A5673] hover:bg-white transition"
        >
          Hva er EQ
        </button>
        <button
          onClick={() => handleNavigateToSection("eq-terapi")}
          className="px-4 py-2  text-xl xl:text-xl text-[#FFFFFF] rounded-full hover:text-[#1A5673] hover:bg-white transition"
        >
          EQ-terapi
        </button>
        <button
          onClick={() => handleNavigateToSection("foredrag")}
          className="px-4 py-2  text-xl xl:text-xl text-[#FFFFFF] rounded-full hover:text-[#1A5673] hover:bg-white transition"
        >
          Foredrag
        </button>
        <button
          onClick={() => handleNavigateToSection("eksempler")}
          className="px-4 py-2  text-xl xl:text-xl text-[#FFFFFF] rounded-full hover:text-[#1A5673] hover:bg-white transition"
        >
          Eksempler
        </button>
        <button
          onClick={() => handleNavigateToSection("kontakt")}
          className="px-4 py-2  text-xl xl:text-xl text-[#FFFFFF] rounded-full hover:text-[#1A5673] hover:bg-white transition"
        >
          Kontakt
        </button>
        <button
          onClick={() => navigate("/blog")}
          className="px-4 py-2  text-xl xl:text-xl text-[#FFFFFF] rounded-full hover:text-[#1A5673] hover:bg-white transition"
        >
          Blog
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "max-h-screen overflow-auto" : "max-h-0 overflow-hidden"
        } xl:hidden absolute top-[99%] left-0 w-full bg-[#5286A4] transition-all duration-300`}
      >
        <ul className="flex flex-col space-y-8 px-6 py-6">
          <li>
            <button
              onClick={() => handleNavigateToSection("Var-lege")}
              className="block text-[#FFFFFF] text-xl"
            >
              Vår lege
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigateToSection("hva-er-eq")}
              className="block text-[#FFFFFF] text-xl"
            >
              Hva er EQ
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigateToSection("eq-terapi")}
              className="block text-[#FFFFFF] text-xl"
            >
              EQ-terapi
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigateToSection("foredrag")}
              className="block text-[#FFFFFF] text-xl"
            >
              Foredrag
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigateToSection("eksempler")}
              className="block text-[#FFFFFF] text-xl"
            >
              Eksempler
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigateToSection("kontakt")}
              className="block text-[#FFFFFF] text-xl"
            >
              Kontakt
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/blog");
              }}
              className="block text-[#FFFFFF] text-xl"
            >
              Blog
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
