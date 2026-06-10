import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import imgProject1 from './assets/imgProject1.jpg';
import imgProject2 from './assets/imgProject2.jpg';
import imgProject3 from './assets/imgProject3.png';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import AdminPanel from './Components/AdminPanel';

// Données initiales par défaut (si le stockage local est vide)
const initialData = {
    hero: {
        subtitle: "Chef de projet",
        title: "Hello, my name is Julien Vouilloz",
        description: "Seven minutes, seven minutes is all i can spend to spare with you."
    },
    about: {
        text: "Étudiant en école d'ingénieur à l'EFREI Bordeaux, je me spécialise dans le développement web et la gestion de projets. Actuellement apprenti référent informatique chez Maison SALIN, je conçois et mets en place des solutions techniques pour répondre aux défis numériques de l'entreprise."
    },
    projects: [
        {
            id: 1,
            title: "Pokédex",
            description: "I created this simple project by using a pokemon API, I used React for the frontend and Node.js for the backend. I was responsible for the entire development process, from designing the user interface to implementing the API integration and ensuring a smooth user experience.",
            img: imgProject1,
            reverse: false
        },
        {
            id: 2,
            title: "Trading Bot",
            description: "This project is a trading bot that I developed using Python. The bot is designed to analyze market data and execute trades based on predefined strategies. I implemented various algorithms for technical analysis and risk management, allowing the bot to make informed trading decisions in real-time.",
            img: imgProject2,
            reverse: true
        },
        {
            id: 3,
            title: "Maison SALIN",
            description: "For this project, I developed a website for a wine trading company called Maison SALIN. The website was built using basic front end (HTML, CSS, JavaScript) and linked it with the back end with FastAPI. I was responsible for designing the user interface, implementing the property listing features, and integrating a contact form for potential clients to reach out to the agency.",
            img: imgProject3,
            reverse: false
        }
    ]
};

function App() {
    // 1. Gestion de l'état des données du site
    const [portfolioData, setPortfolioData] = useState(() => {
        const savedData = localStorage.getItem('portfolioData');
        return savedData ? JSON.parse(savedData) : initialData;
    });

    // 2. Gestion de la session administrateur
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isAdmin') === 'true';
    });

    const updateData = (newData) => {
        setPortfolioData(newData);
        localStorage.setItem('portfolioData', JSON.stringify(newData));
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isAdmin');
    };

    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-white text-[#25282B] font-sans overflow-x-hidden">
                {/* On transmet l'état de connexion au Header pour changer le bouton */}
                <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

                <main className="flex-grow">
                    <Routes>
                        {/* On passe les données dynamiques à Home (qui les donnera à Hero, Projects) */}
                        <Route path="/" element={<Home portfolioData={portfolioData} />} />
                        <Route path="/about" element={<About portfolioData={portfolioData} />} />
                        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

                        {/* Route sécurisée : Si non connecté, redirection vers /login */}
                        <Route
                            path="/admin"
                            element={isLoggedIn ? <AdminPanel portfolioData={portfolioData} updateData={updateData} /> : <Navigate to="/login" />}
                        />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;