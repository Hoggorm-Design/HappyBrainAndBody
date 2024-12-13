import {  useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate(); // Hook to navigate programmatically

    return (
        <nav className="fixed top-0 right-0 w-full bg-transparent z-50 px-6 py-4 flex justify-end items-center">
            <div className="flex space-x-4">
                {/* Home Button */}
                <button
                    onClick={() => navigate('/')}
                    className="px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
                >
                    Home
                </button>

                {/* Blog Button */}
                <button
                    onClick={() => navigate('/blog')}
                    className="px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
                >
                    Blog
                </button>
            </div>
        </nav>
    );
}

export default Navbar;


