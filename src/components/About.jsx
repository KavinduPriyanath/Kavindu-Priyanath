import React from 'react'
import aboutImg from "../assets/About.jpeg"
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'
import { FaLinkedin } from "react-icons/fa6";

function About() {
  return (
    <div className='pb-4 flex justify-center'>
      <div className="flex flex-wrap w-full lg:w-4/5"> {/* Centers the entire component */}
        <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:0.5}}
          className="w-full lg:w-1/2 lg:p-12"> {/* Increased padding from left */}
          <div className="flex items-center justify-center lg:justify-end"> {/* Align image slightly smaller */}
              <img className='rounded-2xl w-3/4 lg:w-2/3' src={aboutImg} alt="about" /> {/* Image is smaller */}
          </div>
        </motion.div>

        <div className="w-full lg:w-1/2 flex flex-col justify-start">
          <h1 className="text-black font-bold mt-12 text-left lg:text-left text-4xl">Who am I?</h1> {/* Aligned to top left */}
          <div className="flex justify-center lg:justify-start">
            <p className='my-2 max-w-xl text-gray-600 py-6 text-justify'>{ABOUT_TEXT}</p> {/* About text justified */}
          </div>
          {/* Email Button */}
          <div className="flex justify-center lg:justify-start mt-2">
            <a href="https://www.linkedin.com/in/kavindu-priyanath/" target='_blank'>
            <button className='flex bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-400 inline-block'>
                <FaLinkedin className="mr-2 text-2xl" />
                <span>Let's Connect</span>
              </button>
            </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About;
