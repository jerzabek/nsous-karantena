import React from 'react'
import { Link } from 'react-router-dom'

const Person = ({ ime, tag, nolink }) => {
  const checkNoLink = (e) => {
    if(nolink) 
      e.preventDefault()
  }
  return (
    <Link to={'/' + ime} onClick={checkNoLink}>
      <div className='pointer m-3 p-2 px-3 osoba d-flex flex-column align-items-center justify-content-center'>
        <img height='280rem' src={require('./imgs/face/' + ime + '.jpg')} alt={ime} />
        <p className='text-monospace mt-2'>@{tag}</p>
      </div>
    </Link>
  );
};

export default Person;