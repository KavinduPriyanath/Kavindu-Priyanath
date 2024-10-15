import React from 'react'
import {HERO_CONTENT} from "../constants"
import profilePic from "../assets/Kavindu.jpg"
import { delay, m, motion } from 'framer-motion'
import { FaFileDownload } from "react-icons/fa";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {x:0, opacity:1, transition: {duration: 0.5, delay: delay}},
})

function Hero({togglePopup}) {
  return (
    <div className='pb-4 lg:mb-35'>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Kavindu Priyanath</motion.h1>
                    <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                        Game Engineer
                    </motion.span>
                    <motion.div
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        onClick={togglePopup}
                        className="mt-8 bg-gradient-to-r from-blue-300 to-blue-500 text-white font-bold py-2 px-4 rounded shadow-md hover:bg-gradient-to-l">
                        Get in Touch
                    </motion.div>
                    {/* Download CV Button */}
                    <motion.a 
                        variants={container(1.5)}
                        initial="hidden"
                        animate="visible"
                        href="https://drive.google.com/uc?export=download&id=1HLUdgcmv7zplW03R_TqA5tEx6psNoqbJ" // Replace with your CV's file path or URL
                        download 
                        className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                    >
                        <FaFileDownload className="mr-2 text-2xl" />
                        <span>Resume</span>
                    </motion.a>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                <motion.img 
                    initial={{x:100, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:1, delay:1.2}}
                    src={profilePic} 
                    alt="ProfilePic" 
                    className="w-2/3 h-auto rounded-2xl" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
