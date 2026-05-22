import React from 'react';
import imgProject1 from '../assets/imgProject1.jpg';
import imgProject2 from '../assets/imgProject2.jpg';
import imgProject3 from '../assets/imgProject3.png';

export default function Projects() {
    const projectList = [
        {
            id: 1,
            title: "Project Name",
            description: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
            img: imgProject1, // Remplacer par imgProject1
            reverse: false // Image à droite
        },
        {
            id: 2,
            title: "Project Name",
            description: "What was your role, your deliverables, if the project was personal, freelancing.",
            img: imgProject2, // Remplacer par imgProject2
            reverse: true // Image à gauche
        },
        {
            id: 3,
            title: "Project Name",
            description: "You can also add in this description the type of the project, if it was for web, mobile, electron.",
            img: imgProject3, // Remplacer par imgProject3
            reverse: false // Image à droite
        }
    ];

    return (
        <section id="projects" className="w-full py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                {/* En-tête de la section */}
                <div className="flex flex-col items-center mb-16 relative">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-3">
                        Projects
                    </h2>
                    {/* Le petit trait jaune sous le titre */}
                    <div className="w-20 h-1 bg-primary rounded-full"></div>
                </div>

                {/* Conteneur de la liste des projets */}
                <div className="flex flex-col space-y-16">

                    {/* Boucle sur le tableau pour générer les cartes */}
                    {projectList.map((project) => (
                        <div
                            key={project.id}
                            className={`flex flex-col ${project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-card shadow-card overflow-hidden`}
                        >

                            {/* Moitié Texte */}
                            <div className="w-full md:w-1/2 p-8 md:p-14 lg:p-20 flex flex-col justify-center items-start">
                                <h3 className="text-3xl font-serif font-bold text-dark mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-muted text-base md:text-lg mb-8 leading-relaxed">
                                    {project.description}
                                </p>
                                <button className="border-2 border-dark text-dark font-bold px-6 py-2 rounded-full hover:bg-dark hover:text-white transition-colors">
                                    View Project
                                </button>
                            </div>

                            {/* Moitié Image */}
                            <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[300px] md:min-h-[450px]">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}