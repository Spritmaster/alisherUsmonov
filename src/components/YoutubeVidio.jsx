import React from 'react'

const YoutubeVidio = () => {
  return (
    <div className='rounded-[40px] overflow-hidden sm:max-w-[800px]    lg:max-w-[1051px] mt-[70px] h-[352px]  lg:h-[473px]'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Sc_FJckymbc?si=8EFk_3h991ZSytmN" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  
    className=' w-full h-full'></iframe>
    </div>
  )
}

export default YoutubeVidio