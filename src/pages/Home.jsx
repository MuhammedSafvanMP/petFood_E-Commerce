import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Carousal from '../components/Carousel'

export default function Home() {
  return (
    <>
         <Routes>
        <Route
          path="/"
          element={
            <Carousal />
          }
        />
      </Routes>
    </>
  )
}
