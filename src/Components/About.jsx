import aboutImg from '../assets/Karis.jpg';

export default function About() {
    return (
    <section className="w-full pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="flex flex-col items-start space-y-6 font-sans">
                <h2 className="text-4xl md:text-5xl font-title font-bold text-[#25282B]">
                    About me
                </h2>

                <p className="text-[#828282] text-lg leading-relaxed">
                    Étudiant en école d'ingénieur à l'EFREI Bordeaux, je me spécialise dans l'IA et la data et la gestion de projets. Actuellement apprenti référent informatique chez Maison SALIN, je conçois et mets en place des solutions techniques pour répondre aux défis numériques de l'entreprise.
                </p>

                <button className="bg-[#fefa36] text-[#25282B] font-bold px-8 py-2 rounded-lg shadow-[0_4px_10px_rgba(253,196,53,0.4)] hover:bg-yellow-300 transition-colors mt-2">
                    Resume
                </button>
            </div>

            <div className="flex justify-center items-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#fefa36] rounded-full overflow-hidden flex justify-center items-end shadow-lg">
                    <img
                        src={aboutImg}
                        alt="Julien Vouilloz"
                        className="w-[85%] h-auto object-contain"
                    />
                </div>
            </div>

        </div>
    </section>
);
}