import headerPersonaje from '../assets/img/header-personaje.png';
import logo from '../assets/img/logo-gabi.png';
import fondoHeader from '../assets/img/fondo-header.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Header() {
    return (
        <header
            className="w-full font-sans bg-cover bg-center bg-no-repeat overflow-hidden relative"
            style={{ backgroundImage: `url(${fondoHeader})` }}
        >
            {/* Overlay to ensure text readability if needed (optional, keeping minimal for now) */}
            <div className="absolute inset-0 bg-white/40 z-0"></div>

            {/* Top Navigation */}
            <nav className="relative flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-[#E9A5F1]/90 backdrop-blur-sm shadow-md md:rounded-b-3xl text-white z-10">
                <div className="flex-shrink-0">
                    <img src={logo} alt="logo" className="w-16 drop-shadow-md" />
                </div>
                <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-8 font-semibold text-lg">
                    <li className="hover:text-[#FED2E2] transition-colors cursor-pointer select-none">Sobre mi</li>
                    <li className="hover:text-[#FED2E2] transition-colors cursor-pointer select-none">Experiencia</li>
                    <li className="hover:text-[#FED2E2] transition-colors cursor-pointer select-none">Proyectos</li>
                    <li className="hover:text-[#FED2E2] transition-colors cursor-pointer select-none">Contáctame</li>
                </ul>
            </nav>

            {/* Hero Section */}
            <section className="relative flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 py-12 md:px-16 md:py-20 max-w-7xl mx-auto z-10">

                {/* Text Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 w-full md:w-1/2">
                    <h2 className="text-xl md:text-2xl font-bold text-[#E9A5F1] tracking-widest uppercase mb-5">
                        Portafolio
                    </h2>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#C68EFD] drop-shadow-sm mb-5">
                        Gabriela Diaz
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-medium mb-8 rounded-full">
                        Ingeniera de Sistemas
                    </p>

                    <div className="flex gap-6">
                        <a href="https://github.com/gabiDiaz17" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-[#E9A5F1] text-[#C68EFD] rounded-full hover:bg-[#C68EFD] text-white transition-all transform hover:scale-110 shadow-m">
                            <FaGithub className="text-3xl" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-[#E9A5F1] text-[#C68EFD] rounded-full hover:bg-[#C68EFD] text-white transition-all transform hover:scale-110 shadow-md">
                            <FaLinkedin className="text-3xl" />
                        </a>
                    </div>
                </div>

                {/* Character Image Content */}
                <div className="relative flex justify-center w-full md:w-1/2 mb-10 md:mb-0 z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FED2E2] to-[#E9A5F1] rounded-full blur-3xl w-60 h-60 md:w-80 md:h-80 mx-auto -z-10 opacity-70"></div>
                    <img
                        src={headerPersonaje}
                        alt="header-personaje"
                        className="w-56 md:w-80 lg:w-96 drop-shadow-xl"
                    />
                </div>
            </section>
        </header>
    )
}

export default Header;