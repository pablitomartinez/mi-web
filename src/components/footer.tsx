// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg md:text-xl text-gray-400 mb-6">Hey Folks 🔥</p>
        <p className="text-md md:text-lg text-gray-400 mb-6">
          I hope you enjoy my portfolio as much as I enjoyed creating it. Feel
          free to show your ❤️
        </p>
        <p className="text-md md:text-lg text-gray-400">
          I am available for new opportunities, drop your business inquiry to:
          <a href="mailto:altiorasoftware@gmail.com" className="text-blue-500">
            {" "}
            altiorasoftware@gmail.com
          </a>
        </p>
        <div className="mt-8">
          <p className="text-gray-400">Developed by Pablo</p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Altiora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
