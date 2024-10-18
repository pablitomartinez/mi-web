import { NextRequest, NextResponse } from "next/server";
import { transporter, mailOption } from "../../../config/nodemailer"; // Importamos la configuración de Nodemailer

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  services: {
    modelado: boolean;
    impresion: boolean;
    diseno: boolean;
    otros: boolean;
  };
}

// Manejo de solicitudes POST
export async function POST(request: NextRequest) {
  try {
    // Leer los datos enviados por el formulario
    const body: ContactFormData = await request.json();

    console.log("Datos recibidos desde el formulario:", body);

    // Crear el contenido del correo
    const mailOptionsWithDetails = {
      ...mailOption, // Tomamos las opciones base de Nodemailer
      subject: `Nuevo mensaje de contacto de ${body.name}`, // Asunto del correo
      text: `
        Nombre: ${body.name}
        Email: ${body.email}
        Teléfono: ${body.phone}
        Mensaje: ${body.message}
        Servicios: 
        - Modelado 3D: ${body.services.modelado}
        - Impresión 3D: ${body.services.impresion}
        - Diseño: ${body.services.diseno}
        - Otros: ${body.services.otros}
      `, // Cuerpo del correo
    };

    // Enviar el correo usando Nodemailer
    await transporter.sendMail(mailOptionsWithDetails);

    return NextResponse.json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error al procesar el formulario:", error);
    return NextResponse.json(
      { message: "Hubo un error procesando la solicitud" },
      { status: 500 }
    );
  }
}
