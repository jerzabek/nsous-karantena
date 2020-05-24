import React from 'react'
import { Link } from 'react-router-dom'

const Person = ({ ime, tag, nolink, xxl }) => {
  const checkNoLink = (e) => {
    if(nolink) 
      e.preventDefault()
  }
  return (
    <Link to={'/' + ime} onClick={checkNoLink}>
      <div className='pointer m-3 p-2 px-3 osoba d-flex flex-column align-items-center justify-content-center'>
        <img height={(xxl ? '360rem' : '280rem')} src={require('./imgs/face/' + ime + '.jpg')} alt={ime} />
        <p className='text-monospace mt-2 subtlelink'>@{tag}</p>
      </div>
    </Link>
  );
};

export default Person;