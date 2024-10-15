import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'

function Experience() {
  return (
    <div className='pb-4'>
      <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration: 0.5}}
        className="text-black font-bold my-20 text-center text-4xl">Work Experience</motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:-100}}
              transition={{duration:1}}
              className='w-full lg:w-1/4'>
              <p className="text-black mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:100}}
              transition={{duration:1}}
              className="w-full max-w-xl lg:w-3/4">
              <h6 className='text-black mb-2 font-semibold'>
                {experience.role} - {" "}
                <span className='text-black text-sm text-purple-100'>
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-gray-600 text-justify">{experience.description}</p>
              <p className="mb-4 text-neutral-400 text-justify font-bold">{experience.trivia}</p>
              {experience.technologies.map((tech, index) => (
                <span key={index} className='mr-2 mt-4 rounded bg-blue-100 px-2 py-1 text-sm font-medium text-blue-800'>
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
