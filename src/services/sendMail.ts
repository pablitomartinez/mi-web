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

// Función para enviar los datos del formulario al backend
export const sendContactForm = async (data: ContactFormData) => {
  return fetch("/api/sendMail", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
