import React from 'react'
import './App.css'

function App({ime, link}) {
  return (
    <div className='stori'>
      <p className='storiHeader'>{ime}</p>
      <video width='300rem' controls>
        <source src={link}/>
        <p>Video nije dostupan, sori</p>
      </video>
    </div>
  )
}

export default App
