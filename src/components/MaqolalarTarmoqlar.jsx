import React from 'react'
import {FaFacebook ,FaYoutube } from 'react-icons/fa'
import {ImTelegram} from 'react-icons/im'
import {AiFillInstagram} from  'react-icons/ai'

const MaqolalarTarmoqlar = () => {
  return (
    <div className='hidden 2xl:inline-block'>
        <div className=' 2xl:flex 2xl:flex-col w-[200px] mb-[70px]'>
<h5 className='text-[20px] font-extrabold text-[#000] w-[210px] mb-5'>Mashhur maqolalar</h5>

<div>
    <p>Boy-otaning xayotidan...</p>
    <span className='inline-block mt-[10px] mb-[10px] py-3  px-[10px] bg-[#F6F7F8] rounded-[8px]'>13.08.2022</span>
    <hr />
</div>
<div>
    <p>Hech kim velosiped minib tug‘ilmagan.</p>
    <span className='inline-block mt-[10px] mb-[10px] py-3  px-[10px] bg-[#F6F7F8] rounded-[8px]'>13.08.2022</span>
    <hr />
</div>
<div>
    <p>Talabalik davrida ishlash yomonmi?</p>
    <span className='inline-block mt-[10px] mb-[10px] py-3  px-[10px] bg-[#F6F7F8] rounded-[8px]'>13.08.2022</span>
    <hr />
</div>

<div>
    <p>Sizda qaysi kuchli resursingiz bor?</p>
    <span className='inline-block mt-[10px] mb-[10px] py-3  px-[10px] bg-[#F6F7F8] rounded-[8px]'>13.08.2022</span>
    <hr />
</div>

        </div>

        <div>
            <h4 className='text-[20px] font-extrabold text-[#000] w-[210px] mb-5'>Ijtimoiy tarmoqlar</h4>

            <div className='flex flex-col gap-[10px]'>
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

export default MaqolalarTarmoqlar