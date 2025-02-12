import React from "react";
import { IoSend } from "react-icons/io5";

const Form = () => {
  return (
    <div>
      <form action="" className="mt-[1%] w-full">
        {/* Name */}
        <div className="">
          <input
            type="text"
            placeholder="Full Name"
            className="border w-full border-[#000] p-5 focus:text-black input:text-red-500 outline-none rounded-[5px]"
          />
        </div>

        {/* Email */}
        <div className="mt-[3%]">
          <input
            type="email"
            placeholder="Email"
            className="border border-[#000] w-full p-5 focus:text-black input:text-red-500 outline-none rounded-[5px]"
          />
        </div>

        {/* Message */}
        <div className="mt-[3%]">
          <textarea
            name="msg"
            id="msg"
            placeholder="What can i help you with?"
            className="border border-[#000] w-full p-5 focus:text-black input:text-red-500 outline-none rounded-[5px]"></textarea>
        </div>

        {/* btn */}
        <div className="mt-[3%]">
          <button className=" pt-3 pb-3 px-4 inline-flex border border-[#27272A] hover:bg-[#000] hover:text-white rounded-[5px] transition ease-in duration-300 bg-secondary text-black">
            Send Message <IoSend className="mt-[2px] ml-2 text-2xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
