import React ,{useRef,useState} from 'react'
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { Link, useNavigate } from 'react-router-dom';
import { fadeIn, slideIn } from '../utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    let {email,password} = form;
    
    try {
      const response = await fetch('http://localhost:3000/api/v1/users/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...form }),
      });

        const result = await response.json();
        
        if(result.succes === true){
          let {user:{_id},token} = result;
          
          localStorage.setItem('token',token);
          navigate('/')
          
        }else{
          result.errors.forEach(element => {
            toast.error(element.msg, {
              position: toast.POSITION.BOTTOM_RIGHT,

            });
          });
        }
      
       
          
        

    } catch (error) {
     console.log(error);
    }
  }

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  return (
    <section className={`relative h-screen flex items-center justify-center`}>
      <motion.div initial={{x:-100,opacity:0}} transition={{ duration: 0.6,type:"spring",delay:0.3 ,times: [0, 0.2, 1] }} animate={{x:0,opacity:1}}
      className='bg-black-100 p-8 rounded-2xl w-[350px]' >
        <ToastContainer />
        <h3 className={`${styles.sectionHeadText} text-center`}>Login.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 mt-5'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 mt-5'>Your password</span>
            <input
              type='password'
              name='password'
              value={form.password}
              onChange={handleChange}
              placeholder="choose An strong password"
              className='bg-tertiary py-4 px-6 w-full placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='mt-5 bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Loging..." : "Login"}
          </button>
          <p className='text-white mt-3'>No Account ?  <Link to='/SignIn'  className='text-secondary hover:underline cursor-pointer'>create one</Link></p>
        </form>
      </motion.div>
    </section>
  )
}

export default Login