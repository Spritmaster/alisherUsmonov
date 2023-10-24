import React from 'react'
import Hero from '../components/Hero'
import GridInfo from '../components/GridInfo'
import FlexInfo from '../components/FlexInfo'
import Mobilefoter from '../components/mobilefoter'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
        <Hero/>
        <div>
        <div className='align-elements mt-[70px]'>
           <GridInfo/>
           <FlexInfo/>
        </div>
      <Mobilefoter/>
      <Footer/>
      </div>
    </div>
  )
}

export default Home