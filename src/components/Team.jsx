import React from 'react'
import junaid from '../assets/junaid.jpg'
import akbar from '../assets/akbar.jpg'
import { motion } from "framer-motion";
import { useTheme } from './ThemeContext';
function Team() {
  const { isDarkMode } = useTheme();
  return (
    <div className={`lg:px-28 mx-auto md:px-20 px-10 ${isDarkMode ? 'dark' : ''}`}>
      <motion.div
        className="text-black mx-auto dark:text-zinc-300  text-center text-2xl font-extrabold self-center mt-16 max-md:mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        MEET OUR TEAM
      </motion.div>
      <div className="self-center w-full max-w-[1074px] mt-12  max-md:max-w-full max-md:mt-10">
        <div className="gap-20 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col md:mt-20 lg:mt-0 items-stretch max-md:w-full max-md:ml-0">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              src={junaid} alt='Junaid'
              className=" rounded-lg lg:w-[2000px]  lg:h-[383px] overflow-hidden   max-md:mt-10"
            />
          </div>
          <div className="flex flex-col  max-md:w-full max-md:ml-0">
            <div className="text-black  text-justify lg:text-2xl md:text-xl   max-md:max-w-full max-md:mt-10">
              <motion.div
                className="font-extrabold dark:text-gray-300 dark:bg-zinc-800 p-2  dark:rounded-md  text-3xl text-center lg:mt-4 uppercase"

                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Junaid Laghari


              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className='mt-4 dark:text-white'>
                  <span className="font-extrabold dark:text-[#e8eb34]">Qualification</span>: Bachelor of
                  Science in Computer Science Engineering
                </p>
                <p className='lg:mt-4 mt-2 md:mt-3 md:leading-7 lg:leading-9 dark:text-white'>
                  <span className="font-extrabold dark:text-[#e8eb34]">Expertise:</span> Junaid brings a solid background in computer science engineering to the team. With a strong foundation in programming and system design, he contributes to the technical aspects of the website.

                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>


      <div className="self-center w-full max-w-[1074px] mt-12  max-md:max-w-full max-md:mt-10">
        <div className="gap-20 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col md:mt-20 lg:mt-0 items-stretch max-md:w-full max-md:ml-0">
            <motion.img
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, x: -50 },
               visible: { opacity: 1, x: 0 },
             }}
              src={akbar} alt='Akbar'
              className=" rounded-lg lg:w-[2050px] lg:h-[400px] overflow-hidden  max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col  max-md:w-full max-md:ml-0">
            <div className="text-black  text-justify lg:text-2xl md:text-xl   max-md:max-w-full max-md:mt-10">
              <motion.div
                className="font-extrabold dark:text-gray-300 dark:bg-zinc-800 p-2  dark:rounded-md text-3xl text-center lg:mt-4 uppercase"

                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Ghulam Akbar</motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >

                <p className='mt-4 dark:text-white'>
                  <span className="font-extrabold dark:text-[#e8eb34]">Qualification</span>: Bachelor of
                  Engineering in Computer System's Engineering
                </p>
                <p className='lg:mt-4 mt-2 md:mt-3 md:leading-7 lg:leading-9 dark:text-white'>
                  <span className="font-extrabold dark:text-[#e8eb34]">Expertise:</span>  Ghulam Akbar brings a solid
                  background in Computer System's Engineering to the team. with a strong
                  foundation in programming and system design, he contributes to the
                  technical aspects of projects.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team