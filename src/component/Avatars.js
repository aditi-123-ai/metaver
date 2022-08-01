import React from 'react'
import avatar1 from "../image/avatar 1.png"
import vedio from "../image/vedio.gif"
import civil from "../image/civil.png"
import phone from "../image/phone.png"
import paint from "../image/paint.png"
import document from "../image/document.png"
import chat from "../image/chat.png"
import que from "../image/que.png"
import clock from "../image/clock.png"


function Avatars() {
  return (
    <>
      <div className='w-full h-[100vh] bg-[#0C0517] flex'>
        <div className="w-[45%] h-full text-white pl-56 flex flex-col justify-center">
          <h1 className='text-4xl font-semibold mb-5'>Build Your Best Avatar!</h1>
          <p className='text-xl mb-6'>Create your alter ego in the finest way possible! Our <br /> well-defined customization features will help you <br /> create the best version of your virtual presence.</p>
          <button className="w-60 text-xl p-5 bg-gradient-to-r from-[#B21ECA] to-[#605BD0] rounded-full">Build your own Avatar</button>
        </div>
        <div className="w-[55%] h-full flex pr-32 ">
          <img className='' src={avatar1} alt="" />
        </div>
      </div>
      <div className='w-full h-[100vh] bg-[#0C0517]  '> 
        <img className='w-full h-full absolute ' src={vedio} alt="" />
        <div className='relative text-white pl-20 pt-56'>
          <h1 className='text-5xl font-semibold mb-5'>Immerssive Experience</h1>
          <p className='text-xl mb-3'>Immerse yourself in an amazing, dynamic world filled with <br /> phenomenal experiences, a place where you can make your <br /> fantasies come true and create new memories.</p>
          <button className='w-36 p-2 text-lg bg-gradient-to-r from-[#B21ECA] to-[#605BD0] rounded-full'>Explore</button>
        </div>
      </div>
      <div className='w-full h-[100vh] bg-[#0C0517] flex '> 
        <div className='w-[30%] h-full text-white pl-36 pt-40'>
          <h1 className='text-5xl mb-5'>Civilisation</h1>
          <p className='text-xl mb-4'>Explore an everchanging world <br /> full of unique experiences. Hop <br /> in and build your own <br /> memories, make your <br /> fantasies come true! Explore <br /> an everchanging world full of <br /> unique experiences. Hop in <br /> and build your own memories, <br /> make your fantasies come true! </p>
          <button className='w-36 p-2 text-lg bg-gradient-to-r from-[#B21ECA] to-[#605BD0] rounded-full'>Explore</button>
        </div>
        <div className='w-[70%] h-full'>
          <img className='w-full h-full p-4' src={civil} alt="" />
        </div>
      </div>
      <div className='w-full h-[100vh] bg-[#0C0517]'>
        <div className='w-full h-[20%] text-white text-center'>
          <h1 className='text-4xl font-semibold mb-4 pt-3'>WHAT IS IN STORE FOR YOU</h1>
          <p className='text-lg text-[#D1E0FB]'>Check out the key features of our meta verse They can help you create your first</p>
        </div>
        <div className='w-full h-[40%] flex justify-around items-center'>
          <div className='w-80 h-60 flex'>
            <img className='w-12 h-12 ml-2 mt-2' src={phone} alt="" />
            <div className='text-white p-3'>
              <h1 className='text-2xl font-semibold'>Cross Platform</h1>
              <p className='text-xl leading-7 mt-5 text-[#D1E0FB]'>Are you most often visited <br /> from mobile devices? No <br /> problem! Our template is <br /> fully responsive.</p>
            </div>
          </div>
          <div className='w-80 h-60 flex'>
            <img className='w-12 h-12 ml-2 mt-2' src={paint} alt="" />
            <div className='text-white p-3'>
              <h1 className='text-2xl font-semibold'>Customize It</h1>
              <p className='text-xl leading-7 mt-5 text-[#D1E0FB]'>Customize our GAME for <br /> you as you wish! Advanced <br /> editing features will help <br /> you make it unique.</p>
            </div>
          </div>
          <div className='w-80 h-60 flex'>
            <img className='w-12 h-12 ml-2 mt-2' src={document} alt="" />
            <div className='text-white p-3'>
              <h1 className='text-2xl font-semibold'>Documentation</h1>
              <p className='text-xl leading-7 mt-5 text-[#D1E0FB]'>We have prepared good <br />documentation for our <br />Game! You can find the <br /> components you need.</p>
            </div>
          </div>
        </div>
        <div className='w-full h-[40%] flex justify-around items-center'>
          <div className='w-80 h-60 flex'>
            <img className='w-12 h-12 ml-2 mt-2' src={chat} alt="" />
            <div className='text-white p-3'>
              <h1 className='text-2xl font-semibold'>Chat Bots</h1>
              <p className='text-xl leading-7 mt-5 text-[#D1E0FB]'>AI powered chatbots to<br /> improve your game and<br /> statisfaction</p>
            </div>
          </div>
          <div className='w-80 h-60 flex'>
            <img className='w-12 h-12 ml-2 mt-2' src={que} alt="" />
            <div className='text-white p-3'>
              <h1 className='text-2xl font-semibold'>Knowledge base</h1>
              <p className='text-lg leading-7 mt-5 text-[#D1E0FB]'>Create and publish answers<br /> for customers and reduce<br /> your game support</p>
            </div>
          </div>
          <div className='w-80 h-60 flex'>
            <img className='w-12 h-12 ml-2 mt-2' src={clock} alt="" />
            <div className='text-white p-3'>
              <h1 className='text-2xl font-semibold'>24/7 Support</h1>
              <p className='text-lg leading-7 mt-5 text-[#D1E0FB]'>We are ready to help in <br />solving your problem during <br /> the day and night, just create<br /> a ticket.</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
export default Avatars