import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          borderTop: "1px solid black",
          marginBottom: "0",
          padding: "1rem",
        }}
      >
        <div className="block md:flex md:justify-evenly">
          <p>put something here?</p>
          <div className="mb-4">
            <h5>
              © {new Date().getFullYear()} Kasey Banks Professional Portfolio
            </h5>
          </div>
          <div className="flex justify-center mb-4">
            <p>put something here?</p>
          </div>
        </div>
      </div>
      {/* <p>
        Built by
        {` `}
        <a href="https://mattbanksdev.com/" target="_blank">
          M.Banks Development LLC
        </a>
      </p> */}
    </div>
  );
};

export default Footer;
