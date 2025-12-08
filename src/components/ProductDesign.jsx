import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const uxProjects = [
  {
    subtitle: "Qatar University Redesign · UX Project",
    features: ["📄 UX research", "🖌️ Wireframes", "📐 Interface improvements"],
    link: "/documents/QU_UX_CaseStudy.pdf",
    image: "/images/qataruniversity.png", 
  },
  {
    subtitle: "QRidey Platform – Car Rental App · UX + UI + Flows",
    features: ["📄 User flows", "🖌️ Wireframes", "🔍 UI exploration"],
    link: "https://www.notion.so/Capstone-Project-April-1d321b48ea56806f89eaed9873194986",
    image: "/images/rideqatar.png",
  },
  {
    subtitle: "PayLater UX Flow Visualisation · Workflows + Annotated Screens",
    features: ["📄 Workflow diagrams", "🖌️ Annotated screens", "🔍 UX insights"],
    link: "/documents/PayLater_Case_Study_UX.pdf",
    image: "/images/paylater.jpg",
  },
];

function ProductDesign({ id }) {
  return (
    <div id={id} className="mt-30 px-4 md:px-0">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-serif lg:text-xl text-emerald-300">
          PRODUCT DESIGN & UX CASE STUDIES
        </h1>
        {/* <h1 className="font-serif lg:text-4xl font-bold text-white my-5">
          Made By Me
        </h1> */}
        <p className="lg:text-xl text-white/50 m-auto p-3 font-serif rounded-lg justify-center text-center lg:w-1/2">
          Explore the journey from concept to compelling interfaces.
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
        {uxProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row justify-between items-center p-5 md:p-10 m-auto rounded-3xl bg-slate-950 w-full md:w-5/6 shadow-3xl transition-transform duration-300 hover:scale-105">
              <div className="max-w-md flex flex-col justify-center items-center text-center">
                <h2 className="font-serif lg:text-xl font-bold text-emerald-300">
                  {project.subtitle}
                </h2>
                <h1 className="font-serif lg:text-2xl font-bold text-white my-5">
                  {project.title}
                </h1>

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
                  View Work                </a>
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

export default ProductDesign;
