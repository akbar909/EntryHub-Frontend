import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

function Quiz() {
  const navigate = useNavigate();
  const { isDarkMode, isLoggedIn } = useTheme();

  const handleQuizStart = (subject) => {
    navigate(subject.toLowerCase());
  }
  return (

    <div id='quiz' className={`lg:px-28 px-10 md:px-20${isDarkMode ? 'dark' : ''}`}>
      <motion.div
        className="text-white dark:shadow-yellow-300 dark:shadow-lg mx-auto text-center text-2xl font-extrabold bg-[#235191] self-center lg:w-[292px] w-[200px] md:w[250px] max-w-full justify-center items-center mt-20  lg:py-4 md:py-3 py-2 rounded-[32px] max-md:mt-10 max-md:px-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        TAKE A QUIZ
      </motion.div>
      <motion.div
        className="text-black mx-auto text-justify dark:text-zinc-400 text-base self-center max-w-[1074px] mt-8 max-md:max-w-full "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        Challenge your knowledge and boost your learning with our
        interactive 'Take a Quiz' section, designed to assess and enhance your
        understanding in a single click.
      </motion.div>
      <div className=' flex flex-col'>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}

          onClick={() => { handleQuizStart(("english")) }} className=" text-center cursor-pointer lg:text-2xl md:text-xl font-bold bg-[#3FE0A5] hover:bg-teal-400 hover:text-white self-center lg:w-[300px] md:w-[250px] w-[200px] max-w-full justify-center items-center mt-20 px-16 lg:py-6 md:py-4 py-4 rounded-[32px] ">
          ENGLISH
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          onClick={() => { handleQuizStart(("biology")) }}
          className="text-center cursor-pointer lg:text-2xl md:text-xl font-bold bg-[#3FE0A5] hover:bg-teal-400 hover:text-white self-center lg:w-[300px] md:w-[250px] w-[200px] max-w-full justify-center items-center mt-12 px-16 lg:py-6 md:py-4 py-4 rounded-[32px] max-md:mt-10 max-md:px-5">
          BIOLOGY
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          onClick={() => { handleQuizStart(("math")) }}
          className=" text-center cursor-pointer lg:text-2xl md:text-xl font-bold bg-[#3FE0A5] hover:bg-teal-400 hover:text-white self-center lg:w-[300px] md:w-[250px] w-[200px] max-w-full justify-center items-center mt-12 px-16 lg:py-6 md:py-4 py-4 rounded-[32px] max-md:mt-10 max-md:px-5">
          MATHEMATICS
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          onClick={() => { handleQuizStart(("physics")) }}
          className=" text-center cursor-pointer lg:text-2xl md:text-xl font-bold bg-[#3FE0A5] hover:bg-teal-400 hover:text-white self-center lg:w-[300px] md:w-[250px] w-[200px] max-w-full justify-center items-center mt-10 px-16 lg:py-6 md:py-4 py-4 rounded-[32px] max-md:mt-10 max-md:px-5">
          PHYSICS
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          onClick={() => { handleQuizStart(("chemistry")) }}
          className=" text-center cursor-pointer lg:text-2xl md:text-xl font-bold bg-[#3FE0A5] hover:bg-teal-400 hover:text-white self-center lg:w-[300px] md:w-[250px] w-[200px] max-w-full justify-center items-center mt-12 px-16 lg:py-6 md:py-4 py-4 rounded-[32px] max-md:mt-10 max-md:px-5">
          CHEMISTRY
        </motion.div>

      </div>



    </div>
  )
}

export default Quiz