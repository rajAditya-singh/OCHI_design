import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function About() {
    return (
        <div className='w-full bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl'>

            <div className='py-24 px-14 -mb-10 flex '>
                <h1 className='font-["Neue_Montreal"] text-[4vw] font-normal leading-none text-zinc-900 '>Ochi is a strategic presentation agency for forward-thinking businesses that need to <u className='underline-offset-1'>raise funds, sell prod­ucts, ex­plain com­plex ideas</u>, and <u className='underline-offset-1'>hire great peo­ple</u>.</h1>
            </div>

            <div className='border-t-[1px] border-zinc-600 text-zinc-950 flex gap-10 justify-evenly px-16 pt-4 pb-24'>
                <div className='w-1/2 '>
                    <div><h3 className='text-lg tracking-tight'>What you can expect:</h3></div>
                </div>
                <div className='w-1/2'>
                    <div className='flex justify-around'>
                        <div className='flex flex-col w-3/4 mr-20 gap-6 text-lg leading-normal tracking-tight font-["Neue_Montreal"]'>
                            <p>We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.</p>
                            <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                        </div>
                        <div className='ml-20 w-1/2 flex flex-col justify-end items-start  text-lg font-["Neue_Montreal"]'>
                            <p>S:</p>
                            <ul>
                                <li><a href="http://www.instagram.com"><u className='underline-offset-4'>Instagram</u></a></li>
                                <li><a href="https://www.behance.net/"><u className='underline-offset-4'>Behnace</u></a></li>
                                <li><a href="https://www.facebook.com/"><u className='underline-offset-4'>Facebook</u></a></li>
                                <li><a href="https://in.linkedin.com/"><u className='underline-offset-4'>LinkedIn</u></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 border-t-2 border-zinc-700 py-5 px-8'>
                <div>
                    <h2 className='text-zinc-900 text-[4vw] leading-none font-["Neue_Montreal"] mb-6 '>Our approach:</h2>
                    <a className='flex items-center justify-evenly py-2  border-none w-fit rounded-full bg-zinc-900' href="#">
                        <p className='font-["Neue_Montreal"] text-lg px-6'>Read More</p>
                        <div className='px-2'>
                            <button className=' w-10 h-10 flex items-center justify-center bg-zinc-100 text-zinc-900 border-none border-[2px] rounded-full '><FaArrowUpLong className='rotate-45' /></button>
                        </div>
                    </a>
                </div>
                <div>
                    <img className='rounded-xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About