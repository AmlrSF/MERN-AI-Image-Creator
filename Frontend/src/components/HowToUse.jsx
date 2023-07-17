import React from 'react'
import {motion} from 'framer-motion';
import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { styles } from '../styles';

const HowToUse = () => {
  return (
    <>
       <motion.div variants={textVariant()} className='text-center mt-10'>
            <p className={styles.sectionSubText}>How To Use our.</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
        </motion.div>
    </>
  )
}

export default HowToUse