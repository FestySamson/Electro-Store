import React from 'react'
import Hero from '../components/hero/Hero'
import Trendingprop from '../components/trending/Trendingprop'
import Latestprop from '../components/latest/Latestprop'
import Hurry from '../components/hurry/Hurry'
import Popular from '../components/popular/Popular'
import BlogList from '../components/blog/BlogList'
import Discount from '../components/discount/Discount'
import Trust from '../components/Trust/Trust'

function Home() {
  return (
    <div>
      <Hero/>
      <Trendingprop/>
      <Latestprop/>
      <Hurry/>
      <Popular/>
      <BlogList/>
      <Discount/>
      <Trust/>
    </div>
  )
}

export default Home
