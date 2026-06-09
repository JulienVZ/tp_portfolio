import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header className="w-full py-6 px-4 md:px-12 flex justify-end items-center absolute top-0 z-50">
            <nav>
                <ul className="flex space-x-8 text-lg font-medium">
                    <li>
                        <Link to="/about" className="hover:text-[#fefa36] transition-colors">About</Link>
                    </li>
                    <li>
                        <a href="/#projects" className="hover:text-[#fefa36] transition-colors">Projects</a>
                    </li>
                    <li>
                        <a href="/#contacts" className="hover:text-[#fefa36] transition-colors">Contacts</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}