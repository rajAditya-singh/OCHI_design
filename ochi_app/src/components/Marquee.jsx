import React from 'react'

function Marquee() {
  return (
    <div className='w-full rounded-tl-3xl rounded-tr-3xl bg-[#004D43] py-20 '>
        <div className='border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden'>
           <h1 className='font-["Test_Founders_Grotesk_X_Condensed"] leading-none text-[28vw] uppercase -mt-20 -mb-10'>We are Ouchi</h1>
           <h1 className='font-["Test_Founders_Grotesk_X_Condensed"] leading-none text-[28vw] uppercase -mt-20 -mb-10'>We are Ouchi</h1>
        </div>
    </div>
  )
}

export default Marquee