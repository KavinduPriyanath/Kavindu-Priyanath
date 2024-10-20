import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import { FaSquareUpwork } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Services({togglePopup}) {
  return (
    <div>
      <div className="pb-4 mt-40">
        <h1 className='mb-10 text-center text-4xl'>
          <span className="text-6xl text-neutral-500 leading-none">“</span>
          From concept to completion, I deliver immersive, engaging, and impactful gaming experiences tailored to your needs. Let’s create something extraordinary together.”</h1>
          <div className="flex justify-center space-x-4 mb-20">
            {/* Upwork Button */}
            <a href='https://www.upwork.com/freelancers/~016534ca3acaa0bf22?mp_source=share' target='_blank'>
            <button className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-400 transition-all">
              <FaSquareUpwork className="mr-2 text-2xl" />
              <span>Hire me on Upwork</span>
            </button></a>

            {/* Email Button */}
            <button onClick={togglePopup} className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-400 transition-all">
              <MdEmail className="mr-2 text-2xl" />
              <span>Send an Email</span>
            </button>
          </div>
          <div>
    {PROJECTS.map((project, index) => (
      <div key={index} className="mb-8 flex flex-wrap lg:flex-nowrap lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/6 lg:mr-4">
          <img
            src={project.image}
            alt={project.title}
            className="mb-6 w-full lg:w-auto rounded"
          />
        </motion.div>
        <div className="w-full max-w-xl lg:w-3/4">
          <h6 className="mb-2 font-bold text-black text-2xl">{project.title}</h6>
          <p className="mb-4 text-gray-600">{project.description}</p>
          <ul className="list-disc list-inside text-gray-600">
            {project.offers.map((offer, index) => (
              <li key={index} className="text-gray-500">{offer}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
      </div>
    </div>
  )
}

export default Services
