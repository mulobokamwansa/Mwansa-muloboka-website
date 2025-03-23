import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PricingOptions } from '../constants';
import { Mmotion } from "../../AminationProps"

function  Pricing() {
  return (
    <div className='mt-20'>
      <Mmotion>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl font-bold text-center my-8
      tracking-wide'>
        Pricing
      </h2>
      </Mmotion>
      <div className='flex flex-wrap'>
        {PricingOptions.map((option, index) => (
          <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <div className='p-10 border border-neutral-700 rounded-xl'>
              <Mmotion>
              <p className='text-4xl mb-8'>
                {option.title}
                {option.title === "Pro" && <span className='bg-gradient-to-r from-purple-600
                 to-pink-500 text-transparent bg-clip-text text-xl mb-4 ml-2'>(Most Popular)</span>} 
                </p>
              </Mmotion>
              <Mmotion>
                <p className='mb-8'>
                  <span className='text-5xl mt-6 mr-2'>{option.price}</span>
                  <span className='text-neutral-400 tracking-tight'>/month</span>
                </p>
                
                <ul>
                  {option.features.map((feature, index) => (
                    <li key={index} className='mt-8 flex items-center'><CheckCircle2 /> 
                    <span className='ml-2'>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href='#' className='inline-flex justify-center items-center w-full h-12
                 p-5 mt-20 tracking-tight text-xl hover:bg-purple-950 border border-purple-900 
                 rounded-lg transition duration-200 ease-in-out
                '>
                  Subscribe
                  </a>
              </Mmotion>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Pricing;