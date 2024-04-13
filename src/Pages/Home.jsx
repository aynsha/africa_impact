import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Producteurs from '../Components/Producteurs/Producteurs'



const Home = () => {
  return (
    <div style={{margin: "0"}}>
      <Hero/>
      <Popular/>
      <Producteurs/>
    </div>
  )
}

export default Home
