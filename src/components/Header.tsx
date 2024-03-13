"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white dark:bg-[#0F1625] top-0 left-0 right-0 z-20 fixed">
      <div className="container mx-auto h-[132px] flex flex-col py-4 gap-y-4 px-4 ">
        <div className="flex justify-between items-center">
          <IoIosSearch className="w-[24px] h-[24px] cursor-pointer hidden qsm:block dark:text-slate-200 text-[#22202E] hover:text-slate-950" />
          <p className="text-3xl font-normal">Avion</p>
          <div className="flex gap-4 jus items-center">
            <IoIosSearch className="block qsm:hidden  w-[28px] h-[28px] cursor-pointer dark:text-slate-200 text-[#22202E] hover:text-slate-950" />
            <AiOutlineShoppingCart className="qsm:block hidden  w-[24px] h-[24px] cursor-pointer dark:text-slate-200 text-[#22202E] hover:text-slate-950" />
            <FaRegUserCircle className="qsm:block hidden w-[24px] h-[24px] cursor-pointer dark:text-slate-200 text-[#22202E] hover:text-slate-950" />
            <ThemeSwitch />
            <button
              onClick={handleClick}
              className="pt-2 flex-col gap-1 justify-center items-center block qsm:hidden w-[32px] h-[32px] cursor-pointer dark:text-slate-200 text-[#22202E] hover:text-slate-950"
            >
              <span
                className={`bg-steel-500 block transition-all duration-300 ease-out
                    h-1 w-8 rounded-sm bg-black dark:bg-slate-200 ${
                      isOpen
                        ? "rotate-45 translate-y-[0.41rem]"
                        : "-translate-y-[0.30rem]"
                    }`}
              ></span>
              <span
                className={`bg-steel-500 block
                    h-1 w-8 rounded-sm my-0.5 bg-black dark:bg-slate-200 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
              ></span>
              <span
                className={`bg-steel-500 block transition-all duration-300 ease-out
                    h-1 w-8 rounded-sm bg-black dark:bg-slate-200  ${
                      isOpen
                        ? "-rotate-45 -translate-y-[0.35rem]"
                        : "translate-y-[0.30rem]"
                    }`}
              ></span>
            </button>
          </div>
        </div>
        <hr className=" qsm:block hidden pr-6 h-2" />
        <div className=" justify-center gap-6 hidden qsm:flex">
          <Link
            href={"#"}
            className="text-[#505977] dark:text-slate-400 dark:hover:text-slate-200 hover:text-[#110f16] cursor-pointer hover:font-normal"
          >
            Plant pots
          </Link>
          <Link
            href={"#"}
            className="text-[#505977] dark:text-slate-400 dark:hover:text-slate-200 hover:text-[#110f16]  cursor-pointer hover:font-normal"
          >
            Ceramics
          </Link>
          <Link
            href={"#"}
            className="text-[#505977] dark:text-slate-400 dark:hover:text-slate-200 hover:text-[#110f16]  cursor-pointer hover:font-normal"
          >
            Tables
          </Link>
          <Link
            href={"#"}
            className="text-[#505977] dark:text-slate-400 dark:hover:text-slate-200 hover:text-[#110f16]  cursor-pointer hover:font-normal"
          >
            Chairs
          </Link>
          <Link
            href={"#"}
            className="text-[#505977] dark:text-slate-400 dark:hover:text-slate-200 hover:text-[#110f16]  cursor-pointer hover:font-normal"
          >
            Crockery
          </Link>
          <Link
            href={"#"}
            className="text-[#505977] dark:text-slate-400 dark:hover:text-slate-200 hover:text-[#110f16]  cursor-pointer hover:font-normal"
          >
            Tableware
          </Link>
          <Link
            href={"#"}
            className="text-[#505977] dark:text-slate-400 dark:hover:text-slate-200 hover:text-[#110f16]  cursor-pointer hover:font-normal"
          >
            Cutlery
          </Link>
        </div>
        <div
          className={`${
            isOpen
              ? "translate-x"
              : "-translate-x-[320px] transation duration-400 ease-linier  "
          } absolute top-0 left-0 h-screen w-[50vw] bg-slate-200 dark:bg-slate-900 z-50 transation duration-200 ease-linear qsm:hidden`}
        >
          <div className="flex flex-col gap-4 pl-4 pt-4">
            <Link
              href={"#"}
              className="text-[#505977] hover:text-[#110f16] cursor-pointer hover:font-normal"
            >
              About us
            </Link>
            <Link
              href={"#"}
              className="text-[#505977] hover:text-[#110f16]  cursor-pointer hover:font-normal"
            >
              Contact
            </Link>
            <Link
              href={"#"}
              className="text-[#505977] hover:text-[#110f16]  cursor-pointer hover:font-normal"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
