import React from 'react';

function Qualifications() {
    const cards = [
        {
            title: "Bachelor of Technology in Computer Science and Engineering",
            description: "Completed with a strong foundation in computing principles.",
        },
        {
            title: "MERN Stack Certification",
            description: "Certified in full-stack development using MongoDB, Express, React, and Node.",
        },
        {
            title: "Frontend Development Expertise",
            description: "Gained through self-directed learning and hands-on projects.",
        },
        {
            title: "Backend Development Skills",
            description: "Actively refining through continuous practice and real-world applications.",
        },
    ];


    return (
        <div className='py-16 mx-10 z-10 lg:mt-50'>
            <div className='text-center'>
                <h1 className='font-serif lg:text-xl text-emerald-300'>Education & Certifications</h1>
                <h1 className='font-serif sm:text-3xl lg:text-5xl font-bold text-white my-5'>My Qualifications</h1>
                <h3 className='lg:text-2xl text-white/50 font-serif w-full lg:w-1/2 mx-auto'>
                    Where structured learning meets practical validation — my path through education and certifications.
                </h3>
            </div>
            <div className='flex flex-col sm:flex-row mt-20 gap-5 justify-center items-stretch'>
                {cards.map((card, index) => (
                    <div key={index} className="relative group w-[300px] sm:w-[350px] md:w-[400px] flex flex-col">
                        <div className="absolute -inset-1 blur opacity-70 transition duration-300 bg-gradient-to-r from-sky-500 to-teal-400 rounded-lg z-0"></div>
                        <div className="relative text-white/80 rounded-2xl shadow-xl p-6 transform transition-transform duration-300 hover:scale-105 bg-black/70 z-0 h-full flex flex-col justify-between">
                            <h1 className="text-xl font-bold mb-5 text-center">{card.title}</h1>
                            <p className="text-md text-center">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Qualifications;
