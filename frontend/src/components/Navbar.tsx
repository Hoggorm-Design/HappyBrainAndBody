import { useNavigate, useLocation } from 'react-router-dom';
import Header from "./Header.tsx";
import logo from "../assets/logo.png";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const isOnBlogPage = location.pathname === '/blog';
    const isOnHomePage = location.pathname === '/';

    return (
        <nav className="fixed top-0 left-0 right-0 w-full bg-[#2587A7] backdrop-blur-lg z-50 px-6 py-4 flex justify-between items-center shadow-md">
            {/* Logo and Header */}
            <Header title="Happy Brain and Body" logoSrc={logo} />

            {/* Centralized Section Links */}
            {!isOnBlogPage && (
                <div className="ml-auto flex-1 flex justify-center space-x-6">
                    <a
                        href="#Var-lege"
                        className="px-4 py-2 sub-header text-white rounded-full hover:text-[#2587A7] hover:bg-white transition"
                    >
                        Vår lege
                    </a>
                    <a
                        href="#hva-er-eq"
                        className="px-4 py-2 sub-header text-white rounded-full hover:text-[#2587A7] hover:bg-white transition"
                    >
                        Hva er EQ
                    </a>
                    <a
                        href="#eq-terapi"
                        className="px-4 py-2 sub-header text-white rounded-full hover:text-[#2587A7] hover:bg-white transition"
                    >
                        EQ-terapi
                    </a>
                    <a
                        href="#foredrag"
                        className="px-4 py-2 sub-header text-white rounded-full hover:text-[#2587A7] hover:bg-white transition"
                    >
                        Foredrag
                    </a>
                    <a
                        href="#eksempler"
                        className="px-4 py-2 sub-header text-white rounded-full hover:text-[#2587A7] hover:bg-white transition"
                    >
                        Eksempler
                    </a>
                    <a
                        href="#kontakt"
                        className="px-4 py-2 sub-header text-white rounded-full hover:text-[#2587A7] hover:bg-white transition"
                    >
                        Kontakt
                    </a>
                </div>
            )}

            {/* Home and Blog Buttons */}
            <div className="ml-auto flex space-x-4">
                {!isOnHomePage && (
                    <button
                        onClick={() => navigate('/')}
                        className="px-4 py-2 sub-header text-white rounded-full font-medium hover:text-[#2587A7] hover:bg-white transition"
                    >
                        Hjem
                    </button>
                )}
                {!isOnBlogPage && (
                    <button
                        onClick={() => navigate('/blog')}
                        className="px-4 py-2 sub-header text-white rounded-full hover:text-[#2587A7] font-medium hover:bg-white transition"
                    >
                        Blog
                    </button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
