"use client";

const Email = () => {
  return (
    <>
    <section className="ml-7 mt-10">
      <form action="#" method="POST" className="flex-col">
        <div className="mb-3">
        <label htmlFor="email" className="text-gray-600 ">
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
          className="absolute bg-blue-700 text-white py-2 px-4 mt-1 rounded-lg left-64 items-center md:left-96 "
        >
          Join
        </button>
        </div>
      </form>
      </section>
    </>
  );
};

export default Email;
