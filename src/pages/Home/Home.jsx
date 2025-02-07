import React from 'react'
import Banner from './Banner'
import Topsellers from './Topsellers'
import Recommented from './Recommented'
import News from './News';

function Home() {
  return (
    <>
      <Banner/>
      <Topsellers/>
      <Recommented/>
      <News/>
    </>
  )
}

export default Home
