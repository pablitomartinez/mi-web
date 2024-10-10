import Image from "next/image";
import React from "react";

const FormularioContacto = () => {
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

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-text">Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre completo"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block text-sm text-text">Email</label>
              <input
                type="email"
                placeholder="tuemail@ejemplo.com"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block text-sm text-text">Teléfono</label>
              <input
                type="tel"
                placeholder="+54 9 388 000 000"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block text-sm text-text">
                ¿Cómo te puedo ayudar?
              </label>
              <textarea
                placeholder="Contame sobre tu proyecto..."
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm text-text">Servicios</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input type="checkbox" id="modelado" />
                  <label htmlFor="modelado" className="ml-2 text-sm text-text">
                    Modelado 3D
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="impresion" />
                  <label htmlFor="impresion" className="ml-2 text-sm text-text">
                    Impresión 3D
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="diseno" />
                  <label htmlFor="diseno" className="ml-2 text-sm text-text">
                    Diseño
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="otros" />
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
