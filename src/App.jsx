import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Whishlist from './components/Whishlist'
import SingleProduct from './components/SingleProduct'
import AddToCart from './components/AddToCart'
import Login from './auth/Login'
import Signup from './auth/Signup'
import Error from './pages/Error'
import Foodies from './components/Foodies'
import Cards from './components/Cards'
import Dashbord from './admin/Dashbord'
import Users from './admin/Users'
import Products from './admin/Products'
import Update from './admin/Update'

export default function App() {

  return (
   <>

      <Routes> 
          <Route path="/" element={<Home />} />
           <Route path='/whishlist' element={ <Whishlist />  } />
          <Route path='/product/:id' element={ <SingleProduct />  } />
          <Route path='/addcart' element={ <AddToCart />  } />
          <Route path='/login' element={ <Login />  } />
          <Route path='/signup' element={ <Signup />  } />
          <Route path='/product' element={ <Foodies />  } />
          <Route path='/cards' element={ <Cards />  } />
          <Route path='/dashbord' element={ <Dashbord />  } />
          <Route path='/users' element={ <Users />  } />
          <Route path='/products' element={ <Products />  } />
          <Route path='/products/:id' element={ <Update  />  } />

          <Route path='*' element={ <Error /> } />
      </Routes>
   </>
  )
}
