import React from 'react'
import img1 from '../assets/flexPictures/flexImg1.png'
import img2 from '../assets/flexPictures/flexImg2.png'
import img3 from '../assets/flexPictures/flexImg3.png'
import img4 from '../assets/flexPictures/flexImg4.png'
import YoutubeVidio from './YoutubeVidio'
import { NavLink } from 'react-router-dom'

const FlexInfo = () => {
    const title='Portugal and I are very much in Love - is here are 5 reasons why? What is'
    const date='13.08.2022'
  return (
    <div className='flex_info-wrapper'>

        <div className='flex justify-between   gap-10 '>
            <div>
            <h1 className='text-[20px] font-extrabold text-[#000] hover:text-[#ffc017]'>{title}</h1>
            <span className='inline-block mt-4 card-time'>{date}</span>
            </div>

            <img src={img1} alt={title} className='object-contain w-[200px] h-[120px]'  />
        </div>

        <div className='flex justify-between   gap-10 '>
            <div>
            <h1 className='text-[20px] font-extrabold text-[#000] hover:text-[#ffc017]'>{title}</h1>
            <span className='inline-block mt-4 card-time'>{date}</span>
            </div>

            <img src={img2} alt={title} className='object-contain w-[200px] h-[120px]'  />
        </div>

{/* Youtube vidio */}
<div ><YoutubeVidio/></div>
{/*  */} 


<div className='flex justify-between  gap-10 '>
            <div>
            <h1 className='text-[20px] font-extrabold text-[#000] hover:text-[#ffc017]'>{title}</h1>
            <span className='inline-block mt-4 card-time'>{date}</span>
            </div>

            <img src={img3} alt={title} className='object-contain w-[200px] h-[120px]'  />
        </div>

        <div className='flex justify-between  gap-10 '>
            <div>
            <h1 className='text-[20px] font-extrabold text-[#000] hover:text-[#ffc017]'>{title}</h1>
            <span className='inline-block mt-4 card-time'>{date}</span>
            </div>

            <img src={img4} alt={title} className='object-contain w-[200px] h-[120px]'  />
        </div>

<div className=' flex justify-center '>
<NavLink to={'social'} className='p-5 bg-[#000] text-[#fff] hover:text-[#ffc017] rounded-[14px] italic font-[900] max-w-[223px]'>Ko‘proq maqolalar</NavLink> 
</div>    
    </div>
  )
}

export default FlexInfo