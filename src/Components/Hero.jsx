import React from 'react';
import ImageSite from '../assets/ImageSite.png';

export default function Hero() {
    return (
        <section id="hero" className="relative w-full min-h-screen flex items-center overflow-x-hidden bg-white">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full px-8 md:px-16 z-10 pt-20">

                {/* Colonne Gauche : Typographie et Call-to-actions */}
                <div className="flex flex-col space-y-5 font-sans">
                    <h2 className="text-[#FDC435] font-bold uppercase tracking-widest text-sm md:text-base">
                        Chef de projet
                    </h2>

                    {/* L'utilisation de text-5xl à text-7xl et font-black reproduit le côté massif du titre */}
                    <h1 className="text-5xl md:text-7xl font-black text-[#25282B] leading-tight">
                        Hello, my name is <br />
                        Julien Vouilloz
                    </h1>

                    <p className="text-[#828282] text-lg max-w-md leading-relaxed">
                        Seven minutes, seven minutes is all i can spend to spare with you.
                    </p>

                    {/* Conteneur des boutons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        {/* Bouton Projects avec l'ombre jaune de la maquette */}
                        <button className="bg-[#FDC435] text-[#25282B] font-bold px-8 py-2 rounded-lg shadow-[0_4px_10px_rgba(253,196,53,0.4)] hover:bg-yellow-500 transition-colors">
                            Projects
                        </button>

                        {/* Bouton LinkedIn transparent avec bordure */}
                        <button className="border-2 border-[#25282B] text-[#25282B] bg-transparent font-bold px-8 py-2 rounded-lg hover:bg-[#25282B] hover:text-white transition-colors">
                            LinkedIn
                        </button>
                    </div>
                </div>

                {/* Colonne Droite : L'image combinée */}
                <div className="relative flex justify-center md:justify-end items-center w-full">
                    {/* L'image est placée simplement, avec un léger scale et une origine à droite
                        pour qu'elle donne l'impression de "coller" au bord de l'écran sur les grands écrans */}
                    <img
                        src={ImageSite}
                        alt="Julien Vouilloz"
                        className="w-full max-w-lg md:max-w-xl lg:max-w-2xl object-contain md:scale-110 md:origin-right"
                    />
                </div>

            </div>
        </section>
    );
}