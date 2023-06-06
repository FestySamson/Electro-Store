import React from 'react'
import Hero from '../components/hero/Hero'
import Trendingprop from '../components/trending/Trendingprop'
import Latest from '../components/latest/Latest'
function Home() {
  return (
    <div>
      <Hero/>
      <Trendingprop/>
      <Latest/>
    </div>
  )
}

export default Home
