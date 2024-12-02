import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home";
import Income from "./Income";
import Expenses from "./Expenses";
import Transcations from "./Transcations"
import Savings from "./Savings";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Income" element={<Income/>} />
        <Route path="/Expenses" element={<Expenses/>} />
        <Route path="/Transcations" element={<Transcations/>} />
        <Route path="/Savings" element={<Savings/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
