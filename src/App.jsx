import React from 'react'
import  './App.css'
import  { useState } from 'react'

const App = () => {
  const [a,setA]= useState(0)
  return (
    <div>
     <h1>count :{a}</h1>
     <button onClick={()=> setA (a+1)}>+</button>


    </div>
  )
}

export default App