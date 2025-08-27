import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "mrbikedoctors",
    year: "March 2024",
    align: "right",
    image: "https://www.mrbikedoctors.com/assets/img/logo.png",
    link: "https://www.mrbikedoctors.com/",
    description:"Mr. Bike Dr is a location-based bike repair service platform built with the MERN stack. It allows users to report bike issues, and automatically notifies nearby verified repair shops within a 3 km radius. Shops can accept requests and either repair on-site or at their garage. The system includes real-time notifications, secure authentication, and role-based dashboards for users and shop owners. It simplifies the bike repair process by connecting users with the nearest available mechanic quickly and efficiently."
  },
  {
    name: "Taxi247",
    year: "April 2025",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "#",
    description:"I developed the entire backend for a taxi booking application using Node.js, Express, and MongoDB. The system handles user and driver authentication, ride booking, real-time status updates, fare calculations, and ride history. It includes secure JWT-based authentication, role-based access, and efficient database design for handling bookings, locations, and trip data. The backend is scalable, RESTful, and optimized for performance."
  },
  {
    name: "Homegurus",
    year: "Jan2023",
    align: "right",
    image: "https://homegurus.in/assets/Logo/logo.png",
    link: "https://homegurus.in/",
    description:""
  },
  {
    name: "delywizz",
    year: "Dec 2023",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "https://www.delywizz.com/",
    description:""
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
