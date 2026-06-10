import 'react';
import imgProject1 from '../assets/imgProject1.jpg';
import imgProject2 from '../assets/imgProject2.jpg';
import imgProject3 from '../assets/imgProject3.png';

export default function Projects({ projectsData }) {
    const projectList = [
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
    ];

    return (
        <section id="projects" className="w-full py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                <div className="flex flex-col items-center mb-16 relative">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-3">
                        Projects
                    </h2>
                    <div className="w-20 h-1 bg-primary rounded-full"></div>
                </div>

                <div className="flex flex-col space-y-16">

                    {projectsData?.map((project) => (
                        <div
                            key={project.id}
                            className={`flex flex-col ${project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-3xl shadow-[0_4px_24px_rgba(37,40,43,0.08)] overflow-hidden`}
                        >

                            <div className="w-full md:w-1/2 p-8 md:p-14 lg:p-20 flex flex-col justify-center items-start">
                                <h3 className="text-3xl font-title font-bold text-[#25282B] mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-[#828282] text-base md:text-lg mb-8 leading-relaxed">
                                    {project.description}
                                </p>
                                <button className="border-2 border-[#25282B] text-[#25282B] font-bold px-6 py-2 rounded-lg hover:bg-[#25282B] hover:text-white transition-colors">
                                    View Project
                                </button>
                            </div>

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