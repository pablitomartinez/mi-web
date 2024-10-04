import Image from "next/image";
import React from "react";

const FormularioContacto = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-90"
      style={{
        backgroundImage: "url('/lampara3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg max-w-4xl w-full p-10 flex">
        {/* Lado izquierdo con imagen o espacio para lámparas */}
        <div className="w-1/2 hidden md:block">
          {/* Aquí puedes agregar una imagen decorativa o dejar el espacio */}
          <Image 
            src="/lampara2.png"
            width={300}
            height={300}
            alt="imagendelampara"
          />
        </div>
        {/* Lado derecho del formulario */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-green-500 mb-4">
            ¡Contáctame!
          </h2>
          <p className="mb-4 text-gray-700">
            Podés comunicarte conmigo en cualquier momento.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700">Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre completo"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Email</label>
              <input
                type="email"
                placeholder="tuemail@ejemplo.com"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Teléfono</label>
              <input
                type="tel"
                placeholder="+54 9 388 000 000"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">
                ¿Cómo te puedo ayudar?
              </label>
              <textarea
                placeholder="Contame sobre tu proyecto..."
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="4"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700">Servicios</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input type="checkbox" id="modelado" />
                  <label
                    htmlFor="modelado"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Modelado 3D
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="impresion" />
                  <label
                    htmlFor="impresion"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Impresión 3D
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="diseno" />
                  <label
                    htmlFor="diseno"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Diseño
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="otros" />
                  <label htmlFor="otros" className="ml-2 text-sm text-gray-700">
                    Otros
                  </label>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
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
