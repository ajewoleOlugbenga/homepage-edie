import Image from "next/image";
import Person1 from "../../public/person1.png";
import Person2 from "../../public/person2.png";
import Person3 from "../../public/person3.png";

const Teams = () => {
  return (
  <>
  <section className="w-[349.32px] flex mt-7 mx-auto">
    <div className="my-auto">
    <Image src={Person3} alt="teams" className="w-[178.16px] h-auto rounded-xl"/>
    </div>
    <div className="flex-col items-center mx-auto">
    <Image src={Person1} alt="teams" className="w-[162.25px] h-[162.25px] rounded-xl "/>
    <Image src={Person2} alt="teams" className="w-[162.25px] h-[162.25px] rounded-xl mt-2"/>
    </div>
  </section>
  </>
  )
}

export default Teams
