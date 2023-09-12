import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import Email from '../email'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
     <footer className='bg-black text-white w-full h-[593px] md:h-[305px] md:flex md:gap-72'>
        <section className='flex-col md:w-[92px] md:h-[180px] md:ml-20' >
            <ul className=''>
            <li className='ml-5 pt-7 text-2xl md:text-sm '><Link href="/#home">Home</Link></li>
            <li className='ml-5  mt-5 text-2xl md:text-sm'><Link href="/#services">Services</Link></li>
            <li className='ml-5  mt-5 text-2xl md:text-sm'><Link href="/#our-Work">Our work</Link></li>
            <li className='ml-5  mt-5 text-2xl md:text-sm'><Link href="/#client">Clients</Link></li>
           <li className='ml-5  my-5 text-2xl md:text-sm'><Link href="/#contact">Contact</Link></li> 
           </ul>
        </section>
          <section>
        <div className='text-3xl font-semibold mt-16 ml-5'>Edie</div>
        <div className='flex gap-4 mt-3 ml-5'>
            <FaInstagram className='text-2xl'/>
            <BsLinkedin className='text-2xl'/>
            <BsTwitter className='text-2xl'/>
        </div>
        </section>
        <section className='md:hidden'>
            <Email/>
        </section>
        <section className="ml-7 mt-10 hidden md:block">
      <form action="#" method="POST" className="flex-col">
        <div className="mb-3">
        <label htmlFor="email" className=" ">
          Want us to contact you?
        </label>
        </div>
        <div>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          className="w-[291px] relative p-3 text-xl"
        />
        <button
          type="submit"
          className="absolute bg-blue-700 text-white py-2 px-4 mt-1 rounded-lg items-center right-10"
        >
          Join
        </button>
        </div>
      </form>
      </section>
      </footer>
    </>
  )
}

export default Footer
