import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="bg-slate-800">
        <ul className=" md:flex justify-center gap-16 text-white py-6 font-serif items-center text-lg hidden">
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

      <div className="bg-slate-800 text-white flex justify-end pr-3 block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-8 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <div className="bg-slate-800">
        <ul className=" flex flex-col justify-center gap-4 text-white py-4 font-serif items-center text-lg block md:hidden">
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
