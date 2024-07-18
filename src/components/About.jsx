import my_image from "../../images/myimg2.jpg";
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
const About = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-14">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          About Me
        </motion.h1>
        <div className="flex flex-wrap">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full  lg:w-1/2 lg:pl-40"
          >
            <motion.img
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="w-[350px] h-[400px] pl-9 mb-6"
              src={my_image}
              alt=""
            />
          </motion.div>
          <motion.div
            variants={container2(0)}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center lg:justify-start my-2 px-6 lg:pl-0 text-neutral-400 "
            >
              <p className="mb-4">
                ✅ I'm Geetesh Yadav, a passionate web developer and software
                engineer specializing in full stack development and data
                structures & algorithms. With a strong foundation in C++,
                JavaScript, ReactJS, and NodeJS, I enjoy creating efficient and
                innovative solutions.
              </p>
              <p className="mb-4">
                ✅ I have completed my B.Tech in IT from KIET Group of
                Institutions, Ghaziabad, with an SGPA of 7.65 till the 7th
                semester. I completed my 12th grade at KCM School, Moradabad,
                scoring 91.2%, and 10th grade with 85.6%.
              </p>
              <p className="mb-4">
                ✅ I have experience working with MongoDB for backend
                development and am familiar with tools like VSCode, Github, and
                Sublime Text. As a Teaching Assistant at Coding Ninjas, I help
                students with Data Structures and Algorithms in C++/Java.
              </p>
              <p className="mb-4">
                ✅ Explore my projects and let's connect to build something
                amazing together. You can reach me at{" "}
                <a
                  href="mailto:geeteshyadav12@gmail.com"
                  className="text-blue-500"
                >
                  geeteshyadav12@gmail.com
                </a>{" "}
                or call me at 9528320885.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
