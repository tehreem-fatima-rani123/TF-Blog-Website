"use client";
import Link from "next/link";
import { Init } from "node:v8";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";


const Navbar = () => {
  const [currentDateTime, steCurrenttDateTime] = useState(``);
  useEffect(() => {
    const updateDateime = () => {
      const now = new Date();
      const optins: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      steCurrenttDateTime(
        now.toLocaleDateString(`en-US`, optins) +
          "" +
          now.toLocaleTimeString(`en-US`, { hour12: false })
      );
    };
    updateDateime();
    const interValId = setInterval(updateDateime, 1000);
    return () => clearInterval(interValId);
  }, []);

  return (
    <header className=" sm:h-18 bg-[#3d7194] items-center lg:pt-1.5 fixed top-0 left-0 w-full z-10  text-white lg:h-20 bod-font shadow-lg">
      <div className="container mx-auto flex  flex-wrap p-2 flex-col md:flex-row items-center ">
        <div className="flex-1 sm:text-black md:text-white lg:text-white">
          <span>{currentDateTime}</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-white justify-center">
          <Link
            href={"http://localhost:3000/"}
            className="mr-5 hover:text-[#5B99C2]  transition-colors text-white duration-300 transform hover:scale-105 "
          >{""}
            Home{""}
          </Link>
          <Link
            href="#About-page"
            className="mr-5 hover:text-[#5B99C2]  text-white transition-colors duration-300 transform hover:scale-105 "
          >{""}
          About{""}
          </Link>
          <Link
            href='#mega-page'
            className="mr-5 hover:text-[#5B99C2] text-white  transition-colors duration-300 transform hover:scale-105 "
               >{""}
           Blog{""}
          </Link>
          <Link
            href={"#contact"}
            className="mr-5 hover:text-[#5B99C2] text-white  transition-colors duration-300 transform hover:scale-105 "
          >{""}
            Contact{""}
          </Link>
        </nav>
        <Link href="https://github.com/tehreem-fatima-rani123">
        <button className=" font-bold inline-flex  items-center bg-[#162c3a] border-0 py-1 px-3 gap-2 focus:outline-none hover:bg-slate-500 rounded text-white mt-4 md:mt-0 transition-colors duration-300  ">
Github
<FaArrowRight />



        </button>
        </Link>
    
      </div>
    </header>
  );
};

export default Navbar;
