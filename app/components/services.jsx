import Booking from "../../public/booking.png";
import Onboard from "../../public/onboard.png";
import JuiceProduct from "../../public/juice-product.png";
import SmartHome from "../../public/smarthome.jpg";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <section
        className="hidden md:block"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="md:flex md:gap-5 md:justify-center">
          <div className="w-[351px] h-[450.38px] md:mt-24">
            <Image src={SmartHome} alt="Services" className="rounded-xl" />
            <p className="text-gray-400 my-4">Full stack application</p>
            <h2 className="text-xl font-semibold">Smart home dashboard</h2>
          </div>
          <div className="w-[351px] h-[450.38px]">
            <Image src={Onboard} alt="Services" className="rounded-xl" />
            <p className="text-gray-400 mt-4">UX/UI design</p>
            <h2 className="text-xl font-semibold">Onboard application</h2>
          </div>
        </div>
        <div className="md:flex md:gap-5 md:justify-center">
          <div className="w-[351px] h-[450.38px] md:mt-24">
            <Image src={Booking} alt="Services" className="rounded-xl" />
            <p className="text-gray-400 mt-4">Mobile application</p>
            <h2 className="text-xl font-semibold">Booking system</h2>
          </div>
          <div className="w-[351px] h-[450.38px]">
            <Image src={JuiceProduct} alt="Services" className="rounded-xl" />
            <p className="text-gray-400 mt-4">Front End application</p>
            <h2 className="text-xl font-semibold">Juice product homepage</h2>
          </div>
        </div>
      </section>
      <section className="block md:hidden">
        <div className="md:flex md:gap-5 md:justify-center">
          <div className="w-[351px] h-[450.38px] mx-auto">
            <Image src={SmartHome} alt="Services" className="rounded-xl" />
            <p className="text-gray-400 my-4">Full stack application</p>
            <h2 className="text-xl font-semibold">Smart home dashboard</h2>
          </div>
          <div className="w-[351px] h-[450.38px] mx-auto">
            <Image src={Onboard} alt="Services" className="rounded-xl" />
            <p className="text-gray-400 mt-4">UX/UI design</p>
            <h2 className="text-xl font-semibold">Onboard application</h2>
          </div>
        </div>
        <div className="md:flex md:gap-5 md:justify-center">
          <div className="w-[351px] h-[450.38px] mx-auto">
            <Image src={Booking} alt="Services" className="rounded-xl" />
            <p className="text-gray-400 mt-4">Mobile application</p>
            <h2 className="text-xl font-semibold">Booking system</h2>
          </div>
          <div className="w-[351px] h-[450.38px] mx-auto">
            <Image src={JuiceProduct} alt="Services" className="rounded-xl" />
            <p className="text-gray-400 mt-4">Front End application</p>
            <h2 className="text-xl font-semibold">Juice product homepage</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
