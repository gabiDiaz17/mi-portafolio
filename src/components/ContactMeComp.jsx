import { useState } from "react";
import { FiSend, FiUser, FiMail, FiMessageSquare, FiFileText } from "react-icons/fi";

function ContactMe() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes conectar con un servicio de email (EmailJS, Formspree, etc.)
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 sm:px-8 flex flex-col items-center justify-center"
      style={{ backgroundColor: "#E9A5F1" }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-sm">
          Contáctame
        </h2>
        <p className="mt-3 text-white/80 text-base max-w-md mx-auto">
          ¿Tienes alguna pregunta o propuesta? ¡Escríbeme y te respondo a la brevedad!
        </p>
      </div>

      {/* Card */}
      <div className="w-full max-w-xl bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-10 border border-white/50">
        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
            <div className="bg-white/50 rounded-full p-5 text-4xl shadow-inner">🎉</div>
            <h3 className="text-2xl font-bold text-white">¡Mensaje enviado!</h3>
            <p className="text-white/80">Gracias por escribirme. Te responderé pronto.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Nombre */}
            <div className="flex flex-col gap-1.5">
              <label className="text-white font-semibold text-sm flex items-center gap-1.5">
                <FiUser size={14} /> Nombre
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                required
                className="w-full rounded-full px-5 py-3 bg-white/60 placeholder-gray-500 text-gray-800 text-sm outline-none border border-white/40 focus:border-purple-400 focus:ring-2 focus:ring-purple-300/50 transition-all duration-200"
              />
            </div>

            {/* Correo */}
            <div className="flex flex-col gap-1.5">
              <label className="text-white font-semibold text-sm flex items-center gap-1.5">
                <FiMail size={14} /> Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tucorreo@ejemplo.com"
                required
                className="w-full rounded-full px-5 py-3 bg-white/60 placeholder-gray-500 text-gray-800 text-sm outline-none border border-white/40 focus:border-purple-400 focus:ring-2 focus:ring-purple-300/50 transition-all duration-200"
              />
            </div>

            {/* Asunto */}
            <div className="flex flex-col gap-1.5">
              <label className="text-white font-semibold text-sm flex items-center gap-1.5">
                <FiFileText size={14} /> Asunto
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="¿De qué se trata?"
                required
                className="w-full rounded-full px-5 py-3 bg-white/60 placeholder-gray-500 text-gray-800 text-sm outline-none border border-white/40 focus:border-purple-400 focus:ring-2 focus:ring-purple-300/50 transition-all duration-200"
              />
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-1.5">
              <label className="text-white font-semibold text-sm flex items-center gap-1.5">
                <FiMessageSquare size={14} /> Mensaje
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
                required
                rows={5}
                className="w-full rounded-2xl px-5 py-3 bg-white/60 placeholder-gray-500 text-gray-800 text-sm outline-none border border-white/40 focus:border-purple-400 focus:ring-2 focus:ring-purple-300/50 transition-all duration-200 resize-none"
              />
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="mt-2 w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 active:scale-95 text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-200"
            >
              <FiSend size={16} />
              Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactMe;
