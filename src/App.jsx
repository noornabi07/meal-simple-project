import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Meal from './components/Meal/Meal'

function App() {

  return (
    <div className="App">
     <Header></Header>
     <Meal></Meal>
    </div>
  )
}

export default App
