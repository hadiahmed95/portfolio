'use client'
import {useState, useEffect} from 'react'
import HeroSection from '@/Components/HeroSection'
import Experience from '@/Components/Experience'
import Projects from '@/Components/Projects'
import Skills from '@/Components/Skills'
import "aos/dist/aos.css";
import Loader from '@/Components/Loader'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import About from '@/Components/About'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setInterval(()=>{setLoading(false)}, 2000);
  },[])
  
  return (
    <>
    {loading === true ? (
      <div className='w-full h-[100vh] flex justify-center items-center bg-[#212428]'>
        <Loader/>
      </div>
    ):(
      <>
      <Navbar/>
    <div>
      <HeroSection/>
      <Experience/>
      <Projects/>
      <About/>
      <Skills/>
    </div>
      <Footer/>
      </>
    )}
    </>
  )
}
