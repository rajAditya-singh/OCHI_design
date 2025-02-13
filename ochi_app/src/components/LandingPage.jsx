/* eslint-disable react/jsx-key */
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textsttucture mt-40 px-16'>
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return <div className='masker'>
            <div className='w-fit flex justify-center items-center'>
            {index===1 && (<div className='mr-[1vw] w-[9vw] h-[5.7vw] rounded-md bg-red-700 relative top-[6px]'></div>)}
              <h1 className="flex items-center uppercase text-[9vw] h-full leading-[7vw] font-['Test_Founders_Grotesk_X_Condensed'] font-bold">
                {item}
              </h1>
            </div>
          </div>
        })}
      </div>

      <div className='border-t-[1px] border-zinc-500 mt-32 flex justify-between items-center px-10 py-5'>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p className='text-lg font-light tracking-tight leading-none'>{item}</p>
        ))}
        <div className='start flex gap-1 items-center'>
          <button className='border-zinc-400 border-[2px] rounded-full px-5 py-1 font-light text-lg uppercase'>Start The Project</button>
          <button className=' w-9 h-9 flex items-center justify-center border-zinc-400 border-[2px] rounded-full'><FaArrowUpLong className='rotate-45' /></button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage