// components/Footer.tsx
const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className="bg-primary text-text py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg md:text-xl text-accent mb-6 font-heading">
          Hey Folks 🔥
        </p>
        <p className="text-md md:text-lg text-text mb-6 font-sans">
          I hope you enjoy my portfolio as much as I enjoyed creating it. Feel
          free to show your ❤️
        </p>
        <p className="text-md md:text-lg text-text font-sans">
          I am available for new opportunities, drop your business inquiry to:
          <a
            href="mailto:altiorasoftware@gmail.com"
            className="text-secondary underline"
          >
=======
    <footer className="bg-primary text-background py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg md:text-xl text-text mb-6">Hey Folks 🔥</p>
        <p className="text-md md:text-lg text-text mb-6">
          I hope you enjoy my portfolio as much as I enjoyed creating it. Feel
          free to show your ❤️
        </p>
        <p className="text-md md:text-lg text-text">
          I am available for new opportunities, drop your business inquiry to:
          <a href="mailto:altiorasoftware@gmail.com" className="text-secondary">
>>>>>>> 28668fb (feat: implementar configuración global de TailwindCSS y aplicar estilos consistentes en todos los componentes)
            {" "}
            altiorasoftware@gmail.com
          </a>
        </p>
        <div className="mt-8">
<<<<<<< HEAD
          <p className="text-text font-sans">Developed by Pablo</p>
          <p className="text-sm text-gray-500 font-sans">
=======
          <p className="text-text">Developed by Pablo</p>
          <p className="text-sm text-gray-500">
>>>>>>> 28668fb (feat: implementar configuración global de TailwindCSS y aplicar estilos consistentes en todos los componentes)
            © {new Date().getFullYear()} Altiora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
