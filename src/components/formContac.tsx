"use client";
import Image from "next/image";
import React, { useState } from "react"; // Importamos useState
import { sendContactForm } from "../services/sendMail";

const FormularioContacto = () => {
  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "", // Asegurate de que message esté inicializado
    services: {
      modelado: false,
      impresion: false,
      diseno: false,
      otros: false,
    },
  });

  // Manejar el cambio en los inputs del formulario
  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value, type, checked } = e.target;
  //   if (type === "checkbox") {
  //     setFormData((prev) => ({
  //       ...prev,
  //       services: { ...prev.services, [name]: checked },
  //     }));
  //   } else {
  //     setFormData((prev) => ({ ...prev, [name]: value }));
  //   }
  // };

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value, type } = e.target as HTMLInputElement;

  //   if (type === "checkbox") {
  //     const checked = (e.target as HTMLInputElement).checked; // Aseguramos que `checked` proviene de un input
  //     setFormData((prev) => ({
  //       ...prev,
  //       services: { ...prev.services, [name]: checked },
  //     }));
  //   } else {
  //     setFormData((prev) => ({ ...prev, [name]: value }));
  //   }
  // };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        services: { ...prev.services, [name]: checked },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value, // Aquí actualizamos el valor en el estado
      }));
    }
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevenimos la recarga de la página
    try {
      await sendContactForm(formData); // Llamamos a la función para enviar el formulario
      alert("Mensaje enviado correctamente");
    } catch (error) {
      console.error(error);
      alert("Hubo un error al enviar el mensaje");
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-primary bg-opacity-90"
      style={{
        backgroundImage: "url('/lampara3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-background bg-opacity-80 rounded-4xl shadow-custom-dark max-w-4xl w-full p-10 flex">
        {/* Lado izquierdo con imagen o espacio para lámparas */}
        <div className="w-1/2 hidden md:block">
          <Image
            src="/lampara2.png"
            width={300}
            height={300}
            alt="imagendelampara"
          />
        </div>
        {/* Lado derecho del formulario */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-heading font-bold text-accent mb-4">
            ¡Contáctame!
          </h2>
          <p className="mb-4 text-text">
            Podés comunicarte conmigo en cualquier momento.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-text">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block text-sm text-text">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tuemail@ejemplo.com"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block text-sm text-text">Teléfono</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+54 9 388 000 000"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block text-sm text-text">
                ¿Cómo te puedo ayudar?
              </label>
              <textarea
                name="message" // Asegurate de que el nombre coincide con el estado
                value={formData.message}
                onChange={handleChange} // Usamos el mismo handleChange
                placeholder="Contame sobre tu proyecto..."
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm text-text">Servicios</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="checkbox"
                    id="modelado"
                    name="modelado"
                    checked={formData.services.modelado}
                    onChange={handleChange}
                  />
                  <label htmlFor="modelado" className="ml-2 text-sm text-text">
                    Modelado 3D
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="impresion"
                    name="impresion"
                    checked={formData.services.impresion}
                    onChange={handleChange}
                  />
                  <label htmlFor="impresion" className="ml-2 text-sm text-text">
                    Impresión 3D
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="diseno"
                    name="diseno"
                    checked={formData.services.diseno}
                    onChange={handleChange}
                  />
                  <label htmlFor="diseno" className="ml-2 text-sm text-text">
                    Diseño
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="otros"
                    name="otros"
                    checked={formData.services.otros}
                    onChange={handleChange}
                  />
                  <label htmlFor="otros" className="ml-2 text-sm text-text">
                    Otros
                  </label>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-accent text-background py-2 px-4 rounded-md hover:bg-secondary transition duration-300"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormularioContacto;
