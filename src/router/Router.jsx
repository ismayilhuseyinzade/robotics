import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Basket from '../pages/Basket/Basket'
import Wishlist from '../pages/Wishlist/Wishlist'
import Dashboard from '../pages/Dashboard/Dashboard'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Basket' element={<Basket/>}/>
      <Route path='/Wishlist' element={<Wishlist/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router
