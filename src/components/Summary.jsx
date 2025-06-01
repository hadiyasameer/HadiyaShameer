import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

function Summary({ id }) {
    function scrollToId(id) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div id={id} className='lg:mt-30 mt-20 lg:px-6 scroll-mt-28'>
            <p className='text-xl text-justify font-serif text-white/60 mx-w-3xl lg:mx-30 rounded-lg justify-center mb-12'>I'm a developer passionate about turning creative ideas into interactive, intuitive digital experiences. I thrive at the crossroads of design and engineering, where performance meets polish. Whether it's building sleek interfaces or architecting smooth user flows, I focus on clean code, seamless interactivity, and meaningful design. My work is driven by clarity, usability, and a touch of delight.</p>
            <div className='text-xl text-white/50 lg:mx-auto p-3 font-serif rounded-lg justify-center text-center mb-12 max-w-2xl'>
                <h2>Building dynamic and responsive digital interfaces. Bringing digital visions to life through clean design, smart code, and scalable architecture.</h2>
            </div>
            <div className="w-full flex justify-center">
            <div className='flex flex-col sm:flex-row gap-8 justify-center sm:items-center max-w-xl'>
                <div className="relative group w-full sm:w-1/2 max-w-xs ">
                    <div className="absolute -inset-1 blur opacity-70 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-sky-500 to-teal-400 rounded-lg z-0"></div>
                    <button onClick={() => scrollToId('projects')} className='relative z-0 w-full min-h-12 text-xl font-bold border rounded-lg text-white bg-black/50'>
                        Witness the Work</button>
                </div>
                <div className="relative group w-full sm:w-1/2 max-w-xs">
                    <div className="absolute -inset-1 blur opacity-70 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-sky-500 to-teal-400 rounded-lg z-0"></div>
                    <button onClick={() => scrollToId('contact')} className='relative border z-10 rounded-lg w-full h-12 text-xl font-bold text-white bg-black/50'>Say Hello 👋</button>
                </div>
            </div>
            </div>
            <div className="flex justify-center mt-10 ">
                <div className="flex items-center gap-x-2 group">
                    <a href="/Hadiya-resume.pdf" target="_blank" rel="noopener noreferrer" className="py-3 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-400 hover:opacity-80 transition">
                        Resume
                    </a>
                    <MdOutlineArrowOutward className='text-white text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
                </div>
            </div>
        </div>
    )
}

export default Summary