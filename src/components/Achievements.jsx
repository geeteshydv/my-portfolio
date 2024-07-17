import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <div className="border-b border-neutral-900 pb-14">
      <motion.h1
        className="text-4xl my-20 text-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Achievements
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center lg:justify-start my-2 px-6  text-neutral-400 lg:pl-28"
      >
        <ul className="marker:text-green list-outside list-disc ml-6 relative">
          <li className="m-3">
            Ranked <span className="text-green-500">Pupil</span> at CodeForces
            and <span className="text-blue-600">3-Star</span> at CodeChef
          </li>
          <li className="m-3">
            Secured all India rank of{" "}
            <a
              href="https://www.codechef.com/rankings/START64C?itemsPerPage=100&order=asc&page=4&sortBy=rank"
              target="_blank"
            >
              376
            </a>
            ,{" "}
            <a
              href="https://www.codechef.com/rankings/START59C?itemsPerPage=100&order=asc&page=5&sortBy=rank"
              target="_blank"
            >
              401
            </a>{" "}
            respectively in Codechef’s Starters Contest in the month of November
            and October 2022 among 3k+ participants.
          </li>
          <li className="m-3">
            Secured Global rank of{" "}
            <a
              href="https://drive.google.com/file/d/1YSMWxD1NmwedVHN8nMLbzIfHyBOVNdRB/view"
              target="_blank"
            >
              1837 (AIR-1307), 3257 (AIR-2533)
            </a>{" "}
            respectively in Google KickStart Round H and Round G among 10k+
            participants in 2022.
          </li>
          <li className="m-3">
            Ranked 1769 globally in Codeforces Round 835 among 21k+
            participants.
          </li>
          <li className="m-3">
            Awarded Annual Badge at Leetcode which is given to only 0.2%
            worldwide.
          </li>
          <li className="m-3">
            Solved 600+ DSA Problems combined at Leetcode, GeeksForGeeks,
            Codechef and Codeforces.
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Achievements;
