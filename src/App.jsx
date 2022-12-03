import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Soy el ItemListContaier"}/>
    <ItemDetailContainer/>
    <Footer/>
    </>
  )
}

export default App
