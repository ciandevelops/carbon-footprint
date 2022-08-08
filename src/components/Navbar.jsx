import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="fixed left-0 top-0 w-full z-20">
      <div className="max-w-[1240px] m-auto p-4 flex justify-between items-center">
        <div className="flex">
          <h1 className="text-2xl">[Logo here?]</h1>
          <h1 className="text-2xl text-bold">MyCarbonFootprint</h1>
        </div>

        <div>
          <ul className="hidden sm:flex">
            <li className="p-4">Nav 1</li>
            <li className="p-4">Nav 2</li>
            <li className="p-4">Nav 3</li>
          </ul>
          {/* MOBILE NAV */}
          <div
            onClick={handleNav}
            className="block sm:hidden cursor-pointer z-10"
          >
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <div
            onClick={handleNav}
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300"
            }
          >
            <ul className="">
              <li onClick={handleNav} className="p-4 text-4xl">
                <a href="#">Nav 1</a>
              </li>
              <li onClick={handleNav} className="p-4 text-4xl">
                <a href="#">Nav 2</a>
              </li>
              <li onClick={handleNav} className="p-4 text-4xl">
                <a href="#">Nav 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
