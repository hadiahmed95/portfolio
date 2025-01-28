import React, { useState,useEffect } from "react";
import { SectionWrapper } from "@/hoc";
import ProjectCard from "./ProjectCard";
import ProjectArray from '@/Api/Projects'

const Projects = () => {
  const [postPerPage, setPostPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = ProjectArray.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div id="projects" className="bg-[#212428] py-20 text-white flex justify-center">
      <div className="w-[80%] flex flex-col items-center">
          <div className="flex flex-col items-center" data-aos="fade-down">
            <h2
              className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] pt-10`}
            >
              My Projects
            </h2>
            <p
              className={`sm:text-[18px] text-center mt-3 text-white text-[14px] text-secondary uppercase tracking-wider`}
            >
             Explore a collection of my work, showcasing my expertise in developing innovative and impactful web applications. Each project reflects my commitment to clean code, user-friendly design, and cutting-edge technology, delivering solutions that solve real-world problems.
            </p>
          </div>
        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {currentPost.length &&
            currentPost.map((project:any, index:number) => {
              return <ProjectCard key={index} work={project} />;
            })}
        </div>
        {ProjectArray.length > postPerPage && (
            <button data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" className="mt-20 font-bold bg-[#2896df] px-3 py-2 rounded-md" onClick={()=>{
              setPostPerPage(postPerPage + 6) 
            }}>Load More</button>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "work");
