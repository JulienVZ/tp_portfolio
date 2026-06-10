import React, { useState } from 'react';

export default function AdminPanel({ portfolioData, updateData }) {
    const [heroSubtitle, setHeroSubtitle] = useState(portfolioData.hero.subtitle);
    const [heroTitle, setHeroTitle] = useState(portfolioData.hero.title);
    const [heroDesc, setHeroDesc] = useState(portfolioData.hero.description);
    const [aboutText, setAboutText] = useState(portfolioData.about.text);

    // États locaux pour le formulaire d'ajout de projet
    const [newProjTitle, setNewProjTitle] = useState('');
    const [newProjDesc, setNewProjDesc] = useState('');
    const [newProjImg, setNewProjImg] = useState('');
    const [newProjReverse, setNewProjReverse] = useState(false);

    const handleSaveTexts = (e) => {
        e.preventDefault();
        const updated = {
            ...portfolioData,
            hero: { subtitle: heroSubtitle, title: heroTitle, description: heroDesc },
            about: { text: aboutText }
        };
        updateData(updated);
        alert('Contenu textuel mis à jour avec succès !');
    };

    const handleAddProject = (e) => {
        e.preventDefault();
        const newProject = {
            id: Date.now(),
            title: newProjTitle,
            description: newProjDesc,
            img: newProjImg || "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
            reverse: newProjReverse
        };

        const updated = {
            ...portfolioData,
            projects: [...portfolioData.projects, newProject]
        };

        updateData(updated);

        setNewProjTitle('');
        setNewProjDesc('');
        setNewProjImg('');
        setNewProjReverse(false);
        alert('Nouveau projet ajouté au portfolio !');
    };

    const handleDeleteProject = (id) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) {
            const updatedProjects = portfolioData.projects.filter(project => project.id !== id);
            const updated = {
                ...portfolioData,
                projects: updatedProjects
            };
            updateData(updated);
        }
    };

    return (
        <section className="w-full min-h-screen bg-white pt-32 pb-20 px-4 md:px-16 font-sans">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-title font-black text-[#25282B] mb-8 border-b pb-4">Panel Administrateur</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    <form onSubmit={handleSaveTexts} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col space-y-5">
                        <h2 className="text-xl font-title font-bold text-[#25282B] mb-2 border-l-4 border-[#fefa36] pl-3">Édition des Textes</h2>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Hero - Sous-titre</label>
                            <input type="text" value={heroSubtitle} onChange={(e) => setHeroSubtitle(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-[#25282B]" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Hero - Titre Principal</label>
                            <textarea rows="2" value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm resize-none text-[#25282B]" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Hero - Description</label>
                            <textarea rows="3" value={heroDesc} onChange={(e) => setHeroDesc(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-[#25282B]" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">About - Présentation</label>
                            <textarea rows="5" value={aboutText} onChange={(e) => setAboutText(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-[#25282B]" />
                        </div>

                        <button type="submit" className="border-2 border-[#25282B] text-white bg-[#25282B] font-bold px-6 py-2 rounded-lg hover:bg-white hover:text-[#25282B] transition-colors">
                            Sauvegarder les modifications
                        </button>
                    </form>

                    <form onSubmit={handleAddProject} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col space-y-5">
                        <h2 className="text-xl font-title font-bold text-[#25282B] mb-2 border-l-4 border-[#fefa36] pl-3">Ajouter un Projet</h2>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Nom du Projet</label>
                            <input type="text" required value={newProjTitle} onChange={(e) => setNewProjTitle(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-[#25282B]" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Description</label>
                            <textarea rows="3" required value={newProjDesc} onChange={(e) => setNewProjDesc(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-[#25282B]" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Lien URL de l'image</label>
                            <input type="text" placeholder="https://..." value={newProjImg} onChange={(e) => setNewProjImg(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-[#25282B]" />
                        </div>
                        <div className="flex items-center space-x-3 pt-2">
                            <input type="checkbox" id="reverse" checked={newProjReverse} onChange={(e) => setNewProjReverse(e.target.checked)} className="w-4 h-4 text-[#fefa36] border-gray-300 rounded focus:ring-[#fefa36]" />
                            <label htmlFor="reverse" className="text-sm font-medium text-[#25282B]">Inverser la disposition (Image à gauche)</label>
                        </div>

                        <button type="submit" className="bg-[#fefa36] text-[#25282B] font-bold py-2.5 rounded-lg hover:bg-yellow-500 shadow-sm transition-colors mt-4 self-end px-6 text-sm">
                            Ajouter le projet
                        </button>
                    </form>

                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col space-y-5 mt-10">
                    <h2 className="text-xl font-title font-bold text-[#25282B] mb-2 border-l-4 border-red-500 pl-3">Liste des Projets Existants</h2>

                    {portfolioData.projects.length === 0 ? (
                        <p className="text-gray-500 text-sm italic">Aucun projet à afficher.</p>
                    ) : (
                        <div className="divide-y divide-gray-100">
                            {portfolioData.projects.map((project) => (
                                <div key={project.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                                    <div className="flex items-center space-x-4">
                                        <img src={project.img} alt="" className="w-16 h-12 object-cover rounded-md bg-gray-100" />
                                        <div>
                                            <h3 className="text-sm font-bold text-[#25282B]">{project.title}</h3>
                                            <p className="text-xs text-gray-400 line-clamp-1 max-w-md">{project.description}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleDeleteProject(project.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}