import React from 'react'
import "./Spinner.css"

function Spinner({isDarkMode}) {
  return (
    <div className={`spinner ${
      isDarkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
  }`}></div>
  )
}

export default Spinner