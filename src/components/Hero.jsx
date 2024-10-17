import React from 'react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Kavindu.jpg";
import { motion } from 'framer-motion';
import { FaFileDownload } from "react-icons/fa";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

function Hero({ togglePopup }) {
    return (
        <div className='flex-grow min-h-screen flex flex-col items-center justify-center'> {/* Use flex-grow */}
            <div className="flex flex-col items-center justify-center">
                {/* Profile Image */}
                <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    src={profilePic}
                    alt="ProfilePic"
                    className="rounded-full w-24 sm:w-32 md:w-40 lg:w-48 xl:w-48 h-auto mx-auto sm:mt-1 mb-4"
                />

                {/* Name */}
                <motion.h1
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className='pb-4 text-[15px] lg:text-[30px] text-center text-black'
                >
                    Hi! I'm Kavindu Priyanath👋
                </motion.h1>

                {/* Title */}
                <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className='text-black text-[20px] lg:text-[50px] text-center mb-4'
                >
                    Game Engineer. Software Engineer
                </motion.span>

                {/* Buttons: Get in Touch and Download Resume */}
                <motion.div
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col lg:flex-row gap-4 mt-2 justify-center"
                >
                    <button
                        onClick={togglePopup}
                        className="bg-blue-800 text-white font-bold py-2 px-4 rounded-xl shadow-md hover:bg-blue-400"
                    >
                        Get in Touch
                    </button>

                    <a
                        href="https://drive.google.com/uc?export=download&id=1HLUdgcmv7zplW03R_TqA5tEx6psNoqbJ"
                        download
                        className="flex items-center px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-400 transition-all font-bold"
                    >
                        <FaFileDownload className="mr-2 text-xl" />
                        <span>Resume</span>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;
