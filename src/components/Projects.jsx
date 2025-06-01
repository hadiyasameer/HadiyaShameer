import React from 'react'

function Projects({ id }) {
    return (
        <div id={ id }>
            <div className='mt-40 text-center z-30'>
                <h1 className='font-serif lg:text-xl text-emerald-300'>CRAFTED WITH CODE & CREATIVITY</h1>
            </div>
            <div className='text-center z-30'>
                <h1 className='font-serif lg:text-4xl font-bold text-white my-5'>Made By Me</h1>
                <h1 className='lg:text-2xl text-white/50 m-auto p-3 font-serif rounded-lg justify-center text-center lg:w-1/3'>Explore the journey from concept to compelling interface.</h1>
            </div>
            <div className="pb-40 min-h-[200vh] relative">
                {/* project 1 */}
                <div className='sticky top-32 z-[5] items-center flex flex-col md:flex-row justify-between p-5 mt-20 m-auto rounded-3xl border-0 bg-slate-950 w-2/3 shadow-3xl transition-transform duration-300 hover:scale-105'>
                    <div className='max-w-md flex flex-col justify-center items-center p-10 text-center'>
                        <h2 className='font-serif lg:text-xl font-bold text-emerald-300 '>Car Rental Platform . 2025</h2>
                        <h1 className='font-serif lg:text-3xl font-bold text-white my-5'>Ride Qatar</h1>
                        <ul className='lg:text-xl text-white/70 lg:justify-center lg:text-center'>
                            <li>🚗 Book cars online</li>
                            <li>🚘 List your own car</li>
                            <li>🔍 Smart filters</li>
                            <li>💳 Secure payments</li>
                        </ul>
                        <a href="https://car-rental-client-mauve.vercel.app/" target="_blank" rel="noopener noreferrer"
                            className="bg-white hover:bg-white/80 text-emerald-500 text-xl  px-4 py-2 mt-5 rounded-lg transition">
                            Live Demo
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <img src="/images/rideqatar.png" alt="Ride Qatar project screenshot" className="rounded transition-transform duration-300 hover:scale-105 w-full overflow-hidden " />
                    </div>
                </div>
                {/* project 2 */}
                <div className='sticky top-40 z-[6] items-center mt-10 flex flex-col md:flex-row justify-between p-5 m-auto rounded-3xl border-0 bg-slate-950 w-2/3 shadow-3xl transition-transform duration-300 hover:scale-105'>
                    <div className='max-w-md flex flex-col justify-center items-center p-10 text-center'>
                        <h2 className='font-serif lg:text-xl font-bold text-emerald-300 '>E-Commerce Website · 2025</h2>
                        <h1 className='font-serif lg:text-3xl font-bold text-white my-5'>Easy Store</h1>
                        <ul className='lg:text-xl text-white/70 justify-center text-center'>
                            <li>🛍️ Browse products</li>
                            <li>🔎 Search by product name</li>
                            <li>📂 Filter by category</li>
                            <li>📄 View product details</li>
                        </ul>
                        <a href="https://hadiyasameer.github.io/estore/" target="_blank" rel="noopener noreferrer"
                            className="bg-white hover:bg-white/80 text-emerald-500 text-xl  px-4 py-2 mt-5 rounded-lg transition">
                            Live Demo
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <img src="/images/estore.png" alt="Easy Store project screenshot" className="rounded transition-transform duration-300 hover:scale-105 w-full overflow-hidden " />
                    </div>
                </div>
                {/* project 3 */}
                <div className='sticky top-48 z-[7] items-center mt-10 flex flex-col md:flex-row justify-between p-5 m-auto rounded-3xl border-0 bg-slate-950 w-2/3 shadow-3xl transition-transform duration-300 hover:scale-105'>
                    <div className='max-w-md flex flex-col justify-center items-center p-5 text-center'>
                        <h2 className='font-serif lg:text-xl font-bold text-emerald-300 '>Fashion Website · 2025</h2>
                        <h1 className='font-serif lg:text-3xl font-bold text-white my-5'>Gucci Fashion Store</h1>
                        <ul className='lg:text-xl text-white/70 justify-center text-center'>
                            <li>👗 Responsive design</li>
                            <li>🧩 Stylish UI components</li>
                            <li>📱 Mobile-first layout</li>
                        </ul>
                        <a href="https://hadiyasameer.github.io/guccibyreactbootstrap/" target="_blank" rel="noopener noreferrer"
                            className="bg-white hover:bg-white/80 text-emerald-500 text-xl  px-4 py-2 mt-5 rounded-lg transition">
                            Live Demo
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <img src="/images/gucci.png" alt="Gucci by bootstrap project screenshot" className="rounded transition-transform duration-300 hover:scale-105 w-full overflow-hidden " />
                    </div>
                </div>
                {/* project 4 */}
                <div className='sticky top-56 z-[8] items-center mt-10 flex flex-col md:flex-row justify-between p-5 m-auto rounded-3xl border-0 bg-slate-950 w-2/3 shadow-3xl transition-transform duration-300 hover:scale-105'>
                    <div className='max-w-md flex flex-col justify-center items-center p-5 text-center'>
                        <h2 className='font-serif lg:text-xl font-bold text-emerald-300 '>Movie Finder · 2025</h2>
                        <h1 className='font-serif lg:text-3xl font-bold text-white my-5'>Movies Just For You</h1>
                        <ul className='lg:text-xl text-white/70 justify-center text-center'>
                            <li>🎬 Browse movies</li>
                            <li>📖 View detailed movie information</li>
                            <li>📱 Mobile-first layout</li>
                        </ul>
                        <a href="https://hadiyasameer.github.io/movie-details/" target="_blank" rel="noopener noreferrer"
                            className="bg-white hover:bg-white/80 text-emerald-500 text-xl  px-4 py-2 mt-5 rounded-lg transition">
                            Live Demo
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <img src="/images/moviefinder.png" alt="Movie details project screenshot" className="rounded transition-transform duration-300 hover:scale-105 w-full overflow-hidden " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects