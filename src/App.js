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
import { tagovi } from './Constants'

function App() {
  let location = useLocation()

  let imeRute = location.pathname.replace('/', '').replace('nsous-karantena', '')

  return (
    <div className='h-100'>
      <ScrollToTop />
      <Header />
      <div className='container-lg pb-5 mb-5'>

        <Switch>
          <Route exact path='/'>
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

          </Route>

          <Route path='/(lorena|lovro|ezekijel|jarza|morana|ivona|petra|valentino|file|dora)'>
            <h1>OVA SEKCIJA STRANICE JE WORK IN PROGRESS SHUT UP NIJE GOTOVO AAAAAAAAAAA</h1>
            <Person ime={imeRute} tag={tagovi[imeRute]} nolink />
            <Stori ime={imeRute} />
          </Route>


          <Route>
            <h1 className='mt-5 pt-4'>bruh: 404 not found wtf bro</h1>
          </Route>
        </Switch>

      </div>

      <Footer />
    </div>
  )
}

export default App
