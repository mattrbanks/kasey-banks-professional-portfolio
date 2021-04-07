import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-white fixed top-0 left-0 text-white border-b border-red-700 flex z-50">
      <div className="text-black mx-5 my-5 text-2xl w-1/2">
        Kasey Banks Professional Portfolio
      </div>
      <div className="flex justify-end w-1/2">
        <div className="text-black flex justify-around w-1/2 mx-5 my-6">
          <Link to="/">Home</Link>
          <a href="#">Resume</a>
          <Link to="/extended-gallery">My Work</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
