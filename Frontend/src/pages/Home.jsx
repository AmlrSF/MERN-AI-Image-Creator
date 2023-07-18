
import {Hero, Template, HowToUse,Navbar} from '../components';

const Home = () => {
  return (
    
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
      </div>
      <Hero/>
      <HowToUse />
      <Template />
    </div>

  )
}

export default Home

