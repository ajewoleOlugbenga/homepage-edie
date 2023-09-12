import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";

const Cards = () => {
  return (
    <>
      <section className="flex flex-wrap">
        <div className="w-[401px] mx-auto cursor-pointer hover:shadow-lg focus:shadow-lg mb-10 pb-7">
          <div className=" ml-5 bg-blue-500 w-[67px] h-[67px] flex items-center justify-center text-3xl text-white rounded-xl my-5">
            <FaPencilAlt />
          </div>
          <h1 className="ml-5 text-2xl font-bold mb-5">UI/UX Design</h1>
          <p className="w-[303px] ml-5 mb-5 text-xl text-gray-500 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
          <button className="ml-5 bg-gray-200 p-3 rounded-xl font-semibold text-xl flex items-center justify-center hover:text-white hover:bg-blue-500 focus:bg-blue-500 focus:text-white">
            Get started
          </button>
        </div>
        <div className="w-[401px] mx-auto cursor-pointer hover:shadow-lg focus:shadow-lg my-20 pb-7">
          <div>
            <span className="ml-5 bg-green-500 w-[67px] h-[67px] flex items-center justify-center text-3xl text-white rounded-xl my-5">
              &lt; &gt;
            </span>
          </div>
          <h1 className="text-2xl font-bold ml-5">Front End</h1>
          <p className="w-[303px] text-xl mb-5 text-gray-500 ml-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
          <button className="ml-5  bg-gray-200 p-3 rounded-xl font-semibold text-xl flex items-center justify-center hover:text-white hover:bg-blue-500 focus:bg-blue-500 focus:text-white">
            Get started
          </button>
        </div>
        <div className="w-[401px] mx-auto cursor-pointer hover:shadow-lg focus:shadow-lg my-20 pb-7">
          <div className="ml-5 bg-orange-500 w-[67px] h-[67px] flex items-center justify-center text-3xl text-white rounded-xl my-5">
            <BsFillMenuButtonWideFill />
          </div>
          <h1 className="ml-5 text-2xl font-bold">Back End</h1>
          <p className="ml-5 w-[303px] text-xl text-gray-500 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
          <button className="ml-5 bg-gray-200 p-3 rounded-xl font-semibold text-xl flex items-center justify-center hover:text-white hover:bg-blue-500 focus:bg-blue-500 focus:text-white">
            Get started
          </button>
        </div>
      </section>
    </>
  );
};

export default Cards;
