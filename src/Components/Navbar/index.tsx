"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '@/assets/logo-new.svg'
import { useRouter } from "next/navigation";
import ContactModal from '../Modal/ContactUS'
import Styles from './navbar.module.css'

const Header = () => {
    const router = useRouter()
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    return (
        <>
        <div id={'header'} className="w-full sticky top-0 sm:z-20 z-10 transition-all duration-300 bg-[#212428] border-b border-[#333639] h-[100px]">
            <div className="sm-width h-[100px] flex items-center justify-center">
                <div className="flex justify-between w-[80%] items-center px-4">
                    <div>
                        <Link href={'/'} className="flex text-white items-center">
                            <Image className="w-[70px]" src={Logo} alt='logo' />
                            <p className='ml-5'>Hadi{"'"}s portfolio</p>
                        </Link>
                    </div>

                    <div className="text-white">
                        <div className={Styles['nav-btn']}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"
                            onClick={() => setOpenMobileMenu(!openMobileMenu)}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                            </svg>
                        </div>
                        <div className={Styles['nav-link']}>
                        <Link href={'/#home'} className="px-4 lg:px-5 hover:text-[var(--blue)] transition-all duration-300">HOME</Link>
                            <Link href={'/#experience'} className="px-4 lg:px-5 hover:text-[var(--blue)] transition-all duration-300">EXPERIENCE</Link>
                            <Link href={'/#projects'} 
                            className="p-4 lg:p-5 hover:text-[var(--blue)] transition-all duration-300">PROJECTS</Link>
                            <Link href={'/#skills'} 
                            className="p-4 lg:p-5 hover:text-[var(--blue)] transition-all duration-300">SKILLS</Link>
                            <Link href={'/#about'} 
                            className="p-4 lg:p-5 hover:text-[var(--blue)] transition-all duration-300">About Us</Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className={`fixed inset-0 bg-[#212428] text-white z-10 ${!openMobileMenu ? '-translate-x-full' : 'translate-x-0'} duration-500 transition-all`}>
                <div className="absolute top-2 right-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                    onClick={() => setOpenMobileMenu(!openMobileMenu)}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>

                <div className="flex flex-col my-5">
                    <div className="p-4 lg:p-5 cursor-pointer" onClick={()=>{
                        setOpenMobileMenu(false)
                        router.push('/#home')
                    }}>HOME</div>
                    <div className="p-4 lg:p-5 cursor-pointer" onClick={()=>{
                        setOpenMobileMenu(false)
                        router.push('/#experience')
                    }}>EXPERIENCE</div>
                    <div className="p-4 lg:p-5 cursor-pointer" onClick={()=>{
                        setOpenMobileMenu(false)
                        router.push('/#projects')
                    }}>PROJECTS</div>
                    <div className="p-4 lg:p-5 cursor-pointer" onClick={()=>{
                        setOpenMobileMenu(false)
                        router.push('/#skills')
                    }}>SKILLS</div>
                    <div className="p-4 lg:p-5 cursor-pointer" onClick={()=>{
                        setOpenMobileMenu(false)
                        router.push('/#about')
                    }}>About Us</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header