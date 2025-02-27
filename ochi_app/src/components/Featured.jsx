/* eslint-disable react/jsx-key */
import { motion, useAnimation } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function Featured() {
    const cards = [useAnimation(), useAnimation()]

    const handleHover = (index) => {
        cards[index].start({ y: "0" })
    }

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }
    return (
        <div className='w-full py-20  '>
            <div className='w-full px-20 border-b-[1px] text-5xl border-zinc-600 pb-20 '>
                <h1 className='font-["Neue_Montreal"] text-zinc-200 '>Featured projects</h1>
            </div>

            <div className='px-10'>
                <div className='cards w-full flex gap-5 mt-10 '>
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className='cardContainer relative w-1/2'>
                        <span className='flex items-center gap-2 mb-4'>
                            <div className='w-3 h-3 rounded-full bg-zinc-200'></div>
                            <p className='font-[Neue_Montreal] text-sm'>FYDE</p>
                        </span>
                        <h1 className='absolute flex overflow-hidden text-[#CDEA68]  leading-none tracking-tighter font-bold  text-8xl left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10'>
                            {"FYDE".split('').map((item, index) =>
                                <motion.span
                                    className='inline-block'
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}>
                                    {item}
                                </motion.span>)}
                        </h1>
                        <div className='w-full h-[75vh] rounded-xl overflow-hidden'>
                            <div className='card w-full h-full'>
                                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png" alt="" />
                            </div>
                        </div>
                        <div className='btn flex py-2 gap-1'>
                            <button className='border-zinc-600 border-[1px] rounded-full px-3 py-1 font-["Neue_Montreal"] text-zinc-200 font-light text-sm uppercase'>audit</button>
                            <button className='border-zinc-600 border-[1px] rounded-full px-3 py-1 font-["Neue_Montreal"] text-zinc-200 font-light text-sm uppercase'>copywriting</button>
                            <button className='border-zinc-600 border-[1px] rounded-full px-3 py-1 font-["Neue_Montreal"] text-zinc-200 font-light text-sm uppercase'>sales deck</button>
                            <button className='border-zinc-600 border-[1px] rounded-full px-3 py-1 font-["Neue_Montreal"] text-zinc-200 font-light text-sm uppercase'>slides design</button>
                        </div>
                    </motion.div>
                    <motion.div 
                    onHoverStart={() => handleHover(1)}
                    onHoverEnd={() => handleHoverEnd(1)}
                    className='cardContainer relative w-1/2'>
                        <span className='flex items-center gap-2 mb-4'>
                            <div className='w-3 h-3 rounded-full bg-zinc-200'></div>
                            <p className='font-[Neue_Montreal] text-sm'>TRAWA</p>
                        </span>
                        <h1 className='absolute flex overflow-hidden text-[#CDEA68]  leading-none tracking-tighter font-bold  text-8xl right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10'>
                            {"TRAWA".split('').map((item, index) => 
                            <motion.span
                            className='inline-block'
                            initial={{ y: "100%" }}
                            animate={cards[1]}
                            transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}>
                            {item}
                        </motion.span>)}
                        </h1>
                        <div className='w-full h-[75vh] rounded-xl overflow-hidden'>
                            <div className='card w-full h-full'>
                                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                            </div>
                        </div>
                        <div className='btn flex py-2 gap-1'>
                            <button className='border-zinc-600 border-[1px] rounded-full px-3 py-1 font-["Neue_Montreal"] text-zinc-200 font-light text-sm uppercase'>brand identity</button>
                            <button className='border-zinc-600 border-[1px] rounded-full px-3 py-1 font-["Neue_Montreal"] text-zinc-200 font-light text-sm uppercase'>design research</button>
                            <button className='border-zinc-600 border-[1px] rounded-full px-3 py-1 font-["Neue_Montreal"] text-zinc-200 font-light text-sm uppercase'>investor deck</button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className=' w-full flex justify-center pt-20'>
                <a className='flex items-center justify-evenly py-1 border-none w-fit rounded-full bg-zinc-100' href="#">
                    <p className='font-["Neue_Montreal"] text-zinc-800 uppercase text-sm font-semibold px-5 leading-none '>view all case studies</p>
                    <div className='px-1'>
                        <button className=' w-10 h-10 flex items-center justify-center bg-zinc-900 text-zinc-100 
                        border-none border-[2px] rounded-full '><FaArrowUpLong className='rotate-45' /></button>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Featured