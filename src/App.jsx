import React,{useContext} from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import Footer from './pages/Footer'
import Whishlist from './components/Whishlist'
import SingleProduct from './components/SingleProduct'
import { globalContext } from './context/GlobalContext'
import AddToCart from './components/AddToCart'

export default function App() {
  const [ likeItem, setLikeItem,addCart, setAddCart] = useContext(globalContext)

  return (
   <>

      <Header countCart= {addCart.length} countLikeItem = {likeItem.length} />
      <Routes> 
          <Route path="/" element={<Home />} />
           <Route path='/whishlist' element={ <Whishlist />  } />
          <Route path='/:id' element={ <SingleProduct />  } />
          <Route path='/addcart' element={ <AddToCart />  } />
      </Routes>
      <Services />
      <Footer />
   </>
  )
}
