import React, { useContext, useEffect, useState } from 'react'
import { Navbar,Hero } from '../components';
import { userContext } from '../context/context';
import { useNavigate, useParams } from 'react-router-dom';
import {motion} from 'framer-motion';
import noUser from '../assets/noUser.jpg';
import { styles } from '../styles';
const Profile = () => {
    const [userInfo,setUserInfo] = useState(null);
    const {setData,data} = useContext(userContext);
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(()=>{(async()=>{
        if(data === undefined){
            return navigate('/');
        }else{
            try {
                const response = await fetch(`http://localhost:3000/api/v1/users/user/${id}`,{
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                    }});
                const userInformation = await response.json();
                setUserInfo(userInformation);
                console.log(userInfo);
            } catch (error) {
            }
        }
      
    })()},[])


  return (
    <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar noList />
        </div>
        <section className='min-h-screen w-screen pt-[100px]'>
            <div className='max-w-7xl mx-auto w-[92%]  z-0`'>
                <motion.div 
                    initial={{y:-100,opacity:0}} 
                    transition={{ duration: 0.6,type:"spring",delay:0.3 ,times: [0, 0.2, 1] }} 
                    animate={{y:0,opacity:1}}
                    className='bg-black-100 p-8 rounded-2xl w-full  flex sm:flex-row  flex-col gap-10 '
                >
                <div className='profile-img '>
                    <div className=' h-[150px] mx-auto overflow-hidden rounded-full w-[150px] border-8 border-primary'>
                        <img className='w-full h-full rounded-full' src={userInfo?.user?.avatar ?userInfo?.user?.avatar  :  noUser} />
                    </div>
                    <button className='bg-[#915EFF] p-3 w-full mt-5 border-solid border-2 border-[#915EFF] z-2 rounded'>Edit Profile</button>
                </div>
                <div>
                    <h2 className={`text-[25px] font-bold text-[#915EFF]`}> {userInfo?.user[0]?.Fullname ? userInfo.user[0].Fullname : `Guest_${data?._id?.slice(1,6)}`}</h2>
                    <p className={`${styles.sectionSubText} mb-5`}> {userInfo?.user[0]?.bio ? userInfo.user[0].bio : "  No Bio yet." }</p>

                    <div className='flex mb-2 px-3 py-1 rounded-[10px] gap-3 backdrop-opacity-10 backdrop-invert bg-[#915EFF]/30'>
                        <span className='w-[150px] text-secondary'>Username :</span>
                        <p>{userInfo?.user[0]?.username }</p>
                    </div>
                    <div className='flex mb-2 px-3 py-1 rounded-[10px] gap-3 backdrop-opacity-10 backdrop-invert bg-[#915EFF]/30'>
                        <span className='w-[150px] text-secondary'>Email :</span>
                        <p>{userInfo?.user[0]?.email }</p>
                    </div>
                    <div className='flex mb-2 px-3 py-1 rounded-[10px] gap-3 backdrop-opacity-10 backdrop-invert bg-[#915EFF]/30'>
                        <span className='w-[150px] text-secondary'>Registered Date :</span>
                        <p>{userInfo?.user[0]?.date }</p>
                    </div>
                    <div className='flex mb-2 px-3 py-1 rounded-[10px] gap-3 backdrop-opacity-10 backdrop-invert bg-[#915EFF]/30'>
                        <span className='w-[150px] text-secondary'>Birth Date :</span>
                        <p>{userInfo?.user[0]?.birthDate ? userInfo?.user[0]?.birthDate: 'Not Added yet'  }</p>
                    </div>
                </div>
            </motion.div>
            </div>
        </section>
    </div>
  )
}

export default Profile