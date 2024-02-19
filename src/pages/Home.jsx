import React from 'react'
import Carousal from '../components/Carousel'
import Catogories from '../components/Catogaries'
import Foodies from '../components/Foodies'
import BestRatingProdects from '../components/BestRatingProdects'
import Header from './Header'
import Services from './Services'
import Footer from './Footer'

export default function Home() {
  return (
    <>
    <Header />
     <Carousal />
     <Catogories />
     <Foodies />
     <BestRatingProdects />
     <Services />
      <Footer />
    </>
  )
}
