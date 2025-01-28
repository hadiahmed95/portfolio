import React from "react";
import SkillSlider from './slider'

export default function Skills() {
  return (
    <div id="skills" className="bg-[#212428] text-white py-20">
      <div className="flex flex-col items-center" data-aos="fade-down">
        <h2
          className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] pt-10`}
        >
          Skills
        </h2>
      </div>
      <SkillSlider/>
    </div>
  );
}
