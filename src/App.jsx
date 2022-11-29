import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Soy el ItemListContaier"}/>
    <Footer/>
    </>
  )
}

export default App
