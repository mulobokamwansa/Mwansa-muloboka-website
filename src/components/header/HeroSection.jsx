import React from "react";
import Video1 from "../../assets/detactionvideo.mp4";
import Video2 from "../../assets/codeweb.mp4";
import { Mmotion } from "../../AminationProps"



function HeroSection(props) {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-26">
      <Mmotion>
      <h1 className="text-4xl font-bold  sm:text-6xl lg:text-7xl text-center tracking-wide">
        Mithead building tools
        <span className="bg-gradient-to-r from-purple-600 to-purple-950 text-transparent bg-clip-text ">
          {" "} for developers
        </span>
      </h1>
      </Mmotion>
      <Mmotion>
      <p className=" mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Mithead is a forward-thinking company dedicated to empowering developers by crafting tools that streamline workflows and foster innovation.
       By focusing on enhancing productivity and addressing key challenges in software development, 
       Mithead builds intuitive, reliable solutions that cater to the ever-evolving needs of the tech community. 
       Their tools are designed with precision, enabling developers to create, 
       collaborate, and deploy projects with greater efficiency and confidence. 
      With a commitment to quality and user experience, Mithead continues to play a vital role in shaping the future of development.
      </p>
      </Mmotion>
      <div className="flex justify-center my-10">
        <Mmotion>
        <a href="#" className="bg-gradient-to-r from-purple-600 to-purple-950 
        py-3 px-4 mx-3 rounded-md ">
          Start for free 
        </a>
        </Mmotion>
        <Mmotion>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
        </Mmotion>
      </div>
        <div className="flex mt-10 justify-center">
          <video autoPlay loop muted className="rounded-lg w-1/2 border border-purple-700
           shadow-purple-500 mx-2 my-4">
            <source src={Video1} type="video/mp4" />
            Your browser does not suport the video tag.
           </video>
           <video autoPlay loop muted className="rounded-lg w-1/2 border border-purple-700
           shadow-purple-500 mx-2 my-4">
            <source src={Video2} type="video/mp4" />
            Your browser does not suport the video tag.
           </video>

        </div>

    </div>
  );
}

export default HeroSection; 
