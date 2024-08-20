import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Team from '../components/Team'
import Courses from '../components/Courses'
import Quiz from '../components/Quiz'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useTheme } from '../components/ThemeContext';

function Home() {
  const { isDarkMode } = useTheme();
  return (
    <section className={isDarkMode ? 'dark' : ''}>
    <div id='/home'
    className="bg-cyan-500 dark:bg-zinc-900 bg-opacity-10 flex flex-col">
        <Navbar />
        <Hero  />
        <About />
        <Team />
        <Courses />
        <Quiz />
        <Footer />

    </div>
    </section>
  )
}

export default Home