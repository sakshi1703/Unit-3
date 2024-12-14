import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Q1/Home"
import About from './Q1/About'
import Contact from './Q1/Contact'
import { RandomJokes } from './Q2/joke'
import Counter from "./Q4/counter"

function App() {
  return (
    <>
    <Counter/>
    <RandomJokes/>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
