import { PROJECTS } from "../assets/index";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Make sure the icon names are correct
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
const Project = () => {
  return (
    <>
      <div className="pb-8 border-b  text-neutral-900">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-center my-20 text-neutral-300"
        >
          Projects
        </motion.h1>
        <div className="">
          {PROJECTS.map((cur, index) => (
            <>
              <div className="m-8 flex flex-wrap lg:justify-center">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full lg:w-1/4"
                >
                  <a href="https://hungry-nites.vercel.app/" target="_blank">
                    <motion.img
                      variants={container(0)}
                      initial="hidden"
                      animate="visible"
                      src={cur.img}
                      alt=""
                      key={index}
                      className="w-[320px] h-[230px] mb-6 rounded-md relative"
                    />
                  </a>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="lg:ml-10 text-neutral-400 w-full max-w-xl lg:w-3/4"
                >
                  <motion.div
                    variants={container2(0)}
                    initial="hidden"
                    animate="visible"
                  >
                    <h6 className="mb-6 font-semibold text-2xl">{cur.title}</h6>
                    <p className="mb-6 text-neutral-400">{cur.description}</p>
                    <div className="flex flex-wrap">
                      {cur.technologies.map((tech, index) => (
                        <div
                          className="text-sm mr-2 my-3 rounded-md bg-neutral-900 px-2 py-1 font-medium text-purple-800"
                          key={index}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                    <div className="flex relative ">
                      <a
                        href="https://github.com/geeteshydv/hungry-nites"
                        className="text-2xl m-2 p-2"
                        target="_blank"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://hungry-nites.vercel.app/"
                        className="text-2xl m-2 p-2"
                        target="_blank"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
