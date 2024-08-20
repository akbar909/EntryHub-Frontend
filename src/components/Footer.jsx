import React from 'react'
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";
import Icon from './Icon';
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from './ThemeContext';
function Footer() {
  const { isDarkMode } = useTheme();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className={`bg-[#235191] dark:bg-zinc-800 lg:px-28 px-10 md:px-20 mt-16 ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex items-center justify-between ">
        <div className='flex items-center gap-1'>
          <Icon />
          <div className="logo text-white font-bold mt-3 text-4xl max-md:max-w-full">EntryHub</div>
        </div>


        <div className="text-white text-xl font-semibold">
          <p>Follow us</p>
          <div className='flex gap-4'>
            <Link to="https://twitter.com" target="_blank" >
              <FaXTwitter className='text-gray-500 w-8 h-8 p-1 bg-white rounded-sm' />
            </Link>
            <Link to="https://linkedin.com" target="_blank" >
              <FaLinkedinIn className='text-gray-500 w-8 h-8 p-1 bg-white rounded-sm' />
            </Link>

            <Link to="https://facebook.com" target="_blank" >
              <FaFacebookF className='text-gray-500 w-8 h-8 p-1 bg-white rounded-sm' />
            </Link>

            <Link to="https://instagram.com" target="_blank">
              <FaInstagram className='text-gray-500 w-8 h-8 p-1 bg-white rounded-sm' />
            </Link>
          </div>
        </div>

        <div className='hidden md:block '>
          <div className="text-white text-xl  font-semibold ">Contacts</div>
          <div className="text-white text-opacity-50  ">
            Address : Naseem Nagar Qasimabad
            <br />
            Email : entryhub@gmail.com
            <br />
            Phone Number : +92 3278119622
          </div>
        </div>
      </div>

      <div className='text-white text-center mt-5 mb-3'>
        All Copyrights reserved
      </div>
    </motion.div>
  )
}

export default Footer