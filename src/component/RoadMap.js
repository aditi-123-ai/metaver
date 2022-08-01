import React from 'react'
import q1 from '../image/q1.png'
import q2 from '../image/q2.png'
import q3 from '../image/q3.png'
import q4 from '../image/q4.png'
import image5 from '../image/image5.png'
import image4 from '../image/image4.png'
import image3 from '../image/image3.png'
import image2 from '../image/image2.png'
import image1 from '../image/image1.png'
import bg1 from '../image/bg1.png'
import bg2 from '../image/bg2.png'
import line from '../image/line.png'

function RoadMap() {
  return (
    <>
    <div className='w-full h-[100vh] bg-[#0C0517] text-white'>
        <h1 className='h-[10vh] w-full flex items-center justify-center text-4xl font-bold '>ROAD MAP</h1>
        <div className='w-full h-[90vh] flex justify-center items-center'>
            <div className='w-[95%] h-[80vh] flex  justify-between'>
                <div className= 'w-72 h-full flex flex-col justify-center items-center relative'>
                        <img src={q1} alt="" className=' ' />
                    <div>
                        <ul className='flex flex-col justify-start items-start'>
                            <li className='flex justify-around items-center'><div className='w-2 h-2 rounded-full mr-2 bg-white'></div> Website Lauch</li>
                            <li className='flex justify-around items-center'><div className='w-2 h-2 rounded-full mr-2 bg-white'></div> Avatar Sysytem Launch</li>
                            <li className='flex justify-around items-center'><div className='w-2 h-2 rounded-full mr-2 bg-white'></div> Token Sysytem Creation <br />(miniting)</li>
                            <li className='flex justify-around items-center'><div className='w-2 h-2 rounded-full mr-2 bg-white'></div> Private Wallet Creation</li>
                            <li className='flex justify-around items-center'><div className='w-2 h-2 rounded-full mr-2 bg-white'></div> Pre-Alpha Release.</li>
                            <li className='flex justify-around items-center'><div className='w-2 h-2 rounded-full mr-2 bg-white'></div> Early Adoptor Initiative</li>
                        </ul>
                    </div>
                </div>
                <img className='w-56 h-28 mt-72 ml-52 rotate-12 absolute' src={line} alt="" />
                <div className=' w-72 h-full flex flex-col justify-center items-center'>
                        
                    <div>
                        <ul className='flex flex-col justify-start items-start mb-10'>
                            <li className='flex justify-around items-center mb-2'><div className='w-2 h-2 rounded-full mr-2 bg-white'></div>Alpha Release</li>
                            <li className='flex justify-around items-center mb-2'><div className='w-2 h-2 rounded-full mr-2 bg-white'></div>NFT Marketplace Release</li>
                            <li className='flex justify-around items-center mb-2'><div className='w-2 h-2 rounded-full mr-2 bg-white'></div>Token DEX Listing</li>
                            <li className='flex justify-around items-center mb-2'><div className='w-2 h-2 rounded-full mr-2 bg-white'></div>Creator Tool Release</li>
                        </ul>
                    </div>
                    <img src={q2} alt="" className=' ' />
                </div>
                <img className='w-56 h-36 mt-60 ml-[610px] -rotate-90 absolute' src={line} alt="" />
                <div className=' w-72 h-full flex flex-col justify-center items-center'>
                        <img src={q3} alt="" className=' ' />
                    <div>
                    <ul className='flex flex-col justify-start items-start'>
                            <li className='flex justify-around items-center mb-3'><div className='w-2 h-2 rounded-full mr-2 bg-white'></div>Second Era Release</li>
                            <li className='flex justify-around items-center mb-3'><div className='w-2 h-2 rounded-full mr-2 bg-white'></div>DAO Created</li>
                            <li className='flex justify-around items-center mb-3'><div className='w-2 h-2 rounded-full mr-2 bg-white'></div>Real Estate Sale Open</li>
                        </ul>
                    </div>
                </div>
                <img className='w-52 h-28 mt-72 ml-[990px] rotate-12 absolute' src={line} alt="" />
                <div className=' w-72 h-full flex flex-col justify-center items-center'>
                    <div>
                        <ul className='flex flex-col justify-start items-start'>
                            <li className='flex justify-around items-center mb-10'><div className='w-2 h-2 rounded-full mr-2 bg-white'></div>Third Era Release</li>
                        </ul>
                    </div>
                    <img src={q4} alt="" className=' ' />
                </div>
            </div>
        </div>
    </div>
    <div className='w-full h-[100vh] bg-[#0C0517] flex flex-col items-center '>
        <h1 className='mt-5 h-[7vh] text-white text-center font-bold text-3xl'>IT'S YOUR TURN TO BUILD YOUR OWN WORLD IN THIS FORADIAN UNIVERSE.</h1>
        <p className='text-center h-[5vh] text-white text-xl'>GRAB YOUR NFT'S IN THE UPCOMING NFT AUCTION.</p>
        <button className='pl-4 pr-4 h-[5vh]  text-white bg-gradient-to-r from-[#B21ECA] to-[#605BD0] rounded-full'>Future release plans</button>
        <div className=' w-full h-[80vh] flex'>
            <div className='w-full h-[50vh] flex justify-around'>
                <div className=' w-72 h-full flex flex-col justify-center items-center rounded-xl mt-28 opacity-60'>
                    <img className='w-full h-[20vh]' src={image1} alt="" />
                    <div className='w-full h-[30vh] bg-gradient-to-b from-[#494164] via-[#342E4F] to-[#17122B] rounded-b-lg flex flex-col '>
                        <div className=' h-[90%] '>
                            <img src={bg1} alt="" className=' w-64 top-[1970px] ml-4 absolute' />
                            <div className='relative w-64 text-white'>
                                <h1 className='absolute -top-3 left-16 text-xl font-semibold ' >Experiential Center</h1>
                                <div className='w-full absolute top-5 left-6 flex justify-around'>
                                    <h1>899K</h1>
                                    <p>⭐4.9/5</p>
                                </div>
                                <p className='absolute text-xs font-thin top-12 left-12'>Unravel those mysterious laws of science <br /> by conducting even the physically <br /> impossible experiments with your friends <br /> in our experimental centre and let the <br /> detailed and captivating simulations <br /> embrace you. Step in now!!</p>
                            </div>
                        </div>
                        <div className=' h-[10%] '>
                            <img className='w-56 absolute top-[2186px] left-[40px]' src={bg2} alt="" />
                            <button className='relative text-white left-24 text-lg bottom-8'>BOOK NOW</button>
                        </div>
                    </div>
                </div>
                <div className=' w-72 h-full flex flex-col justify-center items-center rounded-xl mt-28 opacity-60'>
                    <img className='w-full h-[20vh]' src={image2} alt="" />
                    <div className='w-full h-[30vh] bg-gradient-to-b from-[#494164] via-[#342E4F] to-[#17122B] rounded-b-lg flex flex-col '>
                        <div className=' h-[90%] '>
                            <img src={bg1} alt="" className=' w-64 top-[1970px] ml-4 absolute' />
                            <div className='relative w-64 text-white'>
                                <h1 className='absolute -top-3 left-16 text-xl font-semibold ' >Gallery</h1>
                                <div className='w-full absolute top-5 left-6 flex justify-around'>
                                    <h1>899K</h1>
                                    <p>⭐4.9/5</p>
                                </div>
                                <p className='absolute text-xs font-thin top-16 left-16'>Have a look through our ‘Virtual <br /> Louvre’ and experience a world of <br /> hundreds of art works and models <br /> lined up in the most unique way.</p>
                            </div>
                        </div>
                        <div className=' h-[10%] '>
                            <img className='w-56 absolute top-[2186px] left-[340px]' src={bg2} alt="" />
                            <button className='relative text-white left-24 text-lg bottom-8'>BOOK NOW</button>
                        </div>
                    </div>
                </div>
                <div className=' w-72 bg-red-200 h-[60vh] flex flex-col justify-center items-center rounded-xl mt-20'>
                <img className='w-full h-[30vh]' src={image3} alt="" />
                    <div className='w-full h-[40vh] bg-gradient-to-b from-[#494164] via-[#342E4F] to-[#17122B] rounded-b-lg flex flex-col '>
                        <div className=' h-[90%] '>
                            <img src={bg1} alt="" className=' w-[266px]  top-[2000px] ml-2 absolute' />
                            <div className='relative w-64 text-white'>
                                <h1 className='absolute -top-7 left-14 text-2xl  font-semibold ' >Go Karting Track</h1>
                                <div className='w-full absolute top-3 left-6 flex justify-around'>
                                    <h1>899K</h1>
                                    <p>⭐4.9/5</p>
                                </div>
                                <p className='absolute text-xs font-thin top-12 left-16'>Let the rush of these racing tracks <br /> embrace you. Sprint through <br /> these racing tracks and enjoy the <br /> relishing pleasure of speed for <br /> yourself or along with your friends. <br /> Be the best and beat the rest.</p>
                            </div>
                        </div>
                        <div className=' h-[10%] '>
                            <img className='w-60 absolute top-[2230px] left-[630px]' src={bg2} alt="" />
                            <button className='relative text-white left-24 text-lg bottom-8'>BOOK NOW</button>
                        </div>
                    </div>
                </div>
                <div className=' w-72 h-full flex flex-col justify-center items-center rounded-xl mt-28 opacity-60'>
                    <img className='w-full h-[20vh]' src={image4} alt="" />
                    <div className='w-full h-[30vh] bg-gradient-to-b from-[#494164] via-[#342E4F] to-[#17122B] rounded-b-lg flex flex-col '>
                        <div className=' h-[90%] '>
                            <img src={bg1} alt="" className=' w-64 top-[1970px] ml-4 absolute' />
                            <div className='relative w-64 text-white'>
                                <h1 className='absolute -top-3 left-16 text-xl font-semibold ' >Planetarium</h1>
                                <div className='w-full absolute top-5 left-6 flex justify-around'>
                                    <h1>899K</h1>
                                    <p>⭐4.9/5</p>
                                </div>
                                <p className='absolute text-xs font-thin top-14 left-14'>Experience the solar system up-close <br /> like never before. Explore the planets <br /> and much more in this planetarium. <br /> Step in now!! Enjoy outer space in the <br /> most spectacular way.</p>
                            </div>
                        </div>
                        <div className=' h-[10%] '>
                            <img className='w-56 absolute top-[2186px] left-[950px]' src={bg2} alt="" />
                            <button className='relative text-white left-24 text-lg bottom-8'>BOOK NOW</button>
                        </div>
                    </div>
                </div>
                <div className=' w-72 h-full flex flex-col justify-center items-center rounded-xl mt-28 opacity-60'>
                    <img className='w-full h-[20vh]' src={image5} alt="" />
                    <div className='w-full h-[30vh] bg-gradient-to-b from-[#494164] via-[#342E4F] to-[#17122B] rounded-b-lg flex flex-col '>
                        <div className=' h-[90%] '>
                            <img src={bg1} alt="" className=' w-64 top-[1970px] ml-4 absolute' />
                            <div className='relative w-64 text-white'>
                                <h1 className='absolute -top-3 left-16 text-xl font-semibold ' >Go Karting Track</h1>
                                <div className='w-full absolute top-5 left-6 flex justify-around'>
                                    <h1>899K</h1>
                                    <p>⭐4.9/5</p>
                                </div>
                                <p className='absolute text-xs font-thin top-16 left-16'>Racing newbie? Learn racing in the <br /> most fun filled way at your own pace <br /> in these go karting tracks. Start your <br /> new hobby here.</p>
                            </div>
                        </div>
                        <div className=' h-[10%] '>
                            <img className='w-56 absolute top-[2186px] left-[1250px]' src={bg2} alt="" />
                            <button className='relative text-white left-24 text-lg bottom-8'>BOOK NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default RoadMap