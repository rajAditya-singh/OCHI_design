/* eslint-disable react/jsx-key */
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion"

function LandingPage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textsttucture mt-36 px-16'>
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return <div className='masker'>
            <div className='w-fit flex justify-center items-center'>
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.87, 0, 0.13, 1], duration: 2 }}
                  className='mr-[1vw] w-[9vw] h-[5.7vw] overflow-hidden rounded-md  relative top-[6px]'>
                  <motion.img
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.87, 0, 0.13, 1], duration: 2 }} key={index} className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt=""></motion.img>
                </motion.div>)}
              <h1 className="flex items-center uppercase text-[9vw] h-full leading-[7vw] font-['Test_Founders_Grotesk_X_Condensed'] font-bold">
                {item}
              </h1>
            </div>
          </div>
        })}
      </div>

      <div className='border-t-[1px] border-zinc-500 mt-24 flex justify-between items-center px-10 py-5'>
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