import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 left-0 right-0 w-full bg-transparent z-50 px-6 py-4 flex justify-between items-center">
            <div className="ml-auto flex space-x-4">
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
