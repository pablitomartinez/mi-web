import nodemailer from "nodemailer";

// Crear el transporte utilizando las variables de entorno
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // tu email
    pass: process.env.EMAIL_PASS, // tu App Password
  },
});

export const mailOption = {
  from: process.env.EMAIL, // tu email
  to: process.env.EMAIL, // o el correo al que querés enviar el mensaje
};
