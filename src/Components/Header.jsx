import { Link, useNavigate } from 'react-router-dom';
export default function Header({ isLoggedIn, handleLogout }) {
    const navigate = useNavigate();

    const onLogoutClick = () => {
        navigate('/');
        setTimeout(() => {
            handleLogout();
        }, 100);
    };
    return (
        <header className="w-full py-6 px-4 md:px-12 flex items-center justify-between absolute top-0 z-50">
            <Link
                to="/"
                className="flex space-x-8 font-medium font-black text-lg text-[#25282B] tracking-wide hover:text-[#fefa36] transition-colors"
            >
                Julien Vouilloz
            </Link>
            <nav>
                <ul className="flex space-x-8 text-lg font-medium">

                    <li>
                        <Link to="/about" className="hover:text-white transition-colors">About</Link>
                    </li>
                    <li>
                        <a href="/#projects" className="hover:text-white transition-colors">Projects</a>
                    </li>
                    <li>
                        <a href="/#contacts" className="hover:text-white transition-colors">Contacts</a>
                    </li>

                    <li>
                        {isLoggedIn ? (
                            <div className="flex items-center space-x-4">
                                <Link to="/admin" className="text-sm bg-gray-100 text-[#25282B] px-3 py-1.5 rounded-md hover:bg-[#fefa36] font-bold transition-all">Panel Admin</Link>
                                <button onClick={onLogoutClick} className="text-sm text-red-500 hover:underline font-medium">Quitter</button>
                            </div>
                        ) : (
                            <Link to="/login" className="border border-[#25282B] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-md hover:bg-[#25282B] hover:text-white transition-all">
                                Connexion
                            </Link>
                        )}
                    </li>

                </ul>
            </nav>
        </header>
    );
}