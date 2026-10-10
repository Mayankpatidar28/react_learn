import React from 'react'
import Home from './home'

import './App.css'

function App() {

  let name = "mayank"
 let age = 50

  return (
   <>
   
   <div  className="hero-banner">
      <h1>My React App</h1>
      <p>**</p>  

      <h1 className='text-6xl text-red-500'>Hello  tailwind</h1>
    </div>
    <Home data={{name,age}}   />  /// ud in {} we give name value to child  or make a js object
    </>   
  )
}
export default App
