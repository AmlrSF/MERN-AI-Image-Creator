import React from 'react'
import {motion} from 'framer-motion';

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