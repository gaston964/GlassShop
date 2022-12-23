import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import ItemListFire from './components/fromFireBase/ItemListFire'
function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a GlassShop"}/>} />
      <Route path='/category/:id' element={<ItemListContainer greeting={"Bienvenidos a GlassShop"}/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/firebase' element={<ItemListFire/>} />
    </Routes>
    <Footer/>
    </>
  )
}
export default App
