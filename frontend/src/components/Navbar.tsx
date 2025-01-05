import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import Header from "./Header";
import "../styles/Hamburger.css";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigateToSection = (hash: string) => {
        setIsMenuOpen(false); // Close the menu
        if (location.pathname !== "/") {
            navigate(`/#${hash}`); // Ensure navigation to the homepage
        } else {
            // Scroll to the section directly if already on the homepage
            const element = document.getElementById(hash);
            if (element) {
                const yOffset = -50; // Adjust for fixed navbar
                const yPosition =
                    element.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: yPosition, behavior: "smooth" });
            }
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 w-full bg-[#5286A4] backdrop-blur-lg z-50 px-6 py-4 flex justify-between items-center shadow-md">
            {/* Logo and Header */}
            <Header title="Happy Brain and Body" logoSrc={logo} />

            {/* Hamburger Icon (Visible on small screens) */}
            <div className="2xl:hidden text-white z-50">
                <button
                    className={`hamburger ${isMenuOpen ? "open" : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    name="Hamburger-button"
                    aria-label="Navigation-menu"

                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Links for larger screens */}
            <div className="hidden 2xl:flex ml-auto flex-1 justify-center space-x-6 text-nowrap">
                <button
                    onClick={() => handleNavigateToSection("Var-lege")}
                    className="px-4 py-2 sub-header text-[#FFFFFF] rounded-full hover:text-[#1A5673] hover:bg-white transition"
                >
                    Vår lege
                </button>
                <button
                    onClick={() => handleNavigateToSection("hva-er-eq")}
                    className="px-4 py-2 sub-header text-[#FFFFFF] rounded-full hover:text-[#1A5673] hover:bg-white transition"
                >
                    Hva er EQ
                </button>
                <button
                    onClick={() => handleNavigateToSection("eq-terapi")}
                    className="px-4 py-2 sub-header text-[#FFFFFF] rounded-full hover:text-[#1A5673] hover:bg-white transition"
                >
                    EQ-terapi
                </button>
                <button
                    onClick={() => handleNavigateToSection("foredrag")}
                    className="px-4 py-2 sub-header text-[#FFFFFF] rounded-full hover:text-[#1A5673] hover:bg-white transition"
                >
                    Foredrag
                </button>
                <button
                    onClick={() => handleNavigateToSection("eksempler")}
                    className="px-4 py-2 sub-header text-[#FFFFFF] rounded-full hover:text-[#1A5673] hover:bg-white transition"
                >
                    Eksempler
                </button>
                <button
                    onClick={() => handleNavigateToSection("kontakt")}
                    className="px-4 py-2 sub-header text-[#FFFFFF] rounded-full hover:text-[#1A5673] hover:bg-white transition"
                >
                    Kontakt
                </button>
                <button
                    onClick={() => navigate("/blog")}
                    className="px-4 py-2 sub-header text-[#FFFFFF] rounded-full hover:text-[#1A5673] hover:bg-white transition"
                >
                    Blog
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${
                    isMenuOpen ? "max-h-screen" : "max-h-0"
                } 2xl:hidden absolute top-full left-0 w-full bg-[#1A5673] transition-all duration-300 overflow-hidden`}
            >
                <ul className="flex flex-col space-y-4 px-6 py-4">
                    <li>
                        <button
                            onClick={() => handleNavigateToSection("Var-lege")}
                            className="block text-[#FFFFFF] text-lg "
                        >
                            Vår lege
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavigateToSection("hva-er-eq")}
                            className="block text-[#FFFFFF] text-lg "
                        >
                            Hva er EQ
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavigateToSection("eq-terapi")}
                            className="block text-[#FFFFFF] text-lg "
                        >
                            EQ-terapi
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavigateToSection("foredrag")}
                            className="block text-[#FFFFFF] text-lg "
                        >
                            Foredrag
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavigateToSection("eksempler")}
                            className="block text-[#FFFFFF] text-lg "
                        >
                            Eksempler
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavigateToSection("kontakt")}
                            className="block text-[#FFFFFF] text-lg"
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
                            className="block text-[#FFFFFF] text-lg"
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