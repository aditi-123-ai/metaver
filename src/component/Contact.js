import React from 'react'
import contact from "../image/contact.png"
import email from "../image/email.png"
import edit from "../image/edit.png"

function Contact() {
  return (
    <div className='w-full h-[100vh] bg-[#2C174E] opacity-80 text-white'>
        <h1 className='w-full h-[10vh]  text-center text-4xl pt-3 font-semibold'>Contact Us</h1>
        <div className='w-full h-[80vh] flex flex-col'>
          <div className='w-full flex justify-around'>
            <div className='mt-20'>
                <div>Name</div>
                <div className='flex w-[400px] rounded-lg bg-[#3A2F49]'>
                    <input type="text" className='w-full bg-transparent p-2 text-white' placeholder='Rajesh kumar' />
                    <img src={contact} alt="" />
                </div>
            </div>
            <div className='mt-20'>
                <div>Email</div>
                <div className='flex w-[400px] rounded-lg bg-[#3A2F49]'>
                    <input type="text" className='w-full bg-transparent p-2 text-white' placeholder='rajeshkumar@gmail.com' />
                    <img src={email} alt="" />
                </div>
            </div>
          </div>
          <div className='pt-10 pl-44'>
                <div>Message</div>
                <div className='flex w-[1160px] h-96 rounded-lg bg-[#3A2F49]'>
                    <input type="text" className='w-full bg-transparent p-2 text-white' />
                    <img className='w-20 h-20' src={edit} alt="" />
                </div>
            </div>
        </div>
        <div className='w-full flex justify-center items-center'>
        <button className='w-72 text-xl pl-7 pr-7 p-5 flex justify-center items-center bg-gradient-to-r from-[#B21ECA] to-[#605BD0] rounded-full'>SEND</button>
        </div>
    </div>
  )
}

export default Contact

