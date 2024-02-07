import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Carousal from '../components/Carousel'
import Catogories from '../components/Catogaries'

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
            </>
          }
        />
      </Routes>
    </>
  )
}
