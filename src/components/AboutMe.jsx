import React from 'react'
import { TiCss3, TiHtml5 } from "react-icons/ti";
import { SiJavascript, SiMongodb, SiNetlify, SiPostman, SiRedux, SiRender, SiTailwindcss, SiVercel } from "react-icons/si";
import { FaBootstrap, FaFigma, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { BsStripe } from "react-icons/bs";


function AboutMe({ id }) {
    const techStack = [
        { icon: <TiHtml5 className="h-6 w-6 text-orange-600" />, label: "HTML" },
        { icon: <TiCss3 className="h-6 w-6 text-blue-600" />, label: "CSS3" },
        { icon: <SiTailwindcss className="h-6 w-6 text-cyan-400" />, label: "Tailwind" },
        { icon: <SiJavascript className="h-6 w-6 text-yellow-400" />, label: "JavaScript" },
        { icon: <FaReact className="h-6 w-6 text-cyan-300" />, label: "React" },
        { icon: <SiMongodb className="h-6 w-6 text-green-500" />, label: "MongoDB" },
        { icon: <FaNodeJs className="h-6 w-6 text-lime-500" />, label: "NodeJS" },
        { icon: <FaBootstrap className="h-6 w-6 text-purple-500" />, label: "Bootstrap" },
    ];

    const techStack1 = [
        { icon: <FaGithub className="h-6 w-6 text-white bg-black rounded" />, label: "GitHub" },
        { icon: <FaFigma className="h-6 w-6 text-pink-400" />, label: "Figma" },
        { icon: <SiRedux className="h-6 w-6 text-indigo-400" />, label: "Redux" },
        { icon: <BsStripe className="h-6 w-6 text-indigo-500" />, label: "Stripe" },
        { icon: <SiNetlify className="h-6 w-6 text-teal-400" />, label: "Netlify" },
        { icon: <SiVercel className="h-6 w-6 text-black bg-white rounded" />, label: "Vercel" },
        { icon: <SiRender className="h-6 w-6 text-black bg-white rounded" />, label: "Render" },
        { icon: <SiPostman className="h-6 w-6 text-orange-500" />, label: "Postman" },
    ];
    return (
        <div className='my-10' id={id }>
            <div className='mt-20 text-center z-30'>
                <h1 className='font-serif lg:text-xl text-emerald-300'>ABOUT ME</h1>
                <h2 className='font-serif lg:text-4xl font-bold text-white my-5'>My World Uncovered</h2>
                <h3 className='lg:text-2xl text-white/50 m-auto p-3 font-serif lg:justify-center lg:text-center lg:w-1/3'>See what I do, what I love, and what inspires me.</h3>
            </div>
            <div className='flex sm:flex-row flex-col justify-center'>
                <div className='rounded-3xl m-10 border border-white/20 bg-white/5 lg:w-2/5 shadow-3xl text-center text-white'>
                    <div className="overflow-hidden w-full my-10">
                        <div className="inline-flex min-w-full gap-5 animate-[var(--animate-slide-right)]">
                            {techStack.map((tech, index) => (
                                <span key={index} className="text-xl border border-white/20 text-white flex items-center gap-2 p-3 rounded-xl">
                                    {tech.icon}
                                    {tech.label}
                                </span>
                            ))}
                            {techStack.map((tech, index) => (
                                <span key={`dup-${index}`} className="text-xl border border-white/20 text-white flex items-center gap-2 p-3 rounded-xl">
                                    {tech.icon}
                                    {tech.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    <h1 className='font-serif lg:text-2xl font-bold text-white my-5  flex items-center justify-center pt-3 gap-5'>
                        <span className="relative flex size-5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex size-5 rounded-full bg-sky-500"></span>
                        </span>My ToolBox</h1>
                    <h2 className='lg:text-xl text-white/50 m-auto p-3 font-serif justify-center text-center lg:w-3/4'>Discover the tools and techniques behind my digital creations.</h2>

                    <div className="overflow-hidden w-full my-5">
                        <div className="inline-flex gap-5 animate-[var(--animate-slide-left)]">
                            {techStack1.map((tech, index) => (
                                <span key={index} className="text-xl border border-white/20 text-white flex items-center gap-2 p-3 rounded-xl">
                                    {tech.icon}
                                    {tech.label}
                                </span>
                            ))}
                            {techStack1.map((tech, index) => (
                                <span key={`dup-${index}`} className="text-xl border border-white/20 text-white flex items-center gap-2 p-3 rounded-xl">
                                    {tech.icon}
                                    {tech.label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='rounded-3xl m-10 border border-white/20 bg-white/5 lg:w-2/5 shadow-3xl text-center text-white'>
                    <h1 className='font-serif lg:text-2xl font-bold text-white my-5  flex items-center justify-center gap-5'>
                        <span className="relative flex size-5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex size-5 rounded-full bg-sky-500"></span>
                        </span>Outside the Terminal</h1>
                    <h2 className='lg:text-xl text-white/50 m-auto p-3 font-serif justify-center text-center lg:w-3/4 '>Beyond screens and syntax — here’s what I enjoy in the real world.</h2>
                    <div className="flex flex-wrap justify-center gap-4 pb-2">
                        <span className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-black opacity-50 bg-gradient-to-r from-sky-500 to-teal-400 border border-white/20 text-sm sm:text-base lg:text-xl font-medium shadow-lg hover:scale-105 transition-transform duration-300 lg:justify-center z-10">📷 Photography</span>
                        <span className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-black opacity-50 bg-gradient-to-r from-sky-500 to-teal-400 border border-white/20 text-sm sm:text-base lg:text-xl font-medium shadow-lg hover:scale-105 transition-transform duration-300 lg:justify-center z-10">🎵 Music</span>
                        <span className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-black opacity-50 bg-gradient-to-r from-sky-500 to-teal-400 border border-white/20 text-sm sm:text-base lg:text-xl font-medium shadow-lg hover:scale-105 transition-transform duration-300 lg:justify-center z-10">👨‍👩‍👧‍👦 Quality Family Time</span>
                        <span className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-black opacity-50 bg-gradient-to-r from-sky-500 to-teal-400 border border-white/20 text-sm sm:text-base lg:text-xl font-medium shadow-lg hover:scale-105 transition-transform duration-300 lg:justify-center z-10">📖 Reading</span>
                        <span className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-black opacity-50 bg-gradient-to-r from-sky-500 to-teal-400 border border-white/20 text-sm sm:text-base lg:text-xl font-medium shadow-lg hover:scale-105 transition-transform duration-300 lg:justify-center z-10">🌍 Exploring New Places</span>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default AboutMe