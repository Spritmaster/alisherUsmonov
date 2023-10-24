import React from 'react'
import {FaFacebook ,FaYoutube } from 'react-icons/fa'
import {ImTelegram} from 'react-icons/im'
import {AiFillInstagram ,AiOutlineLeft} from  'react-icons/ai'
import { NavLink } from 'react-router-dom'


const MoreInfo = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start px-10 items-center py-10 max-w-[1000px] mx-auto'>
    <div className=' w-[200px] mb-[70px] flex flex-col gap-4 sm:mr-[80px] lg:mr-[170px]'>
<h5 className='text-[20px] font-extrabold text-[#000] w-[210px] mb-5'>Mashhur maqolalar</h5>

<div  className='flex flex-col gap-[10px]'>
<p className='hover:text-[#ffc017]'>Boy-otaning xayotidan...</p>
<span className='inline-block card-time'>13.08.2022</span>
<hr />
</div>
<div  className='flex flex-col gap-[10px]'>
<p className='hover:text-[#ffc017]'>Hech kim velosiped minib tug‘ilmagan.</p>
<span className='iinline-block card-time'>13.08.2022</span>
<hr />
</div>
<div className='flex flex-col gap-[10px]'>
<p className='hover:text-[#ffc017]'>Talabalik davrida ishlash yomonmi?</p>
<span className='inline-block card-time'>13.08.2022</span>
<hr />
</div>

<div  className='flex flex-col gap-[10px]'>
<p className='hover:text-[#ffc017]'>Sizda qaysi kuchli resursingiz bor?</p>
<span className='inline-block card-time'>13.08.2022</span>
<hr />
</div>

    </div>

    <div className='flex  flex-col'>
        <h4 className='text-[20px] font-extrabold text-[#000] w-[210px] mb-10'>Ijtimoiy tarmoqlar</h4>

        <div className='flex flex-col gap-[10px] items-center'>
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

    <NavLink to={'/'} className='absolute top-10 right-10 sm:relative sm:top-0 sm:right-0 text-2xl font-bold flex gap-2 items-center hover:text-[#ffc017]'><AiOutlineLeft/> Exit</NavLink>
</div>
  )
}

export default MoreInfo