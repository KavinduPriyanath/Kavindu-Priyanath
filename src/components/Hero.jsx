import React, { useState } from 'react';
import profilePic from "../assets/Kavindu.jpg";
import { motion } from 'framer-motion';
import Tooltip from './Tooltip';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

function Hero({ togglePopup }) {
    const [tooltip, setTooltip] = useState({ text: '', position: { top: 0, left: 0 } });

    const showTooltip = (text, event, positionType = 'bottom-left') => {
        const rect = event.target.getBoundingClientRect();
        const position = positionType === 'bottom-right' 
            ? { top: rect.bottom + window.scrollY + 10, left: rect.right + window.scrollX - 180 } // adjust -80 for tooltip width
            : { top: rect.bottom + window.scrollY + 10, left: rect.left + window.scrollX };

        setTooltip({ text, position });
    };

    const hideTooltip = () => setTooltip({ text: '', position: { top: 0, left: 0 } });

    return (
        <div className='flex-grow min-h-screen flex flex-col items-center justify-center'>
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

                {/* Title with Tooltips */}
                <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className='text-black text-[20px] lg:text-[50px] text-center mb-4'
                >
                    <span
                        className='hover:text-blue-500'
                        onMouseEnter={(e) => showTooltip("Click to download Game CV", e)}
                        onMouseLeave={hideTooltip}
                    >
                        <a href="https://drive.google.com/uc?export=download&id=1sLuiIl0EsV-VK7hf6cH8UIAz5SGotdS-" download>
                            Game Engineer
                        </a>
                    </span>
                    <span>. </span>
                    <span
                        className='hover:text-blue-500'
                        onMouseEnter={(e) => showTooltip("Click to download Software CV", e, 'bottom-right')}
                        onMouseLeave={hideTooltip}
                    >
                        <a href="https://drive.google.com/uc?export=download&id=1yOLF3djLuW_3x2fCdhmIcCDN1LbtLdui" download>
                            Software Engineer
                        </a>
                    </span>
                </motion.span>

                {/* Centered Get in Touch Button */}
                <motion.div
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="mt-3"
                >
                    <button
                        onClick={togglePopup}
                        className="bg-blue-500 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-blue-400"
                    >
                        Get in Touch
                    </button>
                </motion.div>
            </div>

            {/* Render Tooltip */}
            {tooltip.text && <Tooltip text={tooltip.text} position={tooltip.position} />}
        </div>
    );
}

export default Hero;
