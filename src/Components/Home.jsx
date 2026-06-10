import React from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';

export default function Home({ portfolioData }) {
    return (
        <>
            <Hero heroData={portfolioData.hero} />
            <Projects projectsData={portfolioData.projects} />
            <Contact />
        </>
    );
}