// src/Components/Header.jsx
export default function Header() {
    return (
        <header className="w-full py-6 px-4 md:px-12 flex justify-end items-center absolute top-0 z-50">
            <nav>
                <ul className="flex space-x-8 text-lg font-medium">
                    <li>
                        <a href="#about" className="hover:text-brand-yellow transition-colors">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-brand-yellow transition-colors">Projects</a>
                    </li>
                    <li>
                        <a href="#contacts" className="hover:text-brand-yellow transition-colors">Contacts</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}