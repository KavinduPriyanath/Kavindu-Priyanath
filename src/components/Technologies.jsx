import React from 'react'

//Game Engines
import { FaUnity } from "react-icons/fa6";
import { SiUnrealengine } from "react-icons/si";
import { SiGodotengine } from "react-icons/si";

//Languages
import { SiCsharp } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { BiLogoPhp } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";

//Graphics
//import { SiOpengl } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { AiOutlineKubernetes } from "react-icons/ai";


//Web & Database
import { RiReactjsLine} from 'react-icons/ri'
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";

//Version Controlling
import { FaBitbucket } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

//Tools
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import { SiAutodeskmaya } from "react-icons/si";
import { SiAudacity } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { RiFlutterFill } from "react-icons/ri";
import { SiJira } from "react-icons/si";
import { RiNotionFill } from "react-icons/ri";
import { FaTrello } from "react-icons/fa";


import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

function Technologies() {
  return (
    <div className='pb-24'>
      <h1 className="text-black font-bold my-20 text-center text-4xl">Technologies</h1>
      <motion.h2
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate" 
        className="mt-8 mb-4 text-center text-2xl text-blue-700 font-bold">Programming</motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4"> 
      <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className='text-3xl text-blue-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCsharp className='text-3xl text-blue-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCplusplus   className='text-3xl text-blue-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiDotnet className='text-3xl text-blue-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiJavaLine className='text-3xl text-blue-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPhp  className='text-3xl text-blue-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTypescript className='text-3xl text-blue-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiJavascript className='text-3xl text-blue-700' />
        </motion.div>
      </div>

      <motion.h2
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate" 
        className="mt-8 mb-4 text-center text-2xl text-purple-500 font-bold">Game Engines</motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaUnity className='text-3xl text-purple-400' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiUnrealengine className='text-3xl text-purple-400' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiGodotengine className='text-3xl text-purple-400' />
        </motion.div>
        </div>
        
      <motion.h2 
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate"
        className="mt-8 mb-4 text-center text-2xl text-sky-700 font-bold">Cloud</motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaDocker className='text-3xl text-sky-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <AiOutlineKubernetes className='text-3xl text-sky-700' />
        </motion.div>
      </div>

      <motion.h2 
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate"
        className="mt-8 mb-4 text-center text-2xl text-green-700 font-bold">Web & Database</motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className='text-3xl text-green-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiNodejs className='text-3xl text-green-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className='text-3xl text-green-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiNextjsFill className='text-3xl text-green-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaAngular className='text-3xl text-green-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbSql  className='text-3xl text-green-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5  className='text-3xl text-green-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3Alt className='text-3xl text-green-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandThreejs className='text-3xl text-green-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssFill className='text-3xl text-green-700' />
        </motion.div>
      </div>

      <motion.h2
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate" 
        className="mt-8 mb-4 text-center text-2xl text-cyan-400 font-bold">Version Controlling</motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGit  className='text-3xl text-cyan-400' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGithub  className='text-3xl text-cyan-400' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaBitbucket className='text-3xl text-cyan-400' />
        </motion.div>
      </div>

      <motion.h2
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate" 
        className="mt-8 mb-4 text-center text-2xl text-red-700 font-bold">Tools</motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiAdobephotoshop  className='text-3xl text-red-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiAdobeillustrator  className='text-3xl text-red-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiAdobepremierepro className='text-3xl text-red-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiBlender className='text-3xl text-red-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiAutodeskmaya className='text-3xl text-red-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiAudacity className='text-3xl text-red-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <CgFigma className='text-3xl text-red-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiFlutterFill className='text-3xl text-red-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiJira className='text-3xl text-red-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiNotionFill className='text-3xl text-red-700' />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaTrello className='text-3xl text-red-700' />
        </motion.div>
      </div>

    </div>
  )
}

export default Technologies
