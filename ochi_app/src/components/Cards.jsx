import React from 'react'

function Cards() {
    return (
        <div data-scroll data-scroll-speed="-0.3" className='w-full h-screen flex px-10 gap-4 items-center'>
            <div className='container w-1/2 h-[60vh]'>
                <div className='card relative w-full h-full rounded-xl flex items-center justify-center bg-emerald-900 '>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute border-[1px] text-md font-sans font-semibold border-[#CDEA68] text-[#CDEA68] 
                    bottom-6 left-6 px-2 rounded-full border-[]'>&copy;2019-2022</button>
                </div>

            </div>
            <div className='container w-1/2 h-[60vh] flex gap-4'>
                <div className='card relative w-1/2 rounded-xl h-full bg-slate-800 flex items-center justify-center'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute border-[1px] text-md font-sans font-semibold border-zinc-300 text-zinc-300 
                    bottom-6 left-6 px-2 rounded-full border-[] uppercase leading-none tracking-tighter py-1'>Rating 5.0 on clutch</button>
                </div>
                <div className='card relative w-1/2 rounded-xl h-full bg-[#212121] flex items-center justify-center'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute border-[1px] text-md font-sans font-semibold  border-zinc-300 text-zinc-300  
                    bottom-6 left-7 px-2 rounded-full border-[] uppercase leading-none tracking-tighter py-1'>business bootcamp alumni</button>
                </div>
            </div>
        </div>
    )
}

export default Cards