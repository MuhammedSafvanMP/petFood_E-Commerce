import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import Footer from './pages/Footer'
import Whishlist from './components/Whishlist'

export default function App() {
  return (
   <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path='/:id' element={ <Whishlist />  } />
      </Routes>
      <Services />
      <Footer />
   </>
  )
}
