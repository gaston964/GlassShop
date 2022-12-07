import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { Route, Routes } from 'react-router-dom'
import Icon from './components/Icon'


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/GlassShop/' element={<ItemListContainer greeting={"Soy el Item List Container"}/>} />
    </Routes>
    <Footer/>
    </>
  )
}
/* 
<Route path='/GlassShop' element={<ItemListContainer greeting={"Soy el ItemListContaier"}/>} />
{/* <Route path="/GlassShop/itemdetail" element={<ItemDetailContainer/>} /> */

export default App
