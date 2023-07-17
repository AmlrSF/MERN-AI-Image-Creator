import React from 'react';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import StarBalls from '../canvas/balls';

const Home = () => {
  return (
    <div className='relative z-0'>
      <section className={`relative w-full h-screen mx-auto`}>
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto
          ${styles.paddingX} flex flex-row items-start gap-5`}
          >
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, Try our <span className='text-[#915EFF]'>Ai images Generator</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 mb-10 text-white-100`}>
                Experience the pinnacle of visual excellence  <br className='sm:block hidden' />
                with our cutting-edge  AI Image Generator where artistry and technology converge seamlessly!
              </p>
              <Link className='border-solid mt-5 border-2 sm:px-10 w-full border-[#915EFF] bg-[#915EFF] p-3 rounded' to="/AIimage">Try Aimage</Link>
            </div>
          
          </div>
      </section>
      <StarBalls />
    </div>

  )
}

export default Home

