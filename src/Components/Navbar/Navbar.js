import React, { useState } from 'react';
import menubar from "../Images/menu-bar.png";
import { Link } from 'react-scroll';


export default function Navbar() {
  const[menuicon,setMenuicon]=useState(false);
  return (
    <nav class="flex justify-between items-center px-12 pt-5 pb-3 fixed top-0 left-0 right-0 bg-white z-20">

    <h1 className='font-bold  sm:text-lg xl:text-3xl lg:text-2xl  hover:cursor-pointer'><Link to="home" smooth={true} duration={500} offset={-100} >Tarek El Shenawy</Link></h1>

<ul className={`${menuicon ? "nav_list" : "hide"}`}>
            <li className='hover:text-orange-700 hover:cursor-pointer'><Link  to="about" smooth={true} duration={500} offset={-120}>About</Link></li>
            <li  className='hover:text-orange-700 hover:cursor-pointer'><Link  to="services" smooth={true} duration={500} offset={-120}>Services</Link></li>
            <li  className='hover:text-orange-700 hover:cursor-pointer'><Link to="portfolio" smooth={true} duration={500} offset={-120}>portfolio</Link></li>
            <li  className='hover:text-orange-700 hover:cursor-pointer'><Link to="contactme" smooth={true} duration={500} offset={-120}>Get in touch</Link></li>
        </ul>
       
    <button class=" transition ease-in-out delay-100 rounded-full border-2 p-2 w-28 hover:bg-black hover:text-slate-50 ">lets talk</button>
    <img src={menubar} alt='' className='menu-bar' onClick={()=>setMenuicon(!menuicon)} ></img>

    </nav>
  )
}
