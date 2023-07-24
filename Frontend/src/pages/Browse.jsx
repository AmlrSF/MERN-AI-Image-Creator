import React, { useContext, useEffect } from 'react'
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { Navbar } from '../components';
import { textVariant } from '../utils';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/context';

const Browse = () => {
    const {data,setData} = useContext(userContext);
    console.log(data);
    const navigate = useNavigate();
    useEffect(()=>{
        if(data == undefined || data == null){
            return navigate('/Login');
        } 
        
    },[])
    

  return (
    <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar noList />
        </div>
        <section className='min-h-screen w-screen pt-[60px]'>
            <div className='max-w-7xl mx-auto w-[92%]  z-0`'>
                <motion.div variants={textVariant()} className="text-center mt-10"> 
                    <h2 className={`${styles.sectionHeadText} `}>
                        Browse Here.
                    </h2>

                    <p className={`${styles.sectionSubText} `}>
                        this diagram below will showcase how easy it is 
                        to create <br /> your own art and have it shipped to your house
                    </p>
                </motion.div>
            </div>
        </section>
    </div>

  )
}

export default Browse