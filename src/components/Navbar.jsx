import { FaLinkedin, FaGithub, FaTwitter, FaHome } from "react-icons/fa"; // Make sure the icon names are correct
import { SiLeetcode } from "react-icons/si";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 z-50 relative">
      <div className="flex flex-shrink-0 items-center text-2xl m-5">
        <a href="#">
          <FaHome />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/geeteshy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/geeteshydv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/geeteshyadav/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://twitter.com/GeeteshYadav20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
