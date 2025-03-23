import React from "react";
import { features } from "../constants";
import { Mmotion } from "../../AminationProps"

function FeatureSection() {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <Mmotion>
        <span
          className="bg-neutral-900 text-purple-500 rounded-full h-6
        text-sm font-medium px-2 uppercase"
        >
          feature
        </span>
        </Mmotion>
        <Mmotion>
        <h2
          className="text-3xl sm:text-5xl lg:text-6xl font-bold mt-10
        lg:mt-20 tracking-wide"
        >
          Easily build{" "}
          <span
            className="bg-gradient-to-r from-purple-600
          to-purple-950 text-transparent bg-clip-text"
          >
            your code
          </span>
        </h2>
        </Mmotion>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div className="w-full sm:w-1/2 lg:w-1/3" key={index}>
            <div className="flex">
              <div
                className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-purple-700
              justify-center items-center rounded-full"
              ><Mmotion>{feature.icon}</Mmotion>
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl "> {feature.label} </h5>
                <p className="text-md p-2 mb-10 text-neutral-500">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
