import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Jayesh Patil
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/pjayesh504/" target="_blank">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/pjayesh504" target="_blank">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://twitter.com/pjayesh504" target="_blank">
            <img style={{filter: 'invert(100%)'}} src="/twitter.png" alt="" />
          </a>
          <a href="https://www.instagram.com/jayesh.patil08/" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;