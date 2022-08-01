import React from 'react'
import Egyptain from "../image/egyptian.png"
import Roman from "../image/roman.png"
import Chinese from "../image/chinese.png"
import India from "../image/india.png"
import Neoclassical from "../image/neoclassical.png"
import Current from "../image/current.png"
import Futuristic from "../image/futuristic.png"
import banner1 from "../image/banner1.png"
import Fade from 'react-reveal/Fade';

function Banner() {
  return (
    <div className='bg-white w-full h-[90vh] z-0 absolute'>
      <div className='w-full h-full  absolute -z-0'>
        <img className='w-full h-full' src={banner1} alt="" />
      </div>
      <div className='w-full absolute -z-0 flex mt-[500px] justify-around '>
        <img src={Egyptain} alt="" />
        <img src={Roman} alt="" />
        <img src={Chinese} alt="" />
        <img src={India} alt="" />
        <img src={Neoclassical} alt="" />
        <img src={Current} alt="" />
        <img src={Futuristic} alt="" />
      </div>
      <div className='h-[10vh] w-full bg-black opacity-40 relative z-1 mt-[600px]'>
        <div className='w-full absolute z-3 flex text-white justify-around items-end'>
          <h1>Egyptain/Nile <br />Civilization</h1>
          <h1>Greco-Roman<br />Civilization</h1>
          <h1>Chinese<br />Civilization</h1>
          <h1>Medieval India<br />(Rajput-Mughal)</h1>
          <h1>Renaissance/<br />Neoclassical</h1>
          <h1>2020 AD<br />Current</h1>
          <h1>3050 AD <br />Futuristic</h1>
        </div>
      </div>
      
    </div>
  )
}

export default Banner