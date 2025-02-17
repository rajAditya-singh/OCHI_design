import React from 'react'

function Marquee() {
  return (
    <div className='w-full rounded-tl-3xl rounded-tr-3xl bg-[#004D43] py-20 '>
        <div className='text border-t-2 border-zinc-300 border-b-2 flex gap-10 whitespace-nowrap overflow-hidden '>
           <h1 className='font-["Test_Founders_Grotesk_X_Condensed"] leading-none text-[24vw] uppercase'>We are Ouchi</h1>
           <h1 className='font-["Test_Founders_Grotesk_X_Condensed"] leading-none text-[24vw] uppercase'>We are Ouchi</h1>
        </div>
    </div>
  )
}

export default Marquee