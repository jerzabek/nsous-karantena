import React from 'react'
import './App.css'
import Header from './Header'
import Person from './Person'
import Dan from './Dan'
import StoJeOvo from './StoJeOvo'
import Timeline from './Timeline'
import Footer from './Footer'

function App() {
  return (
    <div className='h-100'>
      <Header />
      <div className='container-lg pb-5 mb-5'>
        
        <StoJeOvo />

        <div className='w-100 d-flex align-items-center justify-content-center'>
          <div className='d-flex flex-wrap justify-content-around ljudi '>
            <Person ime='lorena' tag='lorena.farkac' />
            <Person ime='lovro' tag='lovrohh' />
            <Person ime='ezekijel' tag='ezekijel' />
            <Person ime='jarza' tag='ivanjerzabek' />
            <Person ime='morana' tag='m_moranaa' />
            <Person ime='ivona' tag='neshvaceno' />
            <Person ime='petra' tag='petra.poljakk' />
            <Person ime='valentino' tag='valentino_janjac' />
            <Person ime='file' tag='yung_file' />
            <Person ime='dora' tag='dora_irl' />
          </div>
        </div>
        
        <Timeline />

        {/* <Dan dan={1} /> */}
      </div>

      <Footer />
    </div>
  )
}

export default App
