import React from 'react';
import Header from './Header';
import hero_img from '../assets/alisher.png';
import '../index.css';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='w-full bg-contain bg-no-repeat bg-hero-img bg-[400px] xl:bg-right bg-[#FFC017]
   '>
      <Header />

      <div className="flex justify-between lg:items-center overflow-hidden  align-elements ">
        <div className="max-w-[464px] flex flex-col gap-[30px] pb-3">
          <h1 className='hero-name text-[40px] sm:text-[50px] lg:text-[77px]'>Alisher Rustamov</h1>
          <p className='max-w-[287px] text-[15px] sm:text-[17px]'>
            Malevich Consulting asoschilardan biri va 16 yillik SERVIS bo‘yicha mutaxassis
          </p>
         <NavLink to={'social'}>
         <button className='w-[160px] py-5 px-[10px] bg-[#000] rounded-[14px] text-[18px] font-extrabold leading-6 text-[#fff]'>
            Men haqimda
          </button>
         </NavLink>
        </div>

        

<div className='flex items-end  relative  '>
          <div
            className='absolute top-0 left-10 2xl:left-24 w-[200px] h-[338px] sm:w-[280px] sm:h-[438px] lg:w-[370px] lg:h-[638px] bg-[#fff] rotate-[-150deg] z-20 rounded-[240px] '
           
          ></div>
          <img src={hero_img} alt="alisher" className='max-w-[350px] pr-14 sm:pr-0 sm:max-w-[448px] sm:h-[424px] 2xl:max-w-[693px] 2xl:h-[661px]  hero-img z-50 ' />
        </div>

        

      </div>
    </div>
  );
};

export default Hero;