import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const visualProjects = [
  {
    title: "PayLater Implementation ",
    subtitle: "Slide Deck · UX • Workflow • Presentation",
    image: "/images/shopify-paylater.jpeg",
    link: "#",
  },
  {
    title: "Shopify - PayLater Integration Diagrams",
    subtitle: "Technical Flowcharts · Sequence Diagrams · API Logic",
    image: "/images/shopify.jpeg",
    link: "#",
  },
  {
    title: "Annotated UI Screens",
    subtitle: "UX Notes • Pain Points • Feature Highlights",
    image: "/images/shopify-paylater.jpeg",
    link: "#",
  },
  {
    title: "Product Walkthrough Decks",
    subtitle: "Feature Overview · Processes · User Journey",
    image: "/images/shopify.jpeg",
    link: "#",
  },
];

function VisualRepresentation({ id }) {
  return (
    <div id={id} className="mt-30 px-4 md:px-0">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-serif lg:text-xl text-emerald-300">
          VISUAL COMMUNICATION & PRESENTATION WORK
        </h1>
        <h1 className="font-serif lg:text-2xl font-bold text-white my-3">
          Projects & Slide Decks
        </h1>
        <p className="lg:text-xl text-white/50 m-auto p-3 font-serif rounded-lg justify-center text-center lg:w-1/2">
          Placeholder section for presentations, diagrams, and annotated UI
          screens.
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
        {visualProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row justify-between items-center p-5 md:p-10 m-auto rounded-3xl bg-slate-950 w-full md:w-5/6 shadow-3xl transition-transform duration-300 hover:scale-105">
              <div className="max-w-md flex flex-col justify-center items-center text-center">
                <h2 className="font-serif lg:text-xl font-bold text-emerald-300">
                  {project.subtitle}
                </h2>
                <h1 className="font-serif lg:text-2xl font-bold text-white my-5">
                  {project.title}
                </h1>

                <a
                  href={project.link}
                  className="bg-white hover:bg-white/80 text-emerald-500 text-xl px-4 py-2 mt-5 rounded-lg transition"
                >
                  See More                </a>
              </div>

              {/* Placeholder Image Box */}
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

export default VisualRepresentation;
