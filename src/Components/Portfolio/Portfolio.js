import React from 'react';
import youtube from '../Images/youtubeclone.jpg';
import wheater from "../Images/wheaterapp.png";
import university from "../Images/univerity.png";
import landingpage from "../Images/cars.png";
import tictac from "../Images/tictactoe.png";

export default function Portfolio() {
  return (
    <div className='portfolio'>

   
    <div className='m-28'>

        <p className='text-center font-bold text-3xl mb-14 '>My Portfolio</p>

        <div className='grid  gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 max-sm:grid-cols-1'>
            <div>
            <div  className="image-project ">
                            <img src={youtube} alt='' className='w-96 h-52  rounded-md' ></img>
                            <p className='btn-hover'>
                            <a href="https://youtube-clone-red-nine.vercel.app/" >live demo</a>
                            </p>

                </div>
           
            <p className='text-center font-bold text-xl mt-6'> Youtube clone</p>
           
            </div>
            
            
            <div>
            <div  className="image-project ">
                            <img src={wheater} alt='' className='w-96 h-52 rounded-md'  ></img>
                            <p className='btn-hover'>
                            <a href="https://tarekshenawy.github.io/wheaterapp/"   >live demo</a>
                            </p>

                </div>
           
            <p className='text-center font-bold text-xl mt-6'>Weather App</p>
           
            </div>


            
            <div>
              
            <div  className="image-project ">
                            <img src={university} alt=''   className='w-96 h-52  rounded-md' ></img>
                            <p className='btn-hover'>
                            <a href="https://tarekshenawy.github.io/university-website/" >live demo</a>
                            </p>

                </div>
           
            <p className='text-center font-bold text-xl mt-6' >University website</p>
           
            </div>

            <div>
              
            <div  className="image-project ">
                            <img src={landingpage} alt=''   className='w-96 h-52  rounded-md' ></img>
                            <p className='btn-hover'>
                            <a href="https://tarekshenawy.github.io/simple-landingpage/" >live demo</a>
                            </p>

                </div>
           
            <p className='text-center font-bold text-xl mt-6' >landing page</p>
           
            </div>

            <div>
              
              <div  className="image-project ">
                              <img src={tictac} alt=''   className='w-96 h-52  rounded-md' ></img>
                              <p className='btn-hover'>
                              <a href="https://tarekshenawy.github.io/Tic-tac-toe-game/" >live demo</a>
                              </p>
  
                  </div>
             
              <p className='text-center font-bold text-xl mt-6' >Tic tac toe</p>
             
              </div>
            
        
        </div>


    </div>
    </div>
  )
}
