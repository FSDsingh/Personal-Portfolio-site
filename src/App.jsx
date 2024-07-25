import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Servies from './components/Servies'
import Expertise from './components/Expertise'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Servies/>
      <Expertise/>
      <Footer/>
    </>

  )
}
export default App
