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
    
    <div className='relative top-36 h-screen mx-16 mb-80'>


        <div className='flex items-center mx-20 md:flex-col-reverse lg:flex-row max-sm:flex-col-reverse sm:flex-col-reverse gap-5' >

                <div data-aos="zoom-in" data-aos-duration="2000"  data-aos-delay="200" data-aos-easing="ease-in-out" className='flex flex-col flex-1 text-4xl leading-normal font-bold '>
                    <h1 >Hello there , i'm<br>
                    </br>Tarek El Shenawy<br></br>
                   <span className='text-orange-500'>Front-End Web Developer</span> </h1>

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
