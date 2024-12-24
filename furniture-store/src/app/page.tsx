import React from 'react'
import Feature from './components/Feature'
import Hero from './components/Hero'
import Latestproduct from './components/latestproduct'
import What from './components/what'
import Unique from './components/unique'
import Trending from './components/Trending'
import Leatestblog from './components/Leatestblog'
import Top from './components/Top'

const page = () => {
  return (
    <div>
      
      <Hero/>
     <Feature />
     <Latestproduct/>
     <What/>
    <Unique/>
    <Trending/>
    <Leatestblog/>
    <Top/>
    </div>
  )
}

export default page


