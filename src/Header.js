import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ smol }) => {
  return (
    <div className={'stripes headerklasa d-flex justify-content-center align-items-center' + (smol ? ' mala' : '')}>
      <div className='crnitekst big'>
        <Link to={'/'} className='subtlelink'>
          <h1 className='display-4 titl'>NSOUS Karantena</h1>
        </Link>
        <div className='kutija d-flex flex-row flex-wrap align-items-baseline justify-content-end'>
          <a href='https://www.instagram.com/naso_sam_ovo_u_smecu/' className='text-monospace'>@nasao_sam_ovo_u_smecu</a>
          <p className='mx-2'>•</p>
          <a href='https://www.instagram.com/ivanjerzabek/' className='text-monospace'>@ivanjerzabek</a>
        </div>

      </div>
    </div>
  )
}

export default Header