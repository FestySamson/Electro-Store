import React from 'react'
import Hero from '../components/hero/Hero'
import Trendingprop from '../components/trending/Trendingprop'
import Latestprop from '../components/latest/Latestprop'
import Hurry from '../components/hurry/Hurry'
function Home() {
  return (
    <div>
      <Hero/>
      <Trendingprop/>
      <Latestprop/>
      <Hurry/>
    </div>
  )
}

export default Home
