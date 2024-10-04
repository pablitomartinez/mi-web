// pages/aboutMe.tsx

const AboutMe = () => {
  return (
    <>
      <section className="bg-black text-white py-20 px-6 md:px-20">
        <div className="container mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-orange-600">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-6">
            I'm a passionate{" "}
            <span className="text-white font-bold">Graphic Designer</span> with
            a love for clean and modern designs. My journey began several years
            ago, and since then, I've worked on a variety of projects, from
            logos to full-fledged branding for companies across the globe.
            Creativity drives me, and I strive to push the boundaries of design
            with every project I take on.
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-6">
            My skills span across a wide range of design software including
            Adobe Photoshop, Illustrator, and InDesign. I am constantly learning
            new techniques and technologies to stay updated in the ever-evolving
            world of design. Collaboration and communication are key in every
            project I work on.
          </p>
          <p className="text-lg md:text-xl text-gray-400">
            Feel free to reach out if you'd like to work together on your next
            design project!
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;