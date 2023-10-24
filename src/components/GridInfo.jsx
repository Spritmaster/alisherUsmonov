import React from 'react'
import card1 from '../assets/cardPictures/card1.png'
import card2 from '../assets/cardPictures/card2.png'
import card3 from '../assets/cardPictures/card3.png'
import MaqolalarTarmoqlar from './MaqolalarTarmoqlar.jsx'
import YoutubeVidio from './YoutubeVidio'
import AsosiyMaqollar from './AsosiyMaqollar'

const GridInfo = () => {

    const images=[card1 ,card2 ,card3]

    const info=[
        {
            id:0,
            title:'Motivasiya bergim keladi ayrim payt',
            text:'Lekin men etib bergan hikoyalar ko‘pincha tasirli bo‘lmaydi, negadir. Hikoya so‘zlash ham bir san’at ekan.',
            date:'18.08.2022'
        },
        {
            id:1,
            title:'Motivasiya bergim keladi ayrim payt',
            text:'Lekin men etib bergan hikoyalar ko‘pincha tasirli bo‘lmaydi, negadir. Hikoya so‘zlash ham bir san’at ekan.',
            date:'18.08.2022'
        },
        {
            id:2,
            title:'Boy-otaning xayotidan.',
            text:'Qiyin bo‘lsa ham, bir nechta odam non topyapdi. Yana bir yil guv etib o‘tib ketdi.',
            date:'18.08.2022'
        }
        
    ]

    const mobileTitle='Portugal and I are very much in Love - is here are 5 reasons why? What is'
  return (
    <div className='flex justify-between'>
<div className='max-w-[1051px] sm:hidden lg:inline-block mx-auto '>
<div className='grid grid-cols-2 sm:hidden lg:grid lg:grid-cols-3  gap-[50px]'>
        {info.map((malumot)=>{
            const {id,title,text,date} =malumot

            return(
            <div className='max-w-[180px] sm:hidden lg:inline-block lg:max-w-[300px] p-3 hover:scale-95 grid_box-shadow' key={id}>
                <img src={images[id]} alt="" className='rounded-[20px] w-[100%] h-auto  lg:w-[300px] lg:h-[297px]'/>
                <h3 className='hidden lg:inline-block card-title mt-[23px] mb-[10px]'>{title}</h3>
                <h3 className='card-title lg:hidden mt-[23px] mb-[10px]'>{mobileTitle}</h3>
                <p className='mb-[15px] hidden lg:inline-block'>{text}</p>
                <span className='card-time'>{date}</span>
            </div>
            )
        })}

</div>


<YoutubeVidio />
<AsosiyMaqollar/>
</div>
    

         <MaqolalarTarmoqlar/>
    </div>
  )
}

export default GridInfo