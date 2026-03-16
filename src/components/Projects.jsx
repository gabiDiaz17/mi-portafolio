import { useState, useEffect, useCallback } from "react";
import planificacionImg from "../assets/img/planificacion.png";
import tsgImg from "../assets/img/tsg.png";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Sistema de Planificación CORPOELEC",
    description:
      "Aplicación para el registro y control de las actividades de mantenimiento de las subestaciones eléctricas y circuitos del Estado Carabobo.",
    image: planificacionImg,
    tags: ["PHP", "Bootstrap 5", "MySQL"],
    status: "Completado",
    statusColor: "bg-emerald-500",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Sistema para Tecni Servicios Gabori C.A.",
    description:
      "Sistema de gestión empresarial con módulos de reportes, usuarios, clientes, empleados,servicios, facturación, entre otros.",
    image: tsgImg,
    tags: ["PHP", "Bootstrap 5", "MySQL"],
    status: "Completado",
    statusColor: "bg-emerald-500",
    github: "#",
    demo: "#",
  },
  // Placeholder cards so the carousel has at least 3 items to look full
  {
    id: 3,
    title: "Próximamente",
    description: "Un nuevo proyecto está en camino. ¡Mantente atento!",
    image: null,
    tags: ["???"],
    status: "En Desarrollo",
    statusColor: "bg-amber-500",
    github: null,
    demo: null,
  },
];

// How many cards to show at each breakpoint
function getNumVisible() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col h-full bg-white/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-violet-500/20 hover:border-violet-400/40 transition-all duration-300 group mx-4" style={{ margin: "4px" }}>
      {/* Image */}
      <div className="relative w-full h-44 bg-white/10 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl opacity-30">🚀</span>
          </div>
        )}
        {/* Status badge */}
        <span
          className={`absolute top-3 right-3 text-xs font-semibold text-white px-2.5 py-1 rounded-full ${project.statusColor} shadow-md`}
        >
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-white font-bold text-lg leading-snug group-hover:text-gray-500 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-violet-600 text-violet-300 border border-violet-400/30 px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-all duration-200"
            >
              <FiGithub size={14} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-white bg-violet-600 hover:bg-violet-500 px-3 py-1.5 rounded-full transition-all duration-200"
            >
              <FiExternalLink size={14} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [current, setCurrent] = useState(0);
  const [numVisible, setNumVisible] = useState(getNumVisible);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalSlides = Math.ceil(projects.length / numVisible);
  // Clamp current index when numVisible changes
  const clampedCurrent = Math.min(current, totalSlides - 1);

  useEffect(() => {
    if (clampedCurrent !== current) setCurrent(clampedCurrent);
  }, [clampedCurrent, current]);

  useEffect(() => {
    const handleResize = () => setNumVisible(getNumVisible());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goTo = useCallback(
    (index) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 350);
    },
    [isAnimating]
  );

  const prev = () => goTo((clampedCurrent - 1 + totalSlides) % totalSlides);
  const next = () => goTo((clampedCurrent + 1) % totalSlides);

  // Visible slice of projects
  const visibleProjects = projects.slice(
    clampedCurrent * numVisible,
    clampedCurrent * numVisible + numVisible
  );

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-8 bg-[#8F87F1] flex flex-col items-center"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          Mis Proyectos
        </h2>
        <p className="mt-4 text-white/50 text-base max-w-xl mx-auto">
          Una selección de los proyectos que he desarrollado, desde aplicaciones
          web hasta sistemas empresariales.
        </p>
      </div>

      {/* Carousel container */}
      <div className="w-full max-w-5xl relative">
        {/* Cards row */}
        <div
          className="flex transition-all duration-350 ease-in-out"
          style={{ minHeight: "360px" }}
        >
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="flex"
              style={{ width: `${100 / numVisible}%`, flexShrink: 0 }}
            >
              <div className="w-full">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>

        {/* Arrow: Prev */}
        <button
          onClick={prev}
          disabled={totalSlides <= 1}
          aria-label="Anterior"
          className="absolute -left-5 sm:-left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-violet-600/60 hover:border-violet-400/50 text-white flex items-center justify-center shadow-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Arrow: Next */}
        <button
          onClick={next}
          disabled={totalSlides <= 1}
          aria-label="Siguiente"
          className="absolute -right-5 sm:-right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-violet-600/60 hover:border-violet-400/50 text-white flex items-center justify-center shadow-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      {totalSlides > 1 && (
        <div className="flex gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir a diapositiva ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === clampedCurrent
                  ? "w-7 bg-violet-500"
                  : "w-2 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;