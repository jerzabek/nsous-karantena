import React from 'react'
import './App.css'

function Stori({ime, link}) {
  return (
    <div className='stori text-center'>
      <video className='osoba noanim' width='300rem' controls>
        <source src={require('./vids/' + link + '.mp4')}/>
        <p>Video nije dostupan, sori</p>
      </video>
    </div>
  )
}

export default Stori
