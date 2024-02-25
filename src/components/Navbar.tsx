import React from "react";
import planet from "../assets/images/Designer.png";

const Navbar: React.FC = () => {
  return (
    <nav className="max-container bg-slate-800 ">
      <div className="flex justify-center items-center ">
        <img
          src={planet}
          height={100}
          width={100}
          className="rounded-full mx-4 mt-1"
        />
      </div>
    </nav>
  );
};

export default Navbar;
