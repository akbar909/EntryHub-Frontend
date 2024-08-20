import React from 'react'
import { motion } from 'framer-motion';
import mdcat from '../assets/mdcat.png'
import ecat from '../assets/ecat.png'
import {Link} from 'react-router-dom'


function Courses() {
  return (
    <div id='courses' className='lg:px-28 md:px-20 px-10'>
      <motion.div
        className="text-white mx-auto dark:shadow-yellow-300 dark:shadow-lg text-center text-2xl font-extrabold  bg-[#235191] self-center lg:w-[292px] md:w-[250px] w-[200px] max-w-full justify-center items-center mt-20  lg:py-4 md:py-3 py-2 rounded-[32px] max-md:mt-10 max-md:px-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        COURSES
      </motion.div>
      <div className="self-center mx-auto w-full max-w-[1075px] mt-20 max-md:max-w-full max-md:mt-10">
        <div className="gap-5  flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <Link to="https://drive.google.com/file/d/1wiak8FZZleK7U5Y2TcdFYewHKyehxUfN/view?usp=drivesdk" target="_blank" >
            <motion.img

              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              alt='mdcat'
              src={mdcat}
              className="aspect-[1.53] rounded-lg object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
            </Link>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <Link to="https://drive.google.com/file/d/1wej-zCyjSuxS6lqVXKvikHVduUKpZtiB/view?usp=drivesdk" target="_blank" >
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              alt='ecat'
              src={ecat}
              className="aspect-[1.53] rounded-lg object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses