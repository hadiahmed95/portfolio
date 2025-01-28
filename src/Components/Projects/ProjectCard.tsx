import React, { useEffect, useState } from "react";
import Aos from "aos";
import { Tilt } from "react-tilt";
import GithubLogo from "@/assets/github.png";
import { BsBoxArrowUpRight } from "react-icons/bs";
import DetailModal from "../Modal/DetailModal";

export default function ProjectCard({ work }: any) {
  const [aboutShow, setAboutShow] = useState(false);
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div data-aos="zoom-in">
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-[#2e3032] p-5 rounded-2xl sm:w-[360px] w-full cursor-context-menu"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={work.image.src}
              alt="work_image"
              className="w-full h-full object-cover rounded-2xl"
              onClick={() => {
                setAboutShow(true);
              }}
            />

            <div className="absolute m-3 w-10 h-10 right-0 top-0">
              <div
                onClick={() => window.open(work.source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <BsBoxArrowUpRight />
                {/* <img
                        src={GithubLogo.src}
                        alt='source code'
                        className='w-1/2 h-1/2 object-contain'
                    /> */}
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setAboutShow(true);
            }}
          >
            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px] sm:text-start text-center">
                {work.name}
              </h3>
              {work?.Role &&(
                <h3 className="text-white text-[14px] mt-1 sm:text-start text-center">
                Role: {work.Role} Developer
              </h3>
              )}
              {work?.description && work?.description !== "" && (
                <p className="mt-2 text-secondary text-[14px] line-clamp-4 h-[88px] sm:text-start text-center">
                  {work.description}
                </p>
              )}
            </div>

            <div className="mt-4 flex flex-wrap sm:justify-start justify-center gap-2">
              {work.tags.map((tag: any) => (
                <p
                  key={`${work.name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </Tilt>
      </div>
      <DetailModal
        show={aboutShow}
        onClose={() => {
          setAboutShow(false);
        }}
        data={work}
      />
    </>
  );
}
