"use client";
import React, { useState } from "react";
import Logo from "@/assets/logo-new.svg";
import Image from "next/image";
import CSS from "./footer.module.css";
import Link from "next/link";
import Social from "../Social";
import ContactUSModal from "../Modal/ContactUS";

export default function Footer() {
  const [contactShow, setContactShow] = useState(false)
  return (
    <>
    <div className={`${CSS.footer} sm:h-[430px] pb-14`}>
      <div data-aos="flip-left" className="pt-12 text-white flex flex-col items-center justify-between h-full w-full">
        <Link href={"/"} className="flex text-white items-center">
          <Image className="w-[70px]" src={Logo} alt="logo" />
          <p className="ml-5 text-[24px] font-bold">Hadi{"'"}s portfolio</p>
        </Link>
        <div
          className={`sm:h-[70px] px-6 flex sm:flex-row flex-col items-center sm:gap-y-0 gap-y-4 sm:py-0 py-5 sm:my-0 my-5 ${CSS["border_gradient"]}`}
        >
          <Link
            href={"/#experience"}
            className="md:w-[180px] sm:w-[130px] w-[80px] sm:px-0 px-3 flex items-center justify-center sm:text-[20px] text-[14px] font-medium sm:border-r-2 border-[#444658] cursor-pointer"
          >
            EXPERIENCE
          </Link>
          <Link
            href={"/#projects"}
            className="md:w-[180px] sm:w-[130px] w-[80px] sm:px-0 px-3 flex items-center justify-center sm:text-[20px] text-[14px] font-medium sm:border-r-2 border-[#444658] cursor-pointer"
          >
            PROJECTS
          </Link>
          <Link href={"/"} onClick={()=>{setContactShow(true)}} className="md:w-[180px] w-[130px] sm:px-0 px-3 flex items-center justify-center sm:text-[20px] text-[14px] font-medium  cursor-pointer">
            CONTACT US
          </Link>
          {/* <Link
            href={"/"}
            className="md:w-[180px] sm:w-[130px] w-[80px] sm:px-0 px-3 flex items-center justify-center sm:text-[20px] text-[14px] font-medium sm:border-r-2 border-[#444658] cursor-pointer"
          >
            ABOUT US
          </Link> */}
          {/* <Link
            href={"/#skills"}
            className="md:w-[180px] sm:w-[130px] w-[80px] sm:px-0 px-3 flex items-center justify-center sm:text-[20px] text-[14px] font-medium cursor-pointer"
          >
            SKILLS
          </Link> */}
        </div>
        <div className="flex items-center gap-x-5 mt-7">
          <Social />
        </div>
        {/* <div className="h-[74px] sm:w-[90%] sm:px-0 px-2 border-t-2 border-[#3C3F52] flex justify-center items-center">
          <p
            className={`sm:text-[18px] text-[14px] uppercase tracking-wider ${CSS["copyright"]}`}
          >
            Copyright © 2022 WePLAN. All rights reserved.
          </p>
        </div> */}
      </div>
    </div>
    <ContactUSModal show={contactShow} onClose={()=>{setContactShow(false)}}/>
    </>
  );
}
