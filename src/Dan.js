import React from 'react'
import Stori from './Stori'
import { prviDan } from './Constants'

const Dan = ({ dan }) => {
  return (
    <div>
      <Stori ime={dan} link={prviDan[0]} />
    </div>
  );
};

export default Dan;