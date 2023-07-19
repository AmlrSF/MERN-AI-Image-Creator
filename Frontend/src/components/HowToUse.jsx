import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils";
import {Wrapper} from "../Wrapper";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.step}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.step}
        </p>
      </div>

      <div className='mt-5'>
        <p className='text-white-100 text-[14px] pl-1 tracking-wider'>{experience.points}</p>
      </div>
    </VerticalTimelineElement>
  );
};

const HowToUse = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center mt-10"> 

        <h2 className={`${styles.sectionHeadText} text-center`}>
        The process
        </h2>

        <p className={`${styles.sectionSubText} text-center`}>
          this diagram below will showcase how easy it is 
          to create <br /> your own art and have it shipped to your house
        </p>
        
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Wrapper(HowToUse, "Process");