import React from 'react';
import ImageSite from '../assets/ImageSite.png';

export default function Hero() {
    return (
        <section id="hero" className="relative w-full min-h-screen flex items-center overflow-x-hidden bg-white">

            {/* L'image combinée est sortie du flux (absolute) et fixée en haut à droite.
              object-right-top garantit que l'image colle toujours au plafond et au bord droit de l'écran.
            */}
            <div className="absolute top-0 right-0 w-full md:w-1/2 lg:w-[55%] h-full flex justify-end items-start z-0 pointer-events-none">
                <img
                    src={ImageSite}
                    alt="Julien Vouilloz"
                    className="w-full h-auto max-w-2xl md:max-w-none md:h-[90vh] object-contain object-right-top"
                />
            </div>

            {/* Le conteneur du texte reste centré dans sa zone invisible (max-w-7xl).
              On donne à ce bloc une largeur de la moitié de l'écran (md:w-1/2)
              pour qu'il ne passe pas derrière ou par-dessus l'image.
            */}
            <div className="max-w-7xl mx-auto w-full px-8 md:px-16 z-10 mt-24 md:mt-0 relative">
                <div className="flex flex-col space-y-5 font-sans w-full md:w-1/2 md:pr-10">
                    <h2 className="text-[#FDC435] font-title font-bold uppercase tracking-widest text-sm md:text-base">
                        Chef de projet
                    </h2>

                    <h1 className="text-5xl md:text-7xl font-title font-black text-[#25282B] leading-tight">
                        Hello, my name is <br />
                        Julien Vouilloz
                    </h1>

                    <p className="text-[#828282] text-lg max-w-md leading-relaxed">
                        Seven minutes, seven minutes is all i can spend to spare with you.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-[#FDC435] text-[#25282B] font-bold px-8 py-2 rounded-lg shadow-[0_4px_10px_rgba(253,196,53,0.4)] hover:bg-yellow-500 transition-colors">
                            Projects
                        </button>

                        <button className="border-2 border-[#25282B] text-[#25282B] bg-transparent font-bold px-8 py-2 rounded-lg hover:bg-[#25282B] hover:text-white transition-colors">
                            LinkedIn
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
}