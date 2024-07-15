import React from 'react';
import "./Home.css";
import arrowdown from "../IMages/down-arrow.png";
import myprofile from "../IMages/myprofile.jpg";
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <div className='home '>
      

      <div className='col1'>
        <h3>Hello there , i'm<br></br>
        Tarek El Shenawy
        </h3>
        <h2><span>Front-End Web Developer</span></h2>
        <button>About me <Link to="about" smooth={true} offset={-200} duration={500}><img src={arrowdown} alt=''></img></Link></button>

        </div>
        <div className='col2'>
            <img src={myprofile} alt=''></img>

        </div>
     

      
        
      
    </div>
  )
}
