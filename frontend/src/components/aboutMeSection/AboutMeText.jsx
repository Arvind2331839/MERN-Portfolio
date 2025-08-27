import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-lg">
        Hi, I'm Arvind Kumar – a passionate Full Stack MERN Developer and
        freelancer with a strong focus on building real-world, scalable web
        applications. I specialize in React.js for front-end development and
        Node.js with Express.js for the backend, along with MongoDB for database
        management. With a hands-on approach to development, I bring ideas to
        life by creating responsive, user-friendly, and performance-optimized
        applications. As a freelancer, I work with clients to develop custom web
        solutions tailored to their needs—ranging from business websites to
        full-fledged platforms. I thrive on continuous learning, exploring
        modern web technologies, and refining my skills through real-world
        projects. I also believe in sharing knowledge, collaborating with other
        developers, and helping others grow in their tech journey.<br/> Let’s build
        something great together!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
