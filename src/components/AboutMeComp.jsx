import foto from '../assets/img/me.gif';
import cvPdf from '../assets/pdf/cv.pdf';

function AboutMeComp() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 p-8 md:p-16 max-w-6xl mx-auto bg-white">
            {/* Contenedor de la imagen con borde degradado */}
            <div className="relative shrink-0">
                <img 
                    src={foto} 
                    alt="Foto de mí" 
                    className="relative w-90 h-90 md:w-80 md:h-80 object-cover"
                />
            </div>
            
            {/* Contenedor de los textos */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5">
                <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8F87F1] to-[#E9A5F1]" style={{marginTop: "20px"}}>
                    Sobre mí
                </h2>
                
                <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl" style={{marginTop: "20px"}}>
                    Soy Ingeniera de Sistemas por profesión y entusiasta del aprendizaje por naturaleza. Mi enfoque se centra en transformar ideas complejas en soluciones de software funcionales y escalables. Me apasiona programar, pero sobre todo, disfruto el proceso de entender cómo funcionan las cosas.
                </p>
                <br />
                <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
                    Asimismo, me he capacitado en soporte técnico, redes y diseño gráfico, obteniendo certificaciones en estas áreas.
                </p>
                
                {/* Botón de descarga con estilo */}
                <a 
                    href={cvPdf} 
                    download="cv.pdf"
                    className="inline-flex items-center gap-2 mt-4 rounded-full text-white font-semibold text-lg bg-gradient-to-r from-[#8F87F1] to-[#E9A5F1] hover:opacity-90 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-[0_4px_20px_0_rgba(143,135,241,0.39)]"
                    style={{ padding: "12px 40px", marginTop: "20px" }}
                >
                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Descargar CV
                </a>
            </div>
        </section>
    )
}

export default AboutMeComp
