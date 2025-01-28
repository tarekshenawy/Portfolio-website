import React from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

export default function About() {

    useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: true,     
        });
      }, []);
  return (
    <div className='about'>

   
    <div className='m-72 h-80 mx-16 '>

        <p className='text-center font-bold text-3xl mb-14 '>About Me</p>

        <div className='flex gap-16 text-xl md:flex-col lg:flex-row sm:flex-col max-sm:flex-col'>
            <p data-aos="fade-right"
            data-aos-duration="1000" 
            data-aos-delay="200"     
            data-aos-easing="ease-in-out"  className='flex-1 bg-slate-400 p-3 rounded-lg '>
                I'm Tarek El Shenawy ,
                            <span >Front-End Web Developer</span> I can create websites
                  and applications using web languages such as
                   HTML, CSS, and JavaScript that allow users to access
                    and interact with the site or app. When you visit a website,
                     the design elements you see were created by 
                     a front-end developer.</p>
                     <div  data-aos="fade-left"
            data-aos-duration="1000" 
            data-aos-delay="200"     
            data-aos-easing="ease-in-out" className='flex-1 leading-10  bg-slate-400 p-3 rounded-lg '>
                        <p><span className='font-bold'>Name</span> : Tarek El Sayed El Shenawy</p>
                        <p><span  className='font-bold'>Email</span> : tarekelshenawy1997@gmail.com</p>
                        <p><span  className='font-bold'>place</span> : Damietta</p>
                     </div>

        </div>
         
       
            



    </div>
    </div>
  )
}
