import React from 'react'
import style from './loader.module.css'
import Image from 'next/image'
import Logo from '@/assets/logo-new.svg'

function SpinLoader() {
  return (
    <div className={style.loaderContainer}>
        <div className={style.loader}>
            <div className={style.loaderInner}>
            <Image 
                src={Logo}
                alt="logo"
                width={80}
                height={80}
            />
            </div>
            <div className={style.spinner}></div>
        </div>
    </div>
  )
}

export default SpinLoader