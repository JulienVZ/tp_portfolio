import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setIsLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            setIsLoggedIn(true);
            localStorage.setItem('isAdmin', 'true');
            navigate('/admin');
        } else {
            setError('Identifiants incorrects. Veuillez réessayer.');
        }
    };

    return (
        <section className="w-full min-h-screen flex items-center justify-center bg-white pt-24 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(37,40,43,0.08)] font-sans border border-gray-100">
                <div className="flex flex-col items-center mb-8">
                    <h2 className="text-3xl font-title font-bold text-[#25282B] mb-2">Connexion</h2>
                    <div className="w-12 h-1 bg-[#fefa36] rounded-full"></div>
                </div>

                <form onSubmit={handleLogin} className="flex flex-col space-y-5">
                    {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}

                    <div className="flex flex-col">
                        <label className="text-[#25282B] font-bold text-sm mb-2">Identifiant</label>
                        <input
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#fefa36] focus:ring-1 focus:ring-[#fefa36] bg-white transition-colors"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[#25282B] font-bold text-sm mb-2">Mot de passe</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#fefa36] focus:ring-1 focus:ring-[#fefa36] bg-white transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#fefa36] text-[#25282B] font-bold py-3 rounded-lg hover:bg-yellow-300 shadow-md transition-colors mt-2"
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        </section>
    );
}