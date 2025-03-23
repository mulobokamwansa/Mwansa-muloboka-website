import React from "react";
import { CheckCircle2 } from "lucide-react";
import CodeImage from "../../assets/codeImage.png";
import { checklistItems } from "../constants";
import { Mmotion } from "../../AminationProps"

function Workflow() {
  return (
    <div className="mt-20">
      <Mmotion>
      <h2
        className="text-3xl font-bold sm:text-5xl 
      lg:text-6xl text-center tracking-wide mt-6"
      >
        Accelete your{" "}
        <span className="bg-gradient-to-r from-purple-600 to-purple-950 text-transparent bg-clip-text">
          codding workflow
        </span>
      </h2>
      </Mmotion>
      <Mmotion>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={CodeImage} alt="" />
        </div>
        <div className="p-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div
                className="text-green-500 mx-6 bg-neutral-900 h-10 w-10 p-2
            justify-center items-center rounded-full"
              >
                <CheckCircle2 />
              </div>
              <div>
              <h5 className="mt-1 mb-2 text-xl">{ item.title }</h5>
              <p className="text.md text-neutral-500">{ item.description }</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Mmotion>
    </div>
  );
}

export default Workflow;
