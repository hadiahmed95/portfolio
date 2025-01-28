import React from "react";
import styles from "./hero.module.css";
import pdf from "@/types.s";
import Social from "../Social";
import ProfilePic from "../../assets/profilepic.jpg";
import Image from "next/image";

export default function HeroSection() {
  const resumePDF = pdf("Engr-Hadi-Ahmed-Resume.pdf");
  return (
    <div
      id="home"
      className="bg-[#212428] py-20 text-white flex justify-center"
    >
      <div className="md:w-[60%] w-[80%] grid lg:grid-cols-1 grid-cols items-center lg:justify-center justify-center">
        <div
          className="flex flex-col lg:items-center items-center"
          data-aos="fade-right"
        >
          <div
            className="flex lg:justify-end justify-center lg:mt-0 mt-10 w-[300px] h-[300px] rounded-full overflow-hidden relative"
            data-aos="fade-left"
          >
            <Image
              src={ProfilePic}
              className="w-[100%] h-[100%] object-cover object-center"
              alt=""
            />
            <div
              className="w-[300px] h-[300px] rounded-full absolute top-0 left-0 z-10"
              style={{ background: "rgba(0,0,0,60%)" }}
            ></div>
          </div>
          <h2
            className={`${styles["heading"]} font-bold xl:text-[60px] md:text-[48px] sm:text-[40px] text-[32px] lg:text-start text-center pt-10`}
          >
            Hi, I{"'"}m Hadi Ahmed --
          </h2>
          <h2
            className={`${styles["heading"]} ${styles["textAnimate"]} xl:text-[48px] md:text-[40px] sm:text-[32px] text-[16px] text-[#2896df] mt-3`}
          >
            I{"'"}m Fullstack Web Developer.
          </h2>
          <p className="text-[20px] mt-5 lg:text-center text-center">
            As a passionate developer with 6+ years of experience, I have honed my skills in various technologies and programming languages.
            Currently, I specialize in PHP and possess a strong proficiency in it. My expertise lies in architect and developing full-scale
            applications, and I have successfully contributed to both startup environments and larger teams working on cohesive applications.
          </p>
          <div className="mt-7">
            <a
              target="_blank"
              rel="noreferrer"
              download
              href={resumePDF}
              className="bg-[#2896df] text-white px-4 py-2 rounded-md font-bold"
            >
              Download CV
            </a>
          </div>
          <div className="flex items-center gap-x-2 mt-7">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
}
