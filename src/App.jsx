import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import Footer from './components/footer/Footer'
import {Section} from './components/Section/Section'
import './App.css'

function App() {
    return (
    <>
      <Header titulo="Mi pagina Web" show= {false} />

      <Section/>
        
      
      
      <Footer/>

    </>
  )
}

export default App
