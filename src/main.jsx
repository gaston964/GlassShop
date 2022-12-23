import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartContextProvider } from './context/CartContext'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX-Ck4hIc0TgzLd8RnRt3Fk80Okc8X6Sc",
  authDomain: "glassshop-7f96d.firebaseapp.com",
  projectId: "glassshop-7f96d",
  storageBucket: "glassshop-7f96d.appspot.com",
  messagingSenderId: "353022719661",
  appId: "1:353022719661:web:047d1d94fa4ca0f468f824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
      <BrowserRouter>
        <App id='principal' />
      </BrowserRouter>
    </CartContextProvider>
  </React.StrictMode>
)
