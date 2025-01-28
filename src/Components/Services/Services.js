import React from 'react';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import webdevelop from '../Images/webdevelopment.png';
import creative from "../Images/creative.png";
import responsive from "../Images/responsive.webp";
import webideas from "../Images/webideas.png";
import support from "../Images/support.png";

export default function Services() {
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: true,     
        });
      }, []);
  return (
    <div className='services'>


    <div className='mx-16 '>

<p className='text-center font-bold text-3xl m-14 '>Services</p>
<div className='grid  gap-10 px-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 max-sm:grid-cols-1'>

    <div  data-aos="fade-up"
            data-aos-duration="1000" 
            data-aos-delay="200"     
            data-aos-easing="ease-in-out" className='leading-10 text-center w-70'>
        <img src={webdevelop} className='w-40 mx-auto' alt=''></img>
        <p className='mt-5 font-bold text-lg'>web development</p>
        <p>I can build user interface of website using html and css and javascript and React js, ..etc.</p>
    </div>
    <div data-aos="fade-up"
            data-aos-duration="1000" 
            data-aos-delay="200"     
            data-aos-easing="ease-in-out" className='leading-10 text-center w-70'>
        <img src={responsive}  className='w-40 mx-auto' alt=''></img>
        <p className='mt-5 font-bold text-lg'>Responsive Design</p>
        <p>your website will be 100% responsive for all devices.</p>
    </div>
    <div data-aos="fade-up"
            data-aos-duration="1000" 
            data-aos-delay="200"     
            data-aos-easing="ease-in-out" className='leading-10 text-center w-70'>
        <img src={creative}  className='w-40 mx-auto' alt=''></img>
        <p className='mt-5 font-bold text-lg'>Creative Design</p>
        <p>I can edit and create new content to make website much better.</p>
    </div>
    <div data-aos="fade-up"
            data-aos-duration="1000" 
            data-aos-delay="200"     
            data-aos-easing="ease-in-out" className='leading-10 text-center w-70'>
        <img src={webideas}  className='w-40 mx-auto' alt=''></img>
        <p className='mt-5 font-bold text-lg'>web ideas</p>
        <p>I could turn your ideas into a real projects with high quality.</p>
    </div>
    <div data-aos="fade-up"
            data-aos-duration="1000" 
            data-aos-delay="200"     
            data-aos-easing="ease-in-out" className='leading-10 text-center w-70'>
        <img src={support}  className='w-40 mx-auto' alt=''></img>
        <p className='mt-5 font-bold text-lg'>Support</p>
        <p>support is available if you want any changes in webstie after delvering it..</p>
    </div>


</div>

    </div>
    </div>
  )
}
