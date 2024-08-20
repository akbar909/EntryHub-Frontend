import React from 'react'
import { motion } from "framer-motion";
import { useTheme } from './ThemeContext';
function About() {
  const { isDarkMode } = useTheme();
  return (
    <section id='about' className={isDarkMode ? 'dark' : ''}>
          <motion.div
          className="text-white mx-auto text-center text-2xl dark:shadow-yellow-300 dark:shadow-lg font-extrabold bg-[#235191] self-center lg:w-[292px]  w-[200px] md:w-[250px] justify-center items-center mt-20  lg:py-4 py-2 md:py-3 rounded-[32px] max-md:mt-10 lg:px-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          
        >
        ABOUT
      </motion.div>
      <motion.div
       className="text-black dark:text-zinc-400 text-center text-2xl font-extrabold mx-auto mt-10 max-md:mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          >
        
        MISSION AND VISION
      </motion.div>
      
      <motion.div
      className="text-black dark:text-gray-300 dark:bg-zinc-800   dark:rounded-md px-10 md:px-20 lg:px-5 text-justify lg:text-2xl md:text-xl self-center max-w-[1073px] mx-auto mt-10  max-md:mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once : true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}

        >
        At<span className="font-extrabold "> EntryHub</span>, our mission is to
        provide comprehensive and effective entry test preparation resources for
        engineering and medical aspirants. We understand the challenges students
        face in preparing for these crucial exams, and our vision is to become a
        leading platform that empowers students to achieve their academic goals.
        We aim to offer high-quality content, expert guidance, and a
        user-friendly interface to enhance the learning experience for our
        students.
      
      </motion.div>
    </section>
  )
}

export default About