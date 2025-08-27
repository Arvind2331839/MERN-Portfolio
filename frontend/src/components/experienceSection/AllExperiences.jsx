import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "UI/UX Designer",
    company: "Freelance Projects",
    date: "2024 - Present",
    responsibilities: [
      "Designed intuitive and engaging user interfaces for web and mobile applications.",
      "Created wireframes, prototypes, and high-fidelity mockups using Figma and Adobe XD.",
      // "Collaborated with developers to ensure design consistency and pixel-perfect implementation.",
      // "Focused on enhancing user experience through research-driven design decisions.",
    ],
  },
  {
    job: "Frontend Developer",
    company: "Technorizen Software Solution Private Limited",
    date: "2023 - Present",
    responsibilities: [
      "Built dynamic and responsive web interfaces using React.js and Tailwind CSS.",
      "Developed reusable components and implemented state management using Redux and Context API.",
      // "Optimized front-end performance and ensured cross-browser compatibility.",
      // "Integrated APIs and improved UX with interactive UI features.",
    ],
  },
  {
    job: "Backend Developer",
    company: "Technorizen Software Solution Private Limited",
    date: "2023 - Present",
    responsibilities: [
      "Developed scalable RESTful APIs using Node.js and Express.js.",
      "Implemented authentication, authorization, and data validation using JWT and middleware.",
      // "Managed data models and queries with MongoDB and Mongoose.",
      // "Integrated third-party services and handled backend logic for real-world applications.",
    ],
  },
];


const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
