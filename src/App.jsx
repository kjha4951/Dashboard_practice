import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './component/dashboard'
import Cloudfont from './component/subcomponent/Cloudfont'
import Browser from './component/subcomponent/browser'

function App() {

  return (
    <div className='app'>
    <h1 className="Heading">Dashboard</h1>
    <div className='dashboard'>
      <Dashboard/>
     
    </div>
    </div>
  )
}

export default App
