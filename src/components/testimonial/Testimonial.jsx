import React from "react";
import { testimonials } from "../constants";
import { Mmotion } from "../../AminationProps"

function Testimonial() {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl font-bold sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 ">
        What Our Clients Say
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className=" bg-neutral p-6 border border-neutral-800 text-md rounded-md font-thin ">
              <p className="">{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h6>{testimonial.user}</h6> 
                  <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
