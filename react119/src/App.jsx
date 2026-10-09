import React from 'react'
import Home from './home'

import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  let name = "mayank"
 let age = 50

  return (
   <>
   
   <div  className="hero-banner">
      <h1>My React App</h1>
      <p>**</p>  
    </div>
    <Home data={{name,age}}   />  
    </>   
  )
}
export default App
