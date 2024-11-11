import React, { useState, useRef } from 'react';
import profilePic from "../assets/Kavindu.jpg";
import { motion } from 'framer-motion';
import Tooltip from './Tooltip';
import Notification from './Notification';
import { FaCloudDownloadAlt } from "react-icons/fa";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

function Hero({ togglePopup }) {
    const [tooltip, setTooltip] = useState({ text: '', position: { top: 0, left: 0 } });
    const [notification, setNotification] = useState(null);
    const notificationTimeout = useRef(null);

    const showTooltip = (text, event, positionType = 'bottom-left') => {
        const rect = event.target.getBoundingClientRect();
        const position = positionType === 'bottom-right' 
            ? { top: rect.bottom + window.scrollY + 10, left: rect.right + window.scrollX - 180 }
            : { top: rect.bottom + window.scrollY + 10, left: rect.left + window.scrollX };

        setTooltip({ text, position });
    };

    const hideTooltip = () => setTooltip({ text: '', position: { top: 0, left: 0 } });

    const addNotification = (message) => {
        if (notificationTimeout.current) {
            clearTimeout(notificationTimeout.current);
        }
        setNotification(message);
        notificationTimeout.current = setTimeout(() => {
            setNotification(null);
            notificationTimeout.current = null;
        }, 4000);
    };

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
                        // onMouseEnter={(e) => showTooltip("Click to download Software CV", e, 'bottom-right')}
                        // onMouseLeave={hideTooltip}
                        // onClick={() => addNotification("Downloading Software CV")}
                    >
                        Software Engineer
                    </span>
                    <span>. </span>
                    <span
                        className='hover:text-blue-500'
                        // onMouseEnter={(e) => showTooltip("Click to download Game CV", e)}
                        // onMouseLeave={hideTooltip}
                        // onClick={() => addNotification("Downloading Game CV")}
                    >
                        Game Engineer
                    </span>
                </motion.span>

                {/* Centered Buttons: Get in Touch and Download Resume */}
                <motion.div
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="mt-3 flex space-x-4"
                >
                    <button
                        onClick={togglePopup}
                        className="bg-blue-500 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-blue-400"
                    >
                        Get in Touch
                    </button>
                    <a href="https://drive.google.com/uc?export=download&id=1cUrxHcQh2M619chQQ3OX9RgMt8LJNjL-" download>
                    <button
                        onClick={() => addNotification("Downloading Resume")}
                        className="bg-green-500 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-green-400 flex items-center space-x-2"
                    >
                        
                        <FaCloudDownloadAlt  /> 
                        <span>Resume</span>
                        
                    </button>
                    </a>
                </motion.div>
            </div>

            {/* Render Tooltip */}
            {tooltip.text && <Tooltip text={tooltip.text} position={tooltip.position} />}

            {notification && (
                <div className="fixed top-4 right-4 z-50">
                    <Notification message={notification} onRemove={() => setNotification(null)} />
                </div>
            )}
        </div>
    );
}

export default Hero;
