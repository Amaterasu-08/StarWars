import React from "react";
import planet from "../assets/images/Designer.png";

const Navbar: React.FC = () => {
  return (
    <nav className="flex  flex-row justify-evenly">
      <div className=" ">
        <a href="/">
          <img
            src={planet}
            height={100}
            width={100}
            className="rounded-full mx-4 mt-1"
          />
        </a>
      </div>
      <div className="flex items-center ">
        <h2 className=" glass text-4xl font-bold font-sans text-cyan-700	bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-100	">
          Visit the Planets.
        </h2>
      </div>
    </nav>
  );
};

export default Navbar;
