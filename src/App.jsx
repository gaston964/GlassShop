import React from 'react'
import Footer from './components/footer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Soy el ItemListContaier"}/>
    </>
  )
}

export default App
