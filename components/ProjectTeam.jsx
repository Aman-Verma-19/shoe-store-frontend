import React from "react";

import Wrapper from "@/components/Wrapper";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";

import { SiGmail } from "react-icons/si";

import Link from "next/link";
import Image from "next/image";

const ProjectTeam = () => {
  return (
    <div>
      <div className="flex justify-center pb-5 text-[28px] md:text-[48px] mb-5 font-extrabold font-AbrilFatface leading-tight">
            -: Project Team :-
          </div>
      <div className="flex flex-wrap gap-3 justify-evenly mb-4">
        <div className="Team_Images mb-2  flex flex-col justify-center align-middle hover:scale-105 transition duration-400">
          <img
            src="/amantest.jpg"
            alt="projectteammember"
            className="flex justify-center m-auto w-36 border-2 md:w-44 border-blue-300 rounded-full "
          />
          <div className="py-2  font-semibold text-lg text-black/[0.7] m-auto">
            Aman Verma
          </div>
          <div className="flex flex-row justify-evenly text-lg text-black/[0.8] ">
            <Link href={"https://instagram.com/www_aman_com?igshid=ZGUzMzM3NWJiOQ=="} target="_blank" className="hover:text-black ">
              <BsInstagram />
            </Link>
            <Link href={"https://www.facebook.com/profile.php?id=100025139319852"} target="_blank" className="hover:text-black ">
              <BsFacebook />
            </Link>
            <Link href={"https://www.linkedin.com/in/aman-verma-012609201"} target="_blank" className="hover:text-black ">
              <BsLinkedin />
            </Link>
            <Link href={"mailto:amanverma200119@gmail.com"} target="_blank" className="hover:text-black ">
              <SiGmail />
            </Link>
          </div>
        </div>

        <div className="Team_Images mb-2 flex flex-col justify-center align-middle hover:scale-105 transition duration-400">
          <img
            src="/bobby1.jpg"
            alt="projectteammember"
            className="flex justify-center m-auto w-36 border-2 md:w-44 border-blue-300 rounded-full "
          />
          <div className="py-2  font-semibold text-lg text-black/[0.7] m-auto">
            Babishek Sahoo
          </div>
          <div className="flex flex-row justify-evenly text-lg text-black/[0.8] ">
            <Link href={"https://instagram.com/babishek__47?igshid=ZGUzMzM3NWJiOQ=="} target="_blank" className="hover:text-black ">
              <BsInstagram />
            </Link>
            <Link href={"https://www.facebook.com/profile.php?id=100085685970235&mibextid=ZbWKwL"} target="_blank" className="hover:text-black ">
              <BsFacebook />
            </Link>
            <Link href={"https://www.linkedin.com/in/babishek-sahoo-ab3335227"} target="_blank" className="hover:text-black ">
              <BsLinkedin />
            </Link>
            <Link href={"mailto:babishek129@gmail.com"} target="_blank" className="hover:text-black ">
              <SiGmail />
            </Link>
          </div>
        </div>
        <div className="Team_Images mb-2 flex flex-col justify-center align-middle hover:scale-105 transition duration-400">
          <img
            src="/sephali.jpg"
            alt="projectteammember"
            className="flex justify-center m-auto w-36 border-2 md:w-44 border-blue-300 rounded-full "
          />
          <div className="py-2  font-semibold text-lg text-black/[0.7] m-auto">
            Sephali Bose
          </div>
          <div className="flex flex-row justify-evenly text-lg text-black/[0.8] ">
            <Link href={"https://www.instagram.com/invites/contact/?i=140s9ctfzv0hz&utm_content=l513t2j"} target="_blank" className="hover:text-black ">
              <BsInstagram />
            </Link>
            <Link href={"https://www.facebook.com/cuty.sephali.5"} target="_blank" className="hover:text-black ">
              <BsFacebook />
            </Link>
            <Link href={"https://www.linkedin.com/in/sephali-bose-4763bb253"} target="_blank" className="hover:text-black ">
              <BsLinkedin />
            </Link>
            <Link href={"mailto:sephalibose2001@gmail.com"} target="_blank" className="hover:text-black ">
              <SiGmail />
            </Link>
            
          </div>
        </div>
        <div className="Team_Images mb-2 flex flex-col justify-center align-middle hover:scale-105 transition duration-400">
          <img
            src="/Sambit.jpg"
            alt="projectteammember"
            className="flex justify-center m-auto w-36 border-2 md:w-44 border-blue-300 rounded-full "
          />
          <div className="py-2  font-semibold text-lg text-black/[0.7] m-auto">
            Sambit Kumar Sahu
          </div>
          <div className="flex flex-row justify-evenly text-lg text-black/[0.8] ">
            <Link href={"https://instagram.com/sambit_kumar432?igshid=ZGUzMzM3NWJiOQ=="} target="_blank" className="hover:text-black ">
              <BsInstagram />
            </Link>
            <Link href={"https://www.facebook.com/sambitkumar.sambitkumar.526"} target="_blank" className="hover:text-black ">
              <BsFacebook />
            </Link>
            <Link href={"https://www.linkedin.com/in/sambit-kumar-sahu-66429b25a"} target="_blank" className="hover:text-black ">
              <BsLinkedin />
            </Link>
            <Link href={"mailto:lanusonu82@gmail.com"} target="_blank" className="hover:text-black ">
              <SiGmail />
            </Link>

          </div>
        </div>
        <div className="Team_Images mb-2 flex flex-col justify-center align-middle hover:scale-105 transition duration-400">
          <img
            src="/tanmay.png"
            alt="projectteammember"
            className="flex justify-center m-auto w-36 border-2 md:w-44 border-blue-300 rounded-full "
          />
          <div className="py-2  font-semibold text-lg text-black/[0.7] m-auto">
            Tanmaya Choudhury
          </div>
          <div className="flex flex-row justify-evenly text-lg text-black/[0.8] ">
            <Link href={"/"} target="_blank" className="hover:text-black ">
              <BsInstagram />
            </Link>
            <Link href={"/"} target="_blank" className="hover:text-black ">
              <BsFacebook />
            </Link>
            <Link href={"/"} target="_blank" className="hover:text-black ">
              <BsLinkedin />
            </Link>
            <Link href={"/"} target="_blank" className="hover:text-black ">
              <SiGmail />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTeam;
