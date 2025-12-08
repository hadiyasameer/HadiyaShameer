import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const projectsData = [
  {
    title: "Ride Qatar",
    subtitle: "Car Rental Platform · 2025",
    features: ["🚗 Book cars online", "🚘 List your own car", "🔍 Smart filters", "💳 Secure payments"],
    link: "https://car-rental-client-mauve.vercel.app/",
    image: "/images/rideqatar.png",
  },
  {
    title: "Easy Store",
    subtitle: "E-Commerce Website · 2025",
    features: ["🛍️ Browse products", "🔎 Search by product name", "📂 Filter by category", "📄 View product details"],
    link: "https://hadiyasameer.github.io/estore/",
    image: "/images/estore.png",
  },
  // {
  //   title: "Gucci Fashion Store",
  //   subtitle: "Fashion Website · 2025",
  //   features: ["👗 Responsive design", "🧩 Stylish UI components", "📱 Mobile-first layout"],
  //   link: "https://hadiyasameer.github.io/guccibyreactbootstrap/",
  //   image: "/images/gucci.png",
  // },
  // {
  //   title: "Movies Just For You",
  //   subtitle: "Movie Finder · 2025",
  //   features: ["🎬 Browse movies", "📖 View detailed movie information", "📱 Mobile-first layout"],
  //   link: "https://hadiyasameer.github.io/movie-details/",
  //   image: "/images/moviefinder.png",
  // },
];

function Projects({ id }) {
  return (
    <div id={id} className="mt-30 px-4 md:px-0">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-serif lg:text-xl text-emerald-300">CRAFTED WITH CODE & CREATIVITY</h1>
        {/* <h1 className="font-serif lg:text-4xl font-bold text-white my-5">Made By Me</h1> */}
        <p className="lg:text-xl text-white/50 m-auto p-3 font-serif rounded-lg justify-center text-center lg:w-1/2">
          Explore the journey from concept to compelling interface.
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        className="pb-20"
      >
        {projectsData.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row justify-between items-center p-5 md:p-10 m-auto rounded-3xl border-0 bg-slate-950 w-full md:w-5/6 shadow-3xl transition-transform duration-300 hover:scale-105">
              <div className="max-w-md flex flex-col justify-center items-center text-center">
                <h2 className="font-serif lg:text-xl font-bold text-emerald-300">{project.subtitle}</h2>
                <h1 className="font-serif lg:text-2xl font-bold text-white my-5">{project.title}</h1>
                <ul className="lg:text-xl text-white/70 text-center space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-white/80 text-emerald-500 text-xl px-4 py-2 mt-5 rounded-lg transition"
                >
                  Live Demo
                </a>
              </div>
              <div className="w-full md:w-1/2 p-4 mt-6 md:mt-0">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="rounded w-full transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;
