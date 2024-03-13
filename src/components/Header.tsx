import React from "react";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container mx-auto h-[132px] flex flex-col py-4 gap-y-4 px-4">
      <div className="flex justify-between items-center">
        <IoIosSearch className="w-[24px] h-[24px] cursor-pointer hidden qsm:block text-[#22202E] hover:text-slate-950" />
        <p className="text-3xl font-normal">Avion</p>
        <div className="flex gap-4">
          <IoIosSearch className="block qsm:hidden w-[24px] h-[24px] cursor-pointer text-[#22202E] hover:text-slate-950" />
          <AiOutlineShoppingCart className="qsm:block hidden  w-[24px] h-[24px] cursor-pointer text-[#22202E] hover:text-slate-950" />
          <FaRegUserCircle className="qsm:block hidden w-[24px] h-[24px] cursor-pointer text-[#22202E] hover:text-slate-950" />
        </div>
      </div>
      <hr className=" qsm:block hidden pr-6 h-2" />
      <div className=" justify-center gap-6 hidden qsm:flex">
        <Link
          href={"#"}
          className="text-[#505977] hover:text-[#110f16] cursor-pointer hover:font-normal"
        >
          Plant pots
        </Link>
        <Link
          href={"#"}
          className="text-[#505977] hover:text-[#110f16]  cursor-pointer hover:font-normal"
        >
          Ceramics
        </Link>
        <Link
          href={"#"}
          className="text-[#505977] hover:text-[#110f16]  cursor-pointer hover:font-normal"
        >
          Tables
        </Link>
        <Link
          href={"#"}
          className="text-[#505977] hover:text-[#110f16]  cursor-pointer hover:font-normal"
        >
          Chairs
        </Link>
        <Link
          href={"#"}
          className="text-[#505977] hover:text-[#110f16]  cursor-pointer hover:font-normal"
        >
          Crockery
        </Link>
        <Link
          href={"#"}
          className="text-[#505977] hover:text-[#110f16]  cursor-pointer hover:font-normal"
        >
          Tableware
        </Link>
        <Link
          href={"#"}
          className="text-[#505977] hover:text-[#110f16]  cursor-pointer hover:font-normal"
        >
          Cutlery
        </Link>
      </div>
    </div>
  );
};

export default Header;
