import React from "react";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="lg:hidden flex flex-col items-center w-full h-fit bg-gradient-to-b from-gray-800 to-black p-4 text-white  border-t-4 border-gray-400">
      <div className="container pt-9">
        <div className="mb-5 ml-7 flex justify-center items-center">
          <a href="https://github.com/manishsahanidev" className="mr-9 hover:scale-125 ">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/manishsahanidev" className="mr-9 hover:scale-125 ">
            <FaLinkedinIn size={20} />
          </a>
          <a href="mailto:manishsahani7045@gmail.com" className="mr-9 hover:scale-125 ">
            <HiOutlineMail size={20} />
          </a>
        </div>
      </div>
      <div className="w-full p-4 text-center text-xl bg-opacity-2">
        © 2024 Copyright: Manish
      </div>
    </footer>
  );
};

export default Footer;
