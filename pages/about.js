import React from "react";
import Wrapper from "@/components/Wrapper";

import Link from "next/link";
import Image from "next/image";
import ProjectTeam from "@/components/ProjectTeam";

const About = () => {
  return (
    <div className="max-w-[1200px] py-10 flex items-center m-auto">
      <Wrapper>
        <div className="flex justify-center mix-blend-color-burn">
          <Image
            src="/aboutnikelogo.jpg"
            width={200}
            height={200}
            alt="Nike Logop"
          />
        </div>

        
          <blockquote className="sm:m-0 md:m-5 py-4">
            <p class="sm:mx-0 pl-4 md:text-2xl italic font-oswald border-l-4 md:pl-10 border-gray-900 font-medium my-5 md:mx-10  ">
              This is a student’s college project about an online campaign for Nike Inc.
            </p>
          </blockquote>
        

        <div>
          <p className="text-md pb-10 md:text-black font-AbrilFatface  md:text-2xl md:pb-8  ">
            <span className="font-extrabold text-lg md:text-2xl">
              Nike, Inc.
            </span>{" "}
            is an American multinational association that is involved in the
            design, development, manufacturing and worldwide marketing and sales
            of apparel, footwear, accessories, equipment and services.
          </p>
          <p className="text-md pb-10 md:text-black font-AbrilFatface  md:text-2xl md:pb-8  ">
            The company’s world headquarters are situated near Beaverton,
            Oregon, in the Portland metropolitan area (USA). It is a major
            producer of sports equipment and one of the world’s largest
            suppliers of athletic shoes and apparel.
          </p>
          <p className="text-md pb-10 md:text-black font-AbrilFatface  md:text-2xl md:pb-8  ">
            It employs more than 44,000 people worldwide and in 2014 the brand
            alone was valued as $19 billion (€17,5 billion), making it the most
            valuable brand between sports businesses.Founded by Bill Bowerman
            and Phil Knight on January 25 1964, as Blue Ribbon Sports, the
            company became officially Nike, Inc. on May 30 1971. The company was
            named after the Greek goddess of victory, Nike (Νίκη).
          </p>
          <p className="text-md pb-10 md:text-black font-AbrilFatface  md:text-2xl md:pb-8  ">
            Apart from its own brand, Nike market its products under Nike Pro,
            Nike+, Nike Golf, Nike Blazers, Air Jordan, Air Max and other as
            well as subsidiaries including brands Jordan, Hurley Int. and
            Converse.
          </p>
          <p className="text-md pb-10 md:text-black font-AbrilFatface  md:text-2xl md:pb-8  ">
            Nike sponsors many high-profile athletes and sports teams around the
            world, with the highly recognized trademarks of “Just Do It” and the
            Swoosh logo (which represents the wing of the Greek goddess Nike).
          </p>
        </div>

        <ProjectTeam/>
      </Wrapper>
    </div>
  );
};

export default About;
