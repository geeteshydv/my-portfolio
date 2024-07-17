import { EXPERIENCES } from "../assets/index";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const container2 = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Experience = () => {
  return (
    <div>
      <div className="border-b border-neutral-900  pb-4 ml-2">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl my-20"
        >
          Experience
        </motion.h1>
        {EXPERIENCES.map((cur, index) => (
          <>
            <div className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-2xl w-full lg:w-1/4"
                key={index}
              >
                <motion.p
                  variants={container(0)}
                  initial="hidden"
                  animate="visible"
                  className="mb-2 text-sm text-neutral-300"
                >
                  {cur.year}
                </motion.p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full  max-w-xl lg:w-3/4"
              >
                <motion.div
                  variants={container2(0)}
                  initial="hidden"
                  animate="visible"
                >
                  <h6>
                    {cur.role} -{" "}
                    <span className="text-sm text-purple-400">
                      {cur.company}
                    </span>
                  </h6>
                  <p className="text-sm text-neutral-400 py-3">
                    {cur.description}
                  </p>
                  {cur.technologies.map((tech, index) => (
                    <span
                      className="text-sm mr-2 mt-3 rounded-md bg-neutral-900 px-2 py-1 font-medium text-purple-800"
                      key={index}
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Experience;
