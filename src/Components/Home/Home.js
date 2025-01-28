import React from 'react';
import myprofile from '../Images/myprofile.png'
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

export default function Home() {

    useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: true,     
        });
      }, []);


  return (
    <div className='home'>
    
    <div className='relative h-screen mb-80  px-4  m-auto flex flex-col justify-center  w-[80%]'>


        <div className='flex items-center  md:flex-row md:absolute top-40 right-0 left-0 max-sm:flex-col-reverse max-sm:absolute  sm:flex-col-reverse sm:absolute gap-5' >

                <div data-aos="zoom-in" data-aos-duration="2000"  data-aos-delay="200" data-aos-easing="ease-in-out" className='flex flex-col flex-1 text-3xl leading-normal font-bold '>
                    <p>Hello there , i'm<br>
                    </br>Tarek El Shenawy<br></br>
                   <span className='text-orange-500'>Front-End Web Developer</span> </p>

                    <button   class="rounded-full text-slate-50 bg-slate-800 w-40 text-lg mt-5 p-3">About me</button>

                </div>

                <div  className='flex  flex-1 justify-end'>
                    <img   src={myprofile} alt='' className='w-80 bg-indigo-950 rounded-full'></img>
              
                </div>


        </div>
        
        </div>
        </div>
  )
}
