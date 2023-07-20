import React ,{useState, useEffect,useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from "../assets";
import {userContext} from '../context/context'; 
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import noUser from '../assets/noUser.jpg';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
const Navbar = ({noList}) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {setData,data} = useContext(userContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

  useEffect(()=>{
    (async ()=>{
      try {
           const token = window.localStorage;

          await fetch('http://localhost:3000/api/v1/users/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(token)
          }).then(res=>res.json())
            .then(res=>{
              if(res.succes === false){
                navigate('/Login')
              }else{
                setData(res.user);
              }
            })

        } catch (error) {
          console.log(error);
        }
    })();
  },[])

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


    const [MenuBar, setMenuBar] = React.useState(null);
    const openMenu = Boolean(MenuBar);
    const handleMenuClick = (event) => {
      setMenuBar(event.currentTarget);
    };
    const handleMenuClose = (status) => {
      setMenuBar(null);
    };

    const handleLogout = ()=>{
      setData('');
      localStorage.clear();
      navigate('/Login');
      setMenuBar(null);
    }

    const handleProfile = ()=>{
      console.log('fffS');
      navigate(`/Profile/${data?._id}`)
    }

  return (
    <>

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
          
        {!noList &&   <ul className='list-none hidden sm:flex flex-row gap-5'>
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
        </ul>}

        {data === undefined ?  
        <ul  className='list-none sm:flex hidden  flex-row gap-2' >
          <li>
            <Link  className='border-solid border-2 p-3 rounded border-[#915EFF]' to="/Signin">SignUp</Link>
          </li>
          <li >
            <Link  className='bg-[#915EFF] p-3 border-solid border-2 border-[#915EFF] rounded' to="/Login">Login</Link>
          </li>
        </ul>
        :
          <div className='hidden sm:flex  align-items gap-1'>
              
            {data?.regStatus === 0 ? 
              <div>
                <IconButton size="large" aria-describedby={id} aria-label="show 4 new mails" onClick={handleClick} color="inherit">
                  <Badge badgeContent={4} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <Popover
                  id={id}
              
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Typography sx={{margintop:'5px', p: 2 }}>You are Not verified in the members List</Typography>
                </Popover>
              </div>
              : ''}
             <div>
              <Button sx={{background:'#915EFF' ,display:'flex',gap:"5px"}}
                id="basic-button"
                aria-controls={openMenu ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? 'true' : undefined}
                onClick={handleMenuClick}
                variant='contained'
              >
                <span className='text-white font-medium'>
                  {data?.Fullname ? data.Fullname : `Guest_${data?._id?.slice(1,6)}`}
                </span>
                <div className='bg-[#915EFF] relative h-[35px] w-[35px] rounded-[50%]'>
                  <img className='h-full rounded-[50%] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-full' src={noUser} />
                </div>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={MenuBar}
                open={openMenu}
                onClose={handleMenuClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleProfile}><Link to={`/Profile/${data?._id}`} >Profile</Link></MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        }



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
             border-2 absolute flex-col top-20 right-0 left-0 mx-4 my-2  z-10 rounded-xl`}
          >
              <ul className='list-none flex justify-end items-start mb-3 flex-1 flex-col gap-4'>
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
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}

              </ul>
            
              <div>
                {
                  data === undefined ?  

                  <div className='flex gap-2'>
                    <Link className='border-solid border-2 border-[#915EFF] p-3 rounded ' to="/SignIn">SignUp</Link>
                    <Link  className='border-solid border-2 border-[#915EFF] bg-[#915EFF] p-3 rounded' to="/Login">Login</Link>
                  </div> 
          
                  :
                <div className='flex gap-3 items-center'>
                 <div>
                  <Button sx={{background:'#915EFF' ,overflow:'visible',display:'flex',gap:"5px"}}
                    id="basic-button"
                    aria-controls={openMenu ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? 'true' : undefined}
                    onClick={handleMenuClick}
                    variant='contained'
                  >
                    <span className='text-white font-medium'>
                      {data?.Fullname ? data.Fullname : `Guest_${data?._id?.slice(1,6)}`}
                    </span>
                    <div className='bg-[#915EFF] relative h-[35px] w-[35px] rounded-[50%]'>
                      <img className='h-full rounded-[50%] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-full' src={noUser} />
                    </div>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={MenuBar}
                    open={openMenu}
                    onClose={handleMenuClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleMenuClose}><Link to={`/Profile/${data?._id}`} >Profile</Link></MenuItem>
                    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
                {data?.regStatus === 0 ? 
                  <div>
                    <IconButton size="large" aria-describedby={id} aria-label="show 4 new mails" onClick={handleClick} color="inherit">
                      <Badge badgeContent={4} color="error">
                        <MailIcon />
                      </Badge>
                    </IconButton>
                    <Popover
                      id={id}
                  
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                    >
                      <Typography sx={{margintop:'5px', p: 2 }}>You are Not verified in the members List</Typography>
                    </Popover>
                  </div>
                  : 
                    ''
                  }
                </div>
                }
              </div>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar





                  
