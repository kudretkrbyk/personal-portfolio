import { useState } from "react";
import LazyImage from "./LazyImage";
import { useGetProjectsQuery } from "../services/projectApi";

const API_URL = import.meta.env.VITE_IMG_URL;
export default function Portfolio() {
  const { data: projects = [], isLoading, isError } = useGetProjectsQuery();

  const [activeFilter, setActiveFilter] = useState("Frontend");

  const filters = ["Tümü", "Frontend", "Fullstack", "Wordpress"];

  const filteredProjects =
    activeFilter === "Tümü"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <section id="portfolio" className="bg-dark py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Örnek <span className="heading-gradient">Projelerim</span>
          </h2>
          <p className="text-body-color max-w-2xl mx-auto">
            Geliştirdiğim bazı özel projeler ve çalışmalar
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full border border-border-color transition-all duration-300
                ${
                  activeFilter === filter
                    ? "bg-primary  text-white"
                    : "text-body-color hover:text-white"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="card group overflow-hidden">
              <div className="relative overflow-hidden rounded-lg">
                <LazyImage
                  src={`${API_URL}${project.image}`}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Dinamik Linkleme */}
                  {project.category === "Wordpress" ? (
                    <a
                      href={project.liveview}
                      target="_blank"
                      className="text-white text-lg font-semibold hover:underline hover:cursor-pointer"
                    >
                      Canlı Görünüm
                    </a>
                  ) : (
                    <>
                      <a
                        href={project.liveview} // Canlı görünüm için link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-lg font-semibold hover:underline hover:cursor-pointer mb-2"
                      >
                        Canlı Görünüm
                      </a>
                      <a
                        href={project.github} // Kaynak kodları için link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-lg font-semibold hover:underline hover:cursor-pointer"
                      >
                        Kaynak Kodları
                      </a>
                    </>
                  )}
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-body-color">{project.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
