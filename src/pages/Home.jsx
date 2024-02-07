import React from 'react'
import Carousal from '../components/Carousel'
import Catogories from '../components/Catogaries'
import Foodies from '../components/Foodies'
import BestSellingProdects from '../components/BestSellingProdects'

export default function Home() {
  return (
    <>
     <Carousal />
     <Catogories />
     <Foodies />
     <BestSellingProdects />
    </>
  )
}
