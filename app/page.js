"use client";

import React, { useState } from "react";

import Email from "./components/email";
import Image from "next/image";
import HeroImage from "../public/heroImage.jpg";
import Cards from "./components/cards";
import Services from "./components/services";
import Navbar from "./components/navbar/navbar";
import { BsArrowRight } from "react-icons/bs";
import Teams from "./components/teams";
import Person4 from "../public/person4.png";
import Footer from "./components/footer/footer";


const Page = () => {


  return (
    <>
      <main className="overflow-x-hidden" id="home">
        <span className="">
           <Navbar/>
        </span>
       
        <section className="mx-auto">
          <div className="text-blue-400 font-semibold mt-10 ml-6 mb-2 md:ml-48">
            Unhappy with your website?
          </div>
          <p className="w-[272px] text-4xl font-semibold ml-6 md:w-[383px] md:ml-52 mb-4 ">
            We create beautiful and fast web services
          </p>
          <div className="my-5">
            <Image
              src={HeroImage}
              alt="HeroImage"
              className="w-[348px] h-auto mx-auto rounded-lg md:w-[1202px] "
            />
          </div>
          <div className="md:ml-32">
          <p className="w-[227px] text-3xl h-auto ml-5 mb-6">
            Story, emotion and purpose
          </p>
          <p className="w-[275px] ml-5 font-thin text-sm">
            We help transform your ideas into real world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time.
          </p>
          <Email />
          </div>
        </section>
        <section className="" id="our-Work">
          <h1 className="text-3xl font-semibold w-[259px] my-14 ml-10 md:">
            We offer high demand services
            </h1>
        </section>
        <section>
          <Cards />
        </section>
        <section id="services">
          <h1 className="w-[267px] font-semibold text-2xl mx-auto mt-16 mb-10">Good design means good business</h1>
        </section>
        <section >
          <Services />
        </section>
        <section className="md:ml-96 md:inline-flex" >
        <button className="flex items-center gap-3 text-blue-400 text-xl font-semibold mb-16 ml-4 md:ml-96">
          see more <BsArrowRight />
        </button>
        </section>

        <section className="md:flex md:items-center md:w-[1103.43px] md:justify-around ">
        <div className="">
          <h1 className="w-[280px] text-red-600 font-semibold text-xl ml-5 my-4">Meet the team</h1>
          <p className="text-4xl w-[280px] font-semibold ml-5 mb-4">We are chilled and a laidback team</p>
          <p className="w-[173px] ml-5 font-thin text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <Teams />
        </div>
        </section>
        <section className="w-[351px] justify-center mx-auto my-20 md:w-[937px] " id="client">
          <h2 className="w-[351px] text-3xl font-semibold md:w-[707px] ">
            “Fast and outstanding resutls. Edie understands their customer’s
            needs. They have a young and talented team.”
          </h2>
          <div className="flex gap-10 items-center mt-8">
            <Image src={Person4} alt="Person" className="w-[82px] h-auto rounded-xl "/>
            <div className="">
              <h1 className="text-2xl font-semibold top-0  border-red-900 border-solid" id="contact">Carlos Tran</h1>
              <p className="text-xl text-gray-400 bottom-0">The Decorate Gatsby</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
      <Footer />
      </footer>
    </>
  );
};

export default Page;
