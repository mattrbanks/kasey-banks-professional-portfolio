import React from "react";
import ImageReusable from "./imageReusable";
import kaseylogo from "../images/kasey-portfolio-logo.svg";
import kaseymobilemenu from "../images/kaseymobilemenuWhSm.svg";
import { Link } from "gatsby";
import "./styles.css";
import resume from "../../resume/kasey-resume-2021-edit.pdf";

const Header = () => {
  const [openMenuMobile, setOpenMenuMobile] = React.useState(false);

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="absolute z-20 inset-y-0 h-10 top-8 right-1 flex items-center lg:hidden">
            <button
              onClick={() => {
                setOpenMenuMobile(!openMenuMobile);
                if (openMenuMobile === true) {
                  const modal = document.getElementById("mobile-menu-id");
                  modal.classList.remove("animate-opacity");
                  modal.classList.add("animate-opacity-close");
                  setTimeout(function () {
                    modal.style.display = "none";
                  }, 700);
                } else {
                  const modal = document.getElementById("mobile-menu-id");
                  modal.classList.remove("animate-opacity-close");
                  modal.classList.add("animate-opacity");
                  modal.style.display = "flex";
                }
              }}
              className="focus:outline-none outline-none z-20 inline-flex items-center justify-center p-2 rounded-md text-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <img
                className="w-16 mx-3 my-2"
                alt="mb logo"
                src={kaseymobilemenu}
              />

              {/* <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg> */}

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center sm:items-stretch">
            <Link to="/">
              <img className="w-20 mx-3 my-2" alt="mb logo" src={kaseylogo} />
            </Link>

            <div className="text-white mx-5 my-7 md:text-3xl lg:text-4xl w-1/2 cursive-font">
              Kasey Banks Professional Portfolio
            </div>

            <div className="absolute right-0 z-10 hidden lg:block lg:ml-6 mt-5 mr-4">
              <div className="flex space-x-4 bg-gray-900">
                <Link
                  to="/"
                  className="text-black rounded-full border bg-pink-700 hover:bg-gray-700 hover:text-white px-6 py-4 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <a
                  href={resume}
                  without
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-black rounded-full border bg-pink-700 hover:bg-gray-700 hover:text-white px-4 py-4 rounded-md text-sm font-medium"
                >
                  Resume
                </a>
                <Link
                  to="/extended-gallery"
                  className="text-black rounded-full border bg-pink-700 hover:bg-gray-700 hover:text-white px-3 py-4 rounded-md text-sm font-medium"
                >
                  My Work
                </Link>
                <Link
                  to="/contact"
                  className="text-black rounded-full border bg-pink-700 hover:bg-gray-700 hover:text-white px-4 py-4 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openMenuMobile ? (
        <div
          id="mobile-menu-id"
          className="animate-opacity bg-gray-900 absolute top-0 left-0 z-10 w-full h-screen overflow-hidden flex justify-center items-center cursive-font"
        >
          <div className="relative px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-2xl text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <a
              href={resume}
              without
              rel="noopener noreferrer"
              target="_blank"
              className="text-2xl text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Resume
            </a>
            <Link
              to="/extended-gallery"
              className="text-2xl text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              My Work
            </Link>
            <Link
              to="/contact"
              className="text-2xl text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      ) : (
        <div
          id="mobile-menu-id"
          className="animate-opacity-close hidden bg-gray-900 absolute top-0 left-0 z-10 w-full h-screen overflow-hidden flex justify-center items-center cursive-font"
        >
          <div className="relative px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-2xl text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <a
              href={resume}
              without
              rel="noopener noreferrer"
              target="_blank"
              className="text-2xl text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Resume
            </a>
            <Link
              to="/extended-gallery"
              className="text-2xl text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              My Work
            </Link>
            <Link
              to="/contact"
              className="text-2xl text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
