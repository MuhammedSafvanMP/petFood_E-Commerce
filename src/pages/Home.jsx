import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Carousal from '../components/Carousel'
import Catogories from '../components/Catogaries'
import Foodies from '../components/Foodies'
import BestSellingProdects from '../components/BestSellingProdects'

export default function Home() {
  return (
    <>
         <Routes>
        <Route
          path="/"
          element={
              <>
              <Carousal />
              <Catogories />
              <Foodies />
              <BestSellingProdects />
            </>
          }
        />
      </Routes>
    </>
  )
}
