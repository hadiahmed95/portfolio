import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import vvork from '@/assets/vvork.jpg';
import egenie from '@/assets/netwrix.svg';
import botsolutions from '@/assets/botlogo.png';
import cybervision from '@/assets/cybervision.png';
import "react-vertical-timeline-component/style.min.css"
import { SectionWrapper } from '@/hoc'

const experiences = [
    {
        title: "Software Engineer",
        company_name: "Netwrix",
        icon: egenie,
        iconBg: "white",
        date: "April 2020 - Present",
        points: [
            "Maintaining web applications Netwrix.com, policypak.com",
            "Developed full-stack solutions using CodeIgniter and React.js, covering both front-end and back-end development.",
            "Built dynamic, responsive user interfaces with React.js for seamless user experiences.",
            "Ensured efficient server-side logic and functionality using CodeIgniter.",
            "Gained experience working with Yii and Vue.js to deliver high-performance applications.",
            "Contributed to the software development lifecycle, including coding, testing, and debugging applications.",
            "Collaborated closely with cross-functional teams to deliver scalable and user-friendly solutions."
        ],
    },
    {
        title: "Team Lead & Laravel Developer",
        company_name: "Botsolutions",
        icon: botsolutions,
        iconBg: "black",
        date: "April 2020 - April 2022",
        points: [
            "Led a team of developers on international projects to deliver high-quality web applications.",
            "Designed and implemented robust back-end systems for improved performance and scalability.",
            "Optimized system performance and ensured seamless integration with third-party services.",
            "Provided technical leadership, mentoring junior developers, and enforcing best practices.",
            "Guided the development process, ensuring adherence to project deadlines and specifications.",
            "Collaborated with clients and stakeholders to deliver scalable, secure, and efficient solutions.",
            "Helped ensure that projects met global standards and user needs."
        ],
    },
    {
        title: "Laravel / Wordpress Developer",
        company_name: "Cybervision International",
        icon: cybervision,
        iconBg: "black",
        date: "October 2018 - March 2020",
        points: [
            "Worked on semi-government and private sector projects, building scalable, secure, and high-performance websites and applications.",
            "Developed custom features and maintained existing systems to enhance website functionality and user experience.",
            "Optimized websites for improved performance, speed, and user interaction.",
            "Collaborated with cross-functional teams to deliver tailored solutions that met client requirements.",
            "Ensured compliance with industry standards and best practices while using Laravel and WordPress frameworks.",
            "Leveraged the strengths of both Laravel and WordPress to provide effective solutions for diverse project needs."
        ],
    },
];

const ExperienceCard = ({experience}:any) => {
    return (
        <VerticalTimelineElement 
        contentStyle={{background: "#212428", color: "#fff"}}
        contentArrowStyle={{borderRight: "7px solid #232631"}}
        date={experience.date}
        iconStyle={{background: experience.iconBg}}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <img 
                    src={`${experience.icon.src}`}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                />
            </div>
        }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{experience.company_name}</p>
                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {
                        experience.points.map((point:any, index:number) => (
                            <li
                                key={index}
                                className="text-white-100 text-[14px] pl-1 tracking-wider"
                            >
                                {point}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </VerticalTimelineElement>
    )
}

const Experience = () => {
    return (
        <div id='experience' className="bg-[#2e3032] py-20">
                <div className="flex flex-col items-center" data-aos="fade-down">
                <h2 className={`text-white font-black md:text-[50px] text-[30px] lg:text-start text-center pt-10`}>Our Development Process</h2>
                <p className={`sm:text-[18px] text-center md:w-[50%] sm:w-[80%] w-[100%] mt-3 text-white text-[14px] sm:text-secondary uppercase sm:tracking-wider sm:px-0 px-10`}>Instead of jumping into long and expensive development processes, we build out the initial prototype</p>
                </div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {
                        experiences.map((experience, index) => {
                            return <ExperienceCard key={index} experience={experience} />
                        })
                    }
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default SectionWrapper(Experience, 'work')