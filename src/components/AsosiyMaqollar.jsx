import React from 'react'
import info_img1 from '../assets/infoPictures/info1.png'
import info_img2 from '../assets/infoPictures/info2.png'
import info_img3 from '../assets/infoPictures/info3.png'
import info_img4 from '../assets/infoPictures/info4.png'
const AsosiyMaqollar = () => {
    const title= 'Xayotda shunday vaziyatlar bo‘ladiki, kimdan yordam so‘ramang…'
    const text='Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul qilish kerak emas ekan…'
    const date='13.08.2022'
  return (
    <div className=' mt-[70px] grid grid-col-2'>
      <div className=' hidden  lg:flex lg:flex-col gap-8  max-w-[1051px]'>
      <div className='flex   justify-between'>
            <div className='max-w-[523px] flex flex-col gap-[10px]'>
            <h1 className='card-title '>{title}</h1>
            <p className='hidden lg:inline-block'>{text}</p>
            <span className='card-time'>{date}</span>
        </div>

        <img src={info_img1} alt="" className='w-[180px] lg:w-[318px] lg:h-[202px]'/>
        </div>
        
        <div className='flex  justify-between'>
            <div className=' max-w-[523px] flex flex-col gap-[10px]'>
            <h1 className='card-title '>{title}</h1>
            <p className='hidden lg:inline-block'>{text}</p>
            <span className='card-time'>{date}</span>
        </div>

        <img src={info_img2} alt="" className='w-[180px] lg:w-[318px] lg:h-[202px]'/>
        </div>

        <div className='flex   justify-between'>
            <div className='max-w-[523px] flex flex-col gap-[10px]'>
            <h1 className='card-title '>{title}</h1>
            <p className='hidden lg:inline-block'>{text}</p>
            <span className='card-time'>{date}</span>
        </div>

        <img src={info_img3} alt="" className='w-[180px] lg:w-[318px] lg:h-[202px]'/>
        </div>

        <div className='flex   justify-between'>
            <div className='max-w-[523px] flex flex-col gap-[10px]'>
            <h1 className='card-title '>{title}</h1>
            <p className='hidden lg:inline-block'>{text}</p>
            <span className='card-time'>{date}</span>
        </div>

        <img src={info_img4} alt="" className='w-[180px] lg:w-[318px] lg:h-[202px]'/>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-5 sm:hidden'>
       <div className='max-w-[180px] hover:scale-95'>
       <img src={info_img1} alt="" />
        <h4 className='card-title mt-5 mb-6'>{title}</h4>
        <span className='card-time'>{date}</span>

       </div>

       <div className='max-w-[180px] hover:scale-95'>
       <img src={info_img2} alt="" className=''/>
        <h4 className='card-title mt-5 mb-6'>{title}</h4>
        <span className='card-time'>{date}</span>

       </div>

       <div className='max-w-[180px] hover:scale-95'>
       <img src={info_img3} alt="" />
        <h4 className='card-title mt-5 mb-6'>{title}</h4>
        <span className='card-time'>{date}</span>

       </div>

       <div className='max-w-[180px] hover:scale-95'>
       <img src={info_img4} alt="" />
        <h4 className='card-title mt-5 mb-6'>{title}</h4>
        <span className='card-time'>{date}</span>

       </div>
      </div>
    </div>
  )
}

export default AsosiyMaqollar