import React from 'react'
import { useHistory } from 'react-router-dom'

const Person = ({ ime, tag, nolink }) => {
  const hist = useHistory()


  const click = (ime) => {
    if(!nolink)
      hist.push(ime)
  }

  return (
    <div onClick={(e) => click(ime)} className='pointer m-3 p-2 px-3 osoba d-flex flex-column align-items-center justify-content-center'>
      <img height='280rem' src={require('./imgs/face/' + ime + '.jpg')} alt={ime} />
      <p className='text-monospace mt-2'>@{tag}</p>
    </div>
  );
};

export default Person;