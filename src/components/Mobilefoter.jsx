import React from 'react'
import {FaFacebook ,FaYoutube } from 'react-icons/fa'
import {ImTelegram} from 'react-icons/im'
import {AiFillInstagram} from  'react-icons/ai'

const Mobilefoter = () => {
  return (
    <div className='block 2xl:hidden'>

        {/* Measage */}
        <div id='information' className='w-full bg-[#f6f7f8] py-[54px] flex justify-center mt-[70px]'>
            <div className='max-w-[400px]'>
            <h3 className='text-[20px] font-extrabold text-[#000] text-center mb-5'>Xabar qoldirish</h3>
            <p className='text-center mb-5'>Alisher Rustamovga o‘z fikrlaringiz, munosabatlaringizni bildirish imkoniyatingiz bor!</p>

            <form action="https://t.me/Ergashev48_09"  className='relative rounded-[10px] overflow-hidden border-solid border-[0.5px] border-[#000]'>
                <input type="text" placeholder='Xabar qoldirish' className='w-full h-[50px] pl-5 
                pr-[145px] outline-none  '/>
                <button type='submit' className='w-[139px] h-full absolute top-0 right-0 bg-[#000] text-[#fff]' >Yuborish</button>
            </form>
            </div>
        </div>

        {/* Social media */}
      
        <div className='flex items-center flex-col mt-[70px]'>
            <h4 className='text-[20px] font-extrabold text-[#000] w-full mb-5 text-center'>Ijtimoiy tarmoqlar</h4>

            <div className='grid grid-col-1 sm:grid-cols-2 gap-5 lg:gap-20'>
            <a href="#" >
                <span className='social_media-box'><FaFacebook className='w-[24px] h-[24px]'/> Facebook</span>
            </a>

            <a href="#" >
                <span className='social_media-box'><ImTelegram className='w-[24px] h-[24px]'/> Telegram</span>
            </a>

            <a href="#" >
                <span className='social_media-box'><AiFillInstagram className='w-[24px] h-[24px]'/> Instagram</span>
            </a>

            <a href="#" >
                <span className='social_media-box'><FaYoutube className='w-[24px] h-[24px]'/> Youtube</span>
            </a>
            </div>
        </div>
    
    </div>
  )
}

export default Mobilefoter