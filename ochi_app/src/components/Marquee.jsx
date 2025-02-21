import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full rounded-tl-3xl rounded-tr-3xl bg-[#004D43] py-20 '>
        <div className='text border-t-[1px] border-zinc-400 border-b-2 flex  whitespace-nowrap overflow-hidden '>
           <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:10}}  className='font-["Test_Founders_Grotesk_X_Condensed"] leading-none text-[25vw] uppercase pr-10'>We are Ouchi</motion.h1>
           <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:10}}  className='font-["Test_Founders_Grotesk_X_Condensed"] leading-none text-[25vw] uppercase pr-10'>We are Ouchi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee