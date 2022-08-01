import React from 'react'
import profile from "../image/profile.png"
import Banner from './Banner'

function Home() {
  return (
    <div className='w-full h-[100vh] bg-slate-300'>
        <div className='w-full h-[10vh] bg-[#000000] flex justify-end items-center'>
            <div className='h-full w-2/3'>
                <ul className='h-full flex justify-between items-center mr-32 text-white text-lg'>
                    <li className='hover:text-[#00C8DF] cursor-pointer hover:underline decoration-[#00C8DF] underline-offset-4'>Home</li>
                    <li className='hover:text-[#00C8DF] cursor-pointer hover:underline decoration-[#00C8DF] underline-offset-4'>Avatar</li>
                    <li className='hover:text-[#00C8DF] cursor-pointer hover:underline decoration-[#00C8DF] underline-offset-4'>Market place</li>
                    <li className='hover:text-[#00C8DF] cursor-pointer hover:underline decoration-[#00C8DF] underline-offset-4'>Events</li>
                    <li className='hover:text-[#00C8DF] cursor-pointer hover:underline decoration-[#00C8DF] underline-offset-4'>Publish</li>
                    <li className='hover:text-[#00C8DF] cursor-pointer hover:underline decoration-[#00C8DF] underline-offset-4'>Blog</li>
                    <li>
                        <div className='flex cursor-pointer bg-[#171721] rounded-lg p-2 items-center'>
                            <img className='mr-3' src={profile} alt="A" />
                            <p className='text-sm'>Brounom.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <Banner/>
    </div>
  )
}

export default Home