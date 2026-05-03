import React, { useState } from 'react'
import './index.css'

function App() {
  const [bgColor, setBgColor] = useState('#ffffff')

  const colors = ['#ffffff', '#3498db', '#2ecc71', '#f39c12', '#e74c3c', '#9b59b6', '#1abc9c']

  const changeBackground = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setBgColor(randomColor)
  }

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <div className="content">
        <h1>Background Color Changer</h1>
        <p>Click the button to change the background color</p>
        <button onClick={changeBackground} className="button">
          Change Background Color
        </button>
      </div>
    </div>
  )
}

export default App
