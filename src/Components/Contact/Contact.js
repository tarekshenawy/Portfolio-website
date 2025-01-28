import React from 'react';
import contact_img from "../Images/contact.png";

export default function Contact() {
  return (
    <div className='contactme'>

    
    <div className='m-28'>

<p className='text-center font-bold text-3xl mb-14 '>Contact me</p>

<div className='flex justify-between items-center md:flex-col lg:flex-row sm:flex-col max-sm:flex-col'>
    <img src={contact_img}  alt='' className='mb-12'></img>
    <div>
    <form className='leading-10 flex flex-2 flex-col'>
                <p className='font-bold'>Name</p>
                <input className='bg-slate-600 p-2 rounded-md w-full text-white' type="text"  placeholder='Enter name' name="name" required></input>
             
                <p className='font-bold'>Phone Number</p>
                <input className='bg-slate-600 p-2 rounded-md w-96  text-white' type="number"  placeholder='Enter Phone' name='phone' required></input>

                <p className='font-bold' >Write your message here</p>
                <textarea className='bg-slate-600 p-2 rounded-md w-96 h-36  text-white' type="text" placeholder='enter your massege' name='message' rows={5}  required></textarea>
                <button type='submit' className='bg-amber-950 mt-6 text-white rounded'>Submit now</button>
            </form>
            {/* <span>{result}</span> */}
    </div>
</div>


    </div>
    </div>
  )
}
