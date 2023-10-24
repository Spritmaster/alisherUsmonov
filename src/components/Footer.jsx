import React from 'react'
import {FaFacebook ,FaYoutube } from 'react-icons/fa'
import {ImTelegram} from 'react-icons/im'
import {AiFillInstagram} from  'react-icons/ai'

const Footer = () => {
  return (
    <div id='information' className='flex justify-center 2xl:justify-between bg-[#222] py-[92px] 2xl:py-[73px] 2xl:px-[160px] mt-[70px]'>
        <div className='flex flex-col gap-[30px] max-w-[287px] text-center 2xl:text-start 2xl:gap-[10px]'>
            <h3 className='text-[30px] font-[700] text-[#fff] '>Alisher Rustamov</h3>
            <p className='text-[#fff]'>Malevich Consulting asoschilardan biri va 16 yillik SERVIS bo‘yicha mutaxassis</p>
        </div>

        <div className='hidden 2xl:block ' >
            <div className='max-w-[400px]'>
            <h3 className='text-[20px] font-extrabold text-[#fff]  mb-5'>Xabar qoldirish</h3>
            <p className=' mb-5 text-[#fff]'>Alisher Rustamovga o‘z fikrlaringiz, munosabatlaringizni bildirish imkoniyatingiz bor!</p>

            <form action="https://t.me/Ergashev48_09"  className='relative rounded-[10px] overflow-hidden border-solid border-[0.5px] border-[#000]'>
                <input type="text" placeholder='Xabar qoldirish' className='w-full h-[50px] pl-5 
                pr-[145px] outline-none  '/>
                <button type='submit' className='w-[139px] h-full absolute top-0 right-0 bg-[#FFC017] text-[#000]' >Yuborish</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Footer