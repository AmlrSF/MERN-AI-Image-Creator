import React, { useContext, useEffect, useState } from 'react'
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { Navbar } from '../components';
import { fadeIn, textVariant } from '../utils';
import noUser from '../assets/noUser.jpg';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { getRandomPrompt } from '../functions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Tilt} from 'react-tilt';
import { aiImageTags } from '../constants';
import { userContext } from '../context/context';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Create = () => {
    const [generatingImg, setGeneratingImg] = useState(false);
    const {data,setData} = useContext(userContext);
    const [form,setForm] = useState({
        name:'',
        description:'',
        Add_date:new Date(),
        image : '',
        tags : [],
        userID : '',
        prompt :''
    })

    const colors = ['blue-text-gradient','green-text-gradient','pink-text-gradient']

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(form);
    }

    const handleChange = (e)=>{
        setForm({
          ...form,
          [e.target.name] : e.target.value
        })
    }

    const handleSurpriseMe = () => {
        const randomPrompt = getRandomPrompt(form.prompt);
        setForm({ ...form, prompt: randomPrompt });
    };

      const generate = async()=>{
        if (form.prompt) {
            try {
              setGeneratingImg(true);
              const response = await fetch('https://dalle-arbb.onrender.com/api/v1/dalle', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  prompt: form.prompt,
                }),
              });
      
              const data = await response.json();
              setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
            } catch (err) {
              alert(err);
            } finally {
              setGeneratingImg(false);
            }
          } else {
            toast.error("You must provide prompt !", {
                position: toast.POSITION.BOTTOM_RIGHT
              });
          }
      }

      const handleTagsChange = (event, value) => {
        // The 'value' parameter contains the selected tags as an array
        setForm({ ...form, tags: value });
      };
  return (
    <div className='relative z-0 bg-primary'>
        <ToastContainer />
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar noList />
    </div>
    <section className='min-h-screen w-screen '>
        <div className='max-w-7xl mx-auto w-[92%] pt-[100px] z-0`'>
            <motion.div variants={textVariant()} className="text-center"> 
                <h2 className={`${styles.sectionHeadText} `}>
                    Generate an Ai Images.
                </h2>
            </motion.div>
            <motion.div 
                            initial={{y:-100,opacity:0}} 
                            transition={{ duration: 0.6,type:"spring",delay:0.3 ,times: [0, 0.2, 1] }} 
                            animate={{y:0,opacity:1}}
                            className='bg-black-100  p-8 rounded-2xl w-full items-center  flex md:flex-row  flex-col gap-10 '
                >
                    
                    <div className='basis-[50%] '>
                         <form
                        onSubmit={handleSubmit}
                        className='w-full flex flex-col'
                        >   

                            
                                <label className='flex flex-col '>
                                    <span className='text-white font-medium mb-2 mt-5'>Post Name</span>
                                    <input
                                    type='text'
                                    name='name'
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="What's your Post name?"
                                    className='bg-tertiary py-4 px-6 placeholder:text-secondary w-full text-white rounded-lg outline-none border-none font-medium'
                                    />
                                </label>
                                <label className='flex-col flex'>
                                    <span className='text-white font-medium mb-2 mt-5'>Post Description</span>
                                    <textarea id="bio" name="description" rows="4" cols="50"
                                        className='bg-tertiary p-3  w-full border-primary placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                        onChange={handleChange}
                                        placeholder='Describe the post.'
                                    >
                                        
                                    </textarea>
                                </label>
                                <label className='flex flex-col '>
                                    <div className='flex gap-3 items-center'>
                                        <span className='text-white font-medium mb-2 mt-5'>Prompt</span>
                                        <span onClick={handleSurpriseMe} className='bg-[#915EFF] cursor-pointer  mb-2 p-2 mt-5 text-[12px] rounded-xl outline-none  w-fit text-white font-bold shadow-md shadow-primary'>random Prompt</span>
                                    </div>
                                    <input
                                    type='text'
                                    name='prompt'
                                    value={form.prompt}
                                    
                                    onChange={handleChange}
                                    placeholder="What's your good Prompt?"
                                    className='w-full bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                    />
                                    <button onClick={generate} className='bg-[#915EFF] p-2 mt-2 rounded-xl outline-none w-full sm:w-fit text-white font-bold shadow-md shadow-primary'>{generatingImg ? 'Generating...' : 'Generate Image'}</button>
                                </label>
                                <label className='flex flex-col '>
                                    <span className='text-white font-medium mb-2 mt-5'>Tags</span>
                                    <Autocomplete
                                        multiple
                                        limitTags={2}
                                        id="multiple-limit-tags"
                                        options={aiImageTags}
                                        getOptionLabel={(option) => option}
                                        renderInput={(params) => (
                                            <TextField {...params} className='text-white bg-[#915EFF] rounded-xl' placeholder="Favorites" />
                                        )}
                                        onChange={handleTagsChange}
                                        sx={{ width: '100%' }}
                                        className='text-white w-full'
                                    />
                                </label>
                               
                                <button
                                    type='submit'
                                    className='mt-5 bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-full sm:w-fit text-white font-bold shadow-md shadow-primary'
                                    >
                                    Add post
                                </button>
                            
                        </form>
                    </div>
                    <div className='basis-[50%]'>
                    <motion.div variants={fadeIn("up", "spring", 0.4, 0.75)}>
                        <Tilt
                        options={{
                            max: 45,
                            scale: 1,
                            speed: 450,
                        }}
                        className='bg-tertiary p-5 rounded-2xl  w-[100%]'
                        >
                        <div className='relative w-full h-[350px]'>
                            <img
                            src={form.image ? form.image :  noUser}
                            alt='project_image'
                            className='w-full h-full object-cover rounded-2xl'
                            />
                             {generatingImg && (
                                <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                                    <Box sx={{ display: 'flex' }}>
                                        <CircularProgress />
                                    </Box>
                                </div>
                            )}
                        </div>
                
                        <div className='mt-5'>
                            <div className='flex d-flex items-center gap-3 border-b-2 pb-2 border-[#915EFF]'>
                                <img className='w-[50px] h-[50px] rounded-[50%]' src={data?.avatar ? data?.avatar: noUser } />
                                <div>
                                    <h3 className='text-white font-bold text-[24px]'>{form.name ? form.name : 'Name of post '}</h3>
                                    <span className='text-secondary'>{data?.Fullname}</span>
                                </div>
                            </div>
                            <h3 className='text-white-500 font-medium text-[18px]'>{form.prompt? form.prompt : 'prompt'}</h3>
                            <p className='mt-2 text-secondary text-[14px]'>{form.description? form.description : 'description of post ' }</p>
                        </div>
                
                        <div className='mt-4 flex flex-wrap gap-2'>
                            {form.tags ?
                            form.tags.map((tag) => (
                            <p
                                key={`${form.name}-${tag}`}
                                className={`text-[14px] pink-text-gradient`}
                            >
                                #{tag}
                            </p>
                            )) : 'tags related to this image'}
                        </div>
                        </Tilt>
                    </motion.div>
                    </div>
            </motion.div>
        </div>
    </section>
</div>
  )
}

export default Create