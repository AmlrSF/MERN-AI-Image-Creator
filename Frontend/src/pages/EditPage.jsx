import React, { useRef ,useState} from 'react'
import {motion} from 'framer-motion';
import { Navbar } from '../components';
import { styles } from '../styles';
import noUser from '../assets/noUser.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';

const EditPage = () => {
    const formRef = useRef();
    const {id} = useParams();
    const navigate = useNavigate()
    const [form, setForm] = useState({
        username: "",
        email: "",
        birthDate:"",
        bio:"",
        avatar : "",
        Fullname:"",
        password:""
    });

    const handlePhoto= (e)=>{
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = ()=>{
          setForm({...form,avatar:reader.result});
        }
        reader.onerror = (err)=>console.log(err);
      }

    const handleChange = (e)=>{
        setForm({
          ...form,
          [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        
    try {
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({...form})
        };
        const response = await fetch(`http://localhost:3000/api/v1/users/user/edit/${id}`, requestOptions);
        const data = await response.json();
        console.log(data);
        
          if(data.success == false){
            toast.error(data.msg, {
              position: toast.POSITION.BOTTOM_RIGHT
            });
          }else{
            toast.success(data.msg, {
              position: toast.POSITION.BOTTOM_RIGHT
            });
            setTimeout(()=>{
              toast.success("You must login again !", {
                position: toast.POSITION.BOTTOM_RIGHT
              });
              navigate(`/profile/${id}`);
            },4000)
          }
        
      } catch (error) {
        console.log(error);
      }
    }
    return (
    <div className='relative z-0 bg-primary'>
        <ToastContainer />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar noList />
        </div>
        <section className='min-h-screen w-screen pt-[100px]'>
            <div className='max-w-7xl mx-auto w-[92%]  z-0`'>
                <motion.div 
                            initial={{y:-100,opacity:0}} 
                            transition={{ duration: 0.6,type:"spring",delay:0.3 ,times: [0, 0.2, 1] }} 
                            animate={{y:0,opacity:1}}
                            className='bg-black-100  p-8 rounded-2xl w-full items-center  flex sm:flex-row  flex-col gap-10 '
                >
                    <h3 className={`${styles.sectionHeadText} text-center basis-[30%]`}>Edit.</h3>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='w-full flex flex-col'
                        >   

                        <div className='sm:flex-row flex-col flex gap-2'>
                            <label className='flex flex-col basis-[50%]'>
                            <span className='text-white font-medium mb-2 mt-5'>Username</span>
                            <input
                            type='text'
                            name='username'
                            value={form.username}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                            />
                            </label>
                            <label className='flex flex-col basis-[50%]'>
                                <span className='text-white font-medium mb-2 mt-5'>Your Fullname</span>
                                <input
                                type='Fullname'
                                name='Fullname'
                                value={form.Fullname}
                                onChange={handleChange}
                                placeholder="choose An strong password"
                                className='bg-tertiary py-4 px-6 w-full placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>
                        </div>
                        
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-2 mt-5'>Your email</span>
                            <input
                            type='text'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-2 mt-5'>Your Password</span>
                            <input
                            type='text'
                            name='password'
                            value={form.password}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-2 mt-5'>Your BirthDate</span>
                            <input 
                                type="date" id="start" name="birthDate"
                                className='bg-tertiary p-3  border-primary placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                onChange={handleChange}
                            />
                        </label>
                        <label className='flex-col flex'>
                            <span className='text-white font-medium mb-2 mt-5'>Your bio</span>
                            <textarea id="bio" name="bio" rows="4" cols="50"
                                className='bg-tertiary p-3   border-primary placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                onChange={handleChange}
                                placeholder='introduce Yourself here.'
                            >
                                
                            </textarea>
                        </label>
                        <div className='flex items-center justify-between sm:flex-row flex-col'>
                            <label className='flex flex-col'>
                                <span className='text-white font-medium mb-2 mt-5'>Your Photo</span>
                                <input type='file'
                                    id='profile-image'
                                    name='avatar'
                                    accept='image/*'
                                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium block w-[100%] sm:w-[250px]  p-3"
                                    onChange={handlePhoto}
                                    required
                                />
                            </label>
                            <div className="bg-tertiary p-3 mt-5 border-primary placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-[150px] h-[150px] ">
                                { form.avatar ? (
                                    <img
                                    src={form.avatar}
                                    alt='profile-image'
                                    className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <img
                                    src={noUser}
                                    alt="preview"
                                    className="w-full h-9full object-contain opacity-40"
                                    />
                                )}
                            </div>
                        </div>
                        <button
                            type='submit'
                            className='mt-5 bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-full sm:w-fit text-white font-bold shadow-md shadow-primary'
                        >
                            Edit Profile
                        </button>

                    </form>
                </motion.div>
            </div>
        </section>
    </div>
  )
}

export default EditPage