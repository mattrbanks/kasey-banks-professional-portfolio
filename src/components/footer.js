import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="text-center border-t border-solid border-black mb-0 px-4 pt-4">
        <div className="block md:flex md:justify-evenly">
          <div className="mb-4">
            <h5>{new Date().getFullYear()} Kasey Banks Portfolio</h5>
          </div>
          <p className="border-r border-black border-solid"></p>
          <p>kaseyebanks@gmail.com</p>
        </div>
        <div className="mt-4 text-sm">
          <p>
            Built by:
            {` `}
            <a
              className="text-blue-800 underline"
              href="https://mattbanksdev.com/"
              target="_blank"
            >
              M.Banks Development LLC
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
