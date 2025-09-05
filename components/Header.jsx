import React from 'react'
import Image from "next/image"
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className=' py-5 px-5 md:px-12 lg:px-28 '>
      <div className="flex justify-between items-center  ">
        <Image src={assets.logo} alt='' width={180} className='w-[130px] sm:w-auto   ' />
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] '>Get started <Image alt='' src={assets.arrow} /></button>

      </div>

    <div className="text-center my-8">
        <h1 className='text-3xl sm:text-5xl'>Latest Blogs</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Est asperiores accusantium exercitationem commodi delectus adipisci expedita ad! Quis, perspiciatis? Placeat.</p>
        <form action="" className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000] ' >
            <input type="email" className='pl-4 outline-none' placeholder='Enter your email' />
            <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-green-600 active:text-white cursor-pointer ' >Subscribe</button>
        </form>
    </div>

    </div>
  )
}

export default Header
