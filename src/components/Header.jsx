import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import hamburger from '../assets/hambergermenu.png'
import {RxCross2} from 'react-icons/rx'
import uzb from '../assets/uz.png'
import rus from '../assets/ru.png'
import en from '../assets/gb.png'
import bottomlinear  from '../assets/bottom.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [burgerSty ,setBurgerSty] =useState('hidden')
    const [languageSty,setLanguageSty] =useState('hidden')
    const [til,setTil] =useState("O'zbek")

    const widowChange =()=>{
        window.addEventListener('resize',()=>{setBurgerSty('hidden')})
    }
    widowChange()

  return (
    <div className='flex justify-between py-[28px]  align-elements'>
        <div className='flex items-center'>
        <img src={Logo} alt="logo" width={134} height={34} />

        

        <div className='hidden sm:flex items-center  sm:ml-[30px]  lg:ml-[60px]  gap-5'>
        <NavLink to={'social'}><h4 className='py-[1px]'>Maqolalar</h4></NavLink>
        <NavLink to={'social'}><h4 className='py-[1px]'>Ijtimoiy tarmoqlar</h4></NavLink>
        </div>
    </div>


    <div className='flex gap-[30px]'>
        {/* Language dropdown */}
        <select className='b-none outline-none text-[16px] leading-6 bg-transparent hidden sm:inline-block '>
            <option selected value className='text-xl font-bold p-5'>O'zbek</option>
            <option value className='text-xl font-bold p-5'>English</option>
            <option value className='text-xl font-bold p-5'>Rusion</option>
        </select>
        {/* Send Massage */}
       <a href="#information" className='hidden xl:flex py-3 px-5 bg-[#000] rounded-[10px] text-[#fff]'>Xabar qoldirish</a>
    </div>

    {/* burger */}
    <div className='inline-block sm:hidden pr-5 cursor-pointer '>
        <img src={hamburger} alt="" onClick={()=>{setBurgerSty('inline-block')}}/>
        
    </div>

    <div className={`w-full h-screen bg-[#fff] absolute z-[100] top-0 left-0 ${burgerSty} p-5`}>
       <span className='flex justify-end'> <RxCross2 className='bg-[#ffc017] rounded-[10px] w-[50px] h-[39px] '
       onClick={()=>{setBurgerSty('hidden')}}/></span>

       <div className='inline-flex flex-col items-center w-full gap-[45px]'>
       <NavLink to={'social'} className='burger-box text-center mt-[60px]'>Maqolalar</NavLink>
       <NavLink to={'social'} className='burger-box'>Ijtimoiy tarmoqlar</NavLink>
       <div className='inline-flex flex-col'>
         <span className='burger-box mb-4' 
         onClick={()=>{setLanguageSty('inline-flex')}}
         onDoubleClick={()=>setLanguageSty('hidden')}
         >{til} 
         <img src={bottomlinear} alt="" /></span>
        <div className={`${languageSty} flex-col gap-3 `}>
        <span className='burger-box' onClick={()=>{setTil("O'zbek"),setLanguageSty('hidden')}}>
            <img src={uzb} alt="" />
            O'zbek</span>
        <span className='burger-box' onClick={()=>{setTil("English"),setLanguageSty('hidden')}}>
            <img src={en} alt="" />
            English</span>
        <span className='burger-box' onClick={()=>{setTil("Русский"),setLanguageSty('hidden')}}>
            <img src={rus} alt="" />
            Русский</span>
        </div>
        </div>


       </div>
    </div>
    </div>
  )
}

export default Header