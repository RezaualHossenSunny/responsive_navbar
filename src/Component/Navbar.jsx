import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="bg-slate-800">
        <ul className="flex justify-center gap-16 text-white py-6 font-serif items-center text-lg">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Skill</a>
          </li>
          <li>
            <a href="#">Contacet</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
