import React from 'react'
import './App.css'
import Header from './Header'
import Person from './Person'
import StoJeOvo from './StoJeOvo'
import Timeline from './Timeline'
import Stori from './Stori'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom"
import { tagovi, linkovi } from './Constants'

function App() {
  let location = useLocation()

  let imeRute = location.pathname.replace('/', '').replace('nsous-karantena', '')

  return (
    <div className='h-100'>
      <ScrollToTop />

      <Switch>
        <Route exact path='/'>
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
          </div>
        </Route>

        <Route path='/(lorena|lovro|ezekijel|jarza|morana|ivona|petra|valentino|file|dora)'>
          <Header smol />

          <div className='container-lg text-center pb-5 mb-5'>
            <h2 className='my-5'>Ovo je {imeRute}!</h2>

            <div className="mt-4 text-center d-flex flex-row justify-content-around flex-wrap align-items-center">
              <Person xxl ime={imeRute} tag={tagovi[imeRute]} nolink />
              <Stori ime={imeRute} link={linkovi[imeRute]} />
            </div>
          </div>
        </Route>


        <Route>
          <Header />

          <div className='container-lg pb-5 mb-5'>
            <h1 className='mt-5 pt-4'>bruh: 404 not found wtf bro</h1>
          </div>
        </Route>
      </Switch>

      <Footer />
    </div >
  )
}

export default App
