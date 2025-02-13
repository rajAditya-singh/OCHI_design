import React from 'react'

function About() {
    return (
        <div className='w-full bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl'>
            <div className='py-24 px-10 -mb-10 flex '>
                <h1 className='text-[4.5vw] font-normal leading-none tracking-tighter text-zinc-900 '>Ochi is a strategic presentation agency for forward-thinking businesses that need to <u className='underline-offset-1'>raise funds, sell prod­ucts, ex­plain com­plex ideas</u>, and <u className='underline-offset-1'>hire great peo­ple</u>.</h1>
            </div>

            <div className='border-t-2 border-zinc-600 text-zinc-900 flex justify-evenly px-16'>
                <div className='w-1/2'>
                    <div><h3 className=''>What you can expect:</h3></div>
                </div>
                <div className='w-1/2'>

                    <div className='flex justify-around'>
                        <div className='flex flex-col w-1/2 mr-20 gap-4 text-md font-semibold'>
                            <p>
                                We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.</p>
                            <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                        </div>

                        <div className=' ml-20 w-1/2 flex flex-col justify-end items-start gap-4'>
                            <p>S:</p>
                            <ul>
                                <li>Instagram</li>
                                <li>Behance</li>
                                <li>Facebook</li>
                                <li>Linkdin</li>
                            </ul>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default About