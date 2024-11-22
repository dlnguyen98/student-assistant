import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
import ToDoList from './components/ToDoList';
import Weather from './components/Weather';
import Notes from './components/Notes';
import './App.css'

function App() {
  

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="first-row">
          <ToDoList />
          <Weather />
        </div>
        <Notes />
      </div>
    
    </>
  )
}

export default App
