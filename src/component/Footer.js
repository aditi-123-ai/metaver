import React from 'react'
import partner from '../image/partner.png'
import footer from '../image/footer.png'
import foradian from '../image/foradian.png'
import social from '../image/social.png'

function Footer() {
  return (
    <div className='w-full h-[100vh] bg-[#0C0517] text-white'>
        <div className='pt-16'>
            <h1 className='text-center text-4xl font-semibold mb-10'>Partners</h1>
            <img className='p-10 pl-52' src={partner} alt="" />
        </div>
        <div className='w-full bg-[#0C0517] '>
            <img className='w-full object-cover absolute mt-10' src={footer} alt="" />
            <div className='relative pt-8 top-40 flex justify-around'>
              <div>
                <img src={foradian} alt=""  />
                <p className='mt-5 text-[#D1E0FB]'>Ready to help launch your Game. <br />along with our well-designed pages.
                </p>
                <img src={social} alt="" className='mt-5 cursor-pointer' />
              </div>
              <div>
                <h1 className='text-2xl'>Important</h1>
                <p className='text-lg text-[#D1E0FB] cursor-pointer mt-3'>Home</p>
                <p className='text-lg text-[#D1E0FB] cursor-pointer mt-3'>Avatar</p>
                <p className='text-lg text-[#D1E0FB] cursor-pointer mt-3'>Civilizations</p>
                <p className='text-lg text-[#D1E0FB] cursor-pointer mt-3'>Publish</p>
                <p className='text-lg text-[#D1E0FB] cursor-pointer mt-3'>Events</p>
              </div>
              <div>
                <h1 className='text-2xl'>Civilizations</h1>
                <p className='text-lg text-[#D1E0FB] cursor-pointer mt-3'>Egyptian/Nile</p>
                <p className='text-lg text-[#D1E0FB] cursor-pointer mt-3'>Greek-Roman</p>
                <p className='text-lg text-[#D1E0FB] cursor-pointer mt-3'>Medieval India</p>
                <p className='text-lg text-[#D1E0FB] cursor-pointer mt-3'>Renaissance/Neoclassical</p>
                <p className='text-lg text-[#D1E0FB] cursor-pointer mt-3'>2020 AD Current</p>
                <p className='text-lg text-[#D1E0FB] cursor-pointer mt-3'>3050 AD Futuristic</p>
              </div>
              <div>
                <h1 className='text-2xl'>Contact Us</h1>
                <p className='text-lg text-[#D1E0FB] cursor-pointer mt-3'>About us</p>
                <p className='text-lg text-[#D1E0FB] cursor-pointer mt-3'>Careers</p>
                <p className='text-lg text-[#D1E0FB] cursor-pointer mt-3'>Support</p>
                <p className='text-lg text-[#D1E0FB] cursor-pointer mt-3'>FaQ</p>
                <p className='text-lg text-[#D1E0FB] cursor-pointer mt-3'>Blog</p>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer