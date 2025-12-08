import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Intro from './Intro';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Qualifications from './Qualifications';
import Features from './Features';
import Contact from './Contact';
import Footer from './Footer';
import Summary from './Summary';
import ProductDesign from './ProductDesign';
import VisualRepresentation from './VisualRepresentation';
function Main() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const gradientStyle = {
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    };
    return (
        <div className='bg-black min-h-screen relative flex flex-col lg:flex-row overflow-x-hidden'>
            <div className="pointer-events-none lg:fixed inset-0 z-100 transition duration-300 " style={gradientStyle}></div>
            <div className='w-full lg:w-1/3 lg:fixed left-0 top-0 flex flex-col h-auto lg:h-full items-center justify-center space-y-6 z-10'>
                <Intro />
                <Header />
                <Footer />
            </div>
            <div className='w-full px-4 pb-8 lg:ml-[30%] lg:w-[70%] lg:px-6 z-10'>
                <Summary id="summary" />
                <Qualifications />
                {/* <Features /> */}
                <ProductDesign id="product_design" />
                <Projects id="projects" />
                <VisualRepresentation id="visual_representation" />
                {/* <Features /> */}
                <AboutMe id="about" />
                <Contact id="contact" />
                <h1 className='text-white/50 text-sm md:text-base lg:text-xl mt-8 px-4 text-center'>Crafted in <span className='text-white/80'>VS Code</span>, powered by <span className='text-white/80'>React.js</span> and styled with <span className='text-white/80'>Tailwind CSS</span>. Deployed globally with <span className='text-white/80'>Vercel</span>.</h1>
            </div>

        </div>
    )
}

export default Main