// components/Contact.tsx

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <p className="text-lg text-gray-600 mb-4">
          If you have any questions or want to collaborate, feel free to reach
          out.
        </p>
        <a
          href="mailto:altiorasoftware@gmail.com"
          className="text-blue-500 text-lg"
        >
          altiorasoftware@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
