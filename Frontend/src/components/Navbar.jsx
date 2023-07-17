import React ,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white text-[18px] font-medium cursor-pointer flex '>
            <span className='text-[22px] text-[#915EFF] font-bold'>AI</span> image
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-5'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <ul  className='list-none hidden sm:flex flex-row gap-2' >
          <li>
            <Link  className='border-solid border-2 p-3 rounded border-[#915EFF]' to="/Signin">SignUp</Link>
          </li>
          <li >
            <Link  className='bg-[#915EFF] p-3 border-solid border-2 border-[#915EFF] rounded' to="/Login">Login</Link>
          </li>
        </ul>



        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-primary  border-[#915EFF] border-solid
             border-2 absolute top-20 right-0 left-0 mx-4 my-2 w-full] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href="#">{nav.title}</a>
                </li>
              ))}
              <li className='flex gap-2'>
                <Link className='border-solid border-2 border-[#915EFF] p-3 rounded ' to="/Signup">SignUp</Link>
                <Link className='border-solid border-2 border-[#915EFF] bg-[#915EFF] p-3 rounded' to="/tryAi">Try Aimage</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar