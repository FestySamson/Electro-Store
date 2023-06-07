import React from 'react'
import Hero from '../components/hero/Hero'
import Trendingprop from '../components/trending/Trendingprop'
import Latestprop from '../components/latest/Latestprop'
function Home() {
  return (
    <div>
      <Hero/>
      <Trendingprop/>
      <Latestprop/>
    </div>
  )
}

export default Home
