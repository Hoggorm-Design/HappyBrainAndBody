import { useNavigate } from 'react-router-dom';
import Header from "./Header.tsx";
import logo from "./../../public/favicon.svg";

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 left-0 right-0 w-full bg-white/70 backdrop-blur-lg z-50 px-6 py-4 flex justify-between items-center shadow-md">
            <Header logoSrc={logo} title="Happy Brain And Body" />
            <div className="ml-auto flex space-x-4">
                <button
                    onClick={() => navigate('/')}
                    className="px-4 py-2 sub-header text-black rounded-full font-medium hover:bg-gray-200 transition"
                >
                    Hjem
                </button>

                {/* Blog Button */}
                <button
                    onClick={() => navigate('/blog')}
                    className="px-4 py-2 sub-header text-black rounded-full font-medium hover:bg-gray-200 transition"
                >
                    Blog
                </button>
            </div>
        </nav>
    );
}

export default Navbar;