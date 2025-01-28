import React from "react";

function About() {
  return (
    <div className="bg-[#2e3032] py-20" id="about">
      <div className="flex flex-col items-center" data-aos="fade-down">
        <h2
          className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}
        >
          About Us
        </h2>
        <p className="mt-10 flex flex-col gap-10 md:w-[50%] sm:w-[80%] w-[100%] sm:text-[20px] text-[14px] text-center text-white">
          With over 6 years of experience in software development{","} I have honed my skills 
          across a wide range of technologies and programming languages{","} allowing me to 
          contribute effectively to both startups and larger teams. My primary focus is on PHP 
          development{","} where I have built a strong proficiency in architecting and developing 
          full{"-"}scale applications. Over the years{","} I{"'"}ve cultivated a passion for 
          creating robust and scalable solutions that meet client needs and exceed user expectations.
          <span>
            My expertise spans both back{"-"}end and front{"-"}end technologies. On the back{"-"}end{","} I 
            have worked extensively with WordPress{","} PHP{","} Laravel{","} and CodeIgniter{","} developing 
            dynamic{","} high-performance systems that drive seamless user experiences. For 
            the front{"-"}end{","} I have built responsive and user{"-"}friendly interfaces using 
            HTML{","} CSS{","} Bootstrap{","} JavaScript{","} jQuery{","} and React.js. I also have some experience 
            with Vue.js{","} expanding my ability to work with modern JavaScript frameworks.
          </span>
          <span>
            I take pride in my ability to adapt to new challenges{","} whether working in a 
            fast{"-"}paced startup environment or collaborating within larger{","} more structured 
            teams. Throughout my career{","} I have focused on writing clean{","} maintainable code 
            and always strive to stay updated with the latest industry trends. My dedication to 
            continuous learning and improvement ensures that I can deliver solutions that are both 
            innovative and efficient.
          </span>
          <span>
            I believe in the power of collaboration and have worked closely with cross{"-"}functional 
            teams to develop tailored solutions. My goal is to create software that not only meets 
            technical requirements but also provides lasting value to clients and users. With each 
            project{","} I continue to strengthen my skill set{","} tackle new challenges{","} and 
            grow as a developer.
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
