import React from 'react';
import { TiCss3, TiHtml5 } from "react-icons/ti";
import { SiJavascript, SiMongodb, SiNetlify, SiPostman, SiRedux, SiRender, SiTailwindcss, SiVercel, SiGoogleslides, SiAdobeillustrator, SiAdobephotoshop, SiSlideshare } from "react-icons/si";
import { FaBootstrap, FaGithub, FaNodeJs, FaReact, FaFigma } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsStripe } from "react-icons/bs";
import { MdOutlineAnalytics } from "react-icons/md";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";


function AboutMe({ id }) {
    const designTech = [
        // Core UX Deliverables
        { icon: <FaFigma className="h-6 w-6 text-pink-400" />, label: "Wireframes" },
        { icon: <FaFigma className="h-6 w-6 text-violet-300" />, label: "Mockups" },
        { icon: <FaFigma className="h-6 w-6 text-blue-300" />, label: "Prototyping" },
        { icon: <FaFigma className="h-6 w-6 text-teal-300" />, label: "UX Flow Diagrams" },
        { icon: <FaFigma className="h-6 w-6 text-orange-300" />, label: "User Journey Maps" },
        { icon: <FaFigma className="h-6 w-6 text-indigo-300" />, label: "Information Hierarchy" },
        { icon: <FaFigma className="h-6 w-6 text-rose-300" />, label: "Responsive Layouts" },

        // Visual Communication / Presentation Specialist Skills
        { icon: <PiMicrosoftPowerpointLogo className="h-6 w-6 text-red-400" />, label: "PowerPoint Design" },
        { icon: <SiGoogleslides className="h-6 w-6 text-yellow-400" />, label: "Google Slides" },
        { icon: <SiSlideshare className="h-6 w-6 text-orange-300" />, label: "Slide Storytelling" },
        { icon: <MdOutlineAnalytics className="h-6 w-6 text-green-400" />, label: "Annotated UI" },
        { icon: <MdOutlineAnalytics className="h-6 w-6 text-blue-300" />, label: "Workflow Diagrams" },
        { icon: <MdOutlineAnalytics className="h-6 w-6 text-purple-300" />, label: "Process Visualization" },

        // UX Improvements
        { icon: <FaFigma className="h-6 w-6 text-yellow-300" />, label: "Usability Improvements" },
        { icon: <FaFigma className="h-6 w-6 text-emerald-300" />, label: "Interaction Design" },

        // Tools (Design)
        { icon: <FaFigma className="h-6 w-6 text-pink-300" />, label: "Figma Expertise" },
        { icon: <SiAdobeillustrator className="h-6 w-6 text-orange-400" />, label: "Adobe Illustrator" },
        { icon: <SiAdobephotoshop className="h-6 w-6 text-blue-400" />, label: "Adobe Photoshop" },

        // Presentation Tools (for Qatar Airways role relevance)
        { icon: <PiMicrosoftPowerpointLogo className="h-6 w-6 text-red-300" />, label: "Keynote/Presentation Design" },
        { icon: <SiGoogleslides className="h-6 w-6 text-yellow-300" />, label: "Visual Documentation" },
    ];


    const devTech = [
        { icon: <TiHtml5 className="h-6 w-6 text-orange-600" />, label: "HTML" },
        { icon: <TiCss3 className="h-6 w-6 text-blue-600" />, label: "CSS3" },
        { icon: <SiTailwindcss className="h-6 w-6 text-cyan-400" />, label: "Tailwind" },
        { icon: <SiJavascript className="h-6 w-6 text-yellow-400" />, label: "JavaScript" },
        { icon: <FaReact className="h-6 w-6 text-cyan-300" />, label: "React" },
        { icon: <FaNodeJs className="h-6 w-6 text-lime-500" />, label: "NodeJS" },
        { icon: <SiMongodb className="h-6 w-6 text-green-500" />, label: "MongoDB" },
        { icon: <BiLogoPostgresql className="h-6 w-6 text-sky-700" />, label: "PostgreSQL" },
        { icon: <FaBootstrap className="h-6 w-6 text-purple-500" />, label: "Bootstrap" },
        { icon: <SiRedux className="h-6 w-6 text-indigo-400" />, label: "Redux" },
        { icon: <SiNetlify className="h-6 w-6 text-teal-400" />, label: "Netlify" },
        { icon: <SiVercel className="h-6 w-6 text-black bg-white rounded" />, label: "Vercel" },
        { icon: <SiRender className="h-6 w-6 text-black bg-white rounded" />, label: "Render" },
        { icon: <BsStripe className="h-6 w-6 text-indigo-500" />, label: "Stripe" },
        { icon: <SiPostman className="h-6 w-6 text-orange-500" />, label: "Postman" },
        { icon: <FaGithub className="h-6 w-6 text-white bg-black rounded" />, label: "GitHub" },
    ];

    return (
        <div className='my-10' id={id}>
            <div className='mt-20 text-center z-30'>
                <h1 className='font-serif lg:text-xl text-emerald-300'>ABOUT ME</h1>
                <h2 className='font-serif lg:text-3xl font-bold text-white my-5'>My World Uncovered</h2>
                <p className='lg:text-xl text-white/50 m-auto p-3 font-serif lg:justify-center lg:text-center lg:w-full'>
                    I'm a hybrid Product Designer and Full Stack Developer. I create intuitive user experiences, wireframes, mockups, and visual storytelling for design-driven projects. Using modern front-end tools (React, Tailwind, JavaScript), I ensure that designs are both beautiful and technically feasible.
                </p>
            </div>

            <div className='flex flex-col justify-center gap-10'>

                {/* UX / Design */}
                <div className='rounded-3xl border border-white/20 bg-white/5 w-full shadow-3xl text-center text-white p-5'>
                    <h1 className='font-serif lg:text-2xl font-bold text-white my-5 flex items-center justify-center gap-3'>
                        UX & Visual Communication
                    </h1>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
                        {designTech.map((tech, index) => (
                            <span
                                key={index}
                                className="text-base lg:text-lg border border-white/20 text-white flex items-center gap-2 p-3 rounded-xl"
                            >
                                {tech.icon} {tech.label}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Developer */}
                <div className='rounded-3xl border border-white/20 bg-white/5 w-full shadow-3xl text-center text-white p-5'>
                    <h1 className='font-serif lg:text-2xl font-bold text-white my-5 flex items-center justify-center gap-3'>
                        Developer Toolbox
                    </h1>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
                        {devTech.map((tech, index) => (
                            <span
                                key={index}
                                className="text-base lg:text-lg border border-white/20 text-white flex items-center gap-2 p-3 rounded-xl"
                            >
                                {tech.icon} {tech.label}
                            </span>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
}

export default AboutMe;
