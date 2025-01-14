import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderQue from './Solutions/Q1'
import { Counter } from './Solutions/Q3'
import TaskList from './Solutions/Q4'
import AddJokes from './Solutions/Q2'

function App() {

  return (
    <>
    <HeaderQue/>
    <br/>
    <Counter/>
    <br/>
    <TaskList/>
    <br/>
    <AddJokes/>
    </>
  )
}

export default App
