import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Count from "./Count"
import Team from './Team'
import Users from './Users'
import './App.css'
import Friends from './Friends'


function App() {

  return (
    <div>
      <h1>React Apps Part 2</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Count></Count>


      {/* <button>Click Me</button> */}

    </div>
  )
}





export default App;


