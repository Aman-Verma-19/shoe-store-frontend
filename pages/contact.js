import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import { RiSendPlane2Fill } from "react-icons/ri";

const Success = () => {
  return (
    <Wrapper>
      <div>
        <div className="flex justify-center font-urbanist font-extrabold text-3xl py-10">
          Contact Me
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14952.253905413243!2d85.89105248154861!3d20.462585893014356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190d7a181999fd%3A0xe48e3475c7591d81!2sRavenshaw%20University%2C%20Cuttack!5e0!3m2!1sen!2sin!4v1683569301216!5m2!1sen!2sin"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mb-10"
        ></iframe>

        <form
          action="https://formspree.io/f/mqkonvkz"
          method="POST"
          className="w-[95%] md:flex justify-center flex-col m-auto md:w-[50%]"
        >
          <div className="relative mb-4">
            <label for="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="username"
              autoComplete="off"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required
              autoComplete="off"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Enter Message..."
              autoComplete="off"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-auto justify-center items-center flex mb-10">
            <span className="pr-2"> Send Message</span>
            <span>
              {" "}
              <RiSendPlane2Fill />
            </span>
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Success;
