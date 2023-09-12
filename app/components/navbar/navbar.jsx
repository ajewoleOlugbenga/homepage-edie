"use client"

import Link from "next/link";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () =>
  setOpen(!open);

  return (
    <nav className="flex justify-between items-center">
      <h1 className="text-3xl ml-2 mt-2 font-bold">Edie</h1>
      <div className="mr-2 mt-2 text-2xl md:hidden z-10">
        <GrMenu onClick={handleToggleOpen} 
        className="cursor-pointer"
        />
        { open && ( <section className="fixed top-10 right-0 w-full h-auto z-10 bg-white rounded-md shadow-lg">
          <ul className="flex flex-col mr-2 ">
        <li className="text-right hover:text-3xl hover:font-bold" onClick={handleToggleOpen} >
          <hr/>
          <Link href="/#home">Home</Link>
        </li>
        <li className="text-right hover:text-3xl hover:font-bold" onClick={handleToggleOpen} >
        <hr/>
          <Link href="/#services">Services</Link>
        </li>
        <li className="text-right hover:text-3xl hover:font-bold" onClick={handleToggleOpen} >
        <hr/>
          <Link href="/#our-Work">Our Works</Link>
        </li>
        <li className="text-right hover:text-3xl hover:font-bold" onClick={handleToggleOpen} >
        <hr/>
          <Link href="/#client">Clients</Link>
        </li>
        <li className="text-right hover:text-3xl hover:font-bold" onClick={handleToggleOpen} >
        <hr/>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul> 
        </section>


        ) }
        {/*       */}
      </div>
      <ul className="hidden md:flex mr-5 font-semibold">
        <li className="mr-7">
          <Link href="/#home">Home</Link>
        </li>
        <li className="mr-7">
          <Link href="/#services">Services</Link>
        </li>
        <li className="mr-7">
          <Link href="/#our-Work">Our Works</Link>
        </li>
        <li className="mr-7">
          <Link href="/#client">Clients</Link>
        </li>
        <li className="mr-7">
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
