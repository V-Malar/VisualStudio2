// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';
import CDisplay from './Output';
import Output from './Output';

const Pass2024 = () => {
  const arr = [['01', 'JAN'], ['08', 'JAN'], ['15', 'JAN'], ['22', 'JAN'], ['29', 'JAN'], ['05', 'FEB'], ['12', 'FEB'], ['19', 'FEB'], ['26', 'FEB'], ['04', 'MAR'], ['11', 'MAR'], ['18', 'MAR'], ['25', 'MAR'], ['01', 'APR'], ['08', 'APR'], ['15', 'APR'], ['22', 'APR'], ['29', 'APR'], ['06', 'MAY'], ['13', 'MAY'], ['20', 'MAY'], ['27', 'MAY'], ['03', 'JUN'], ['10', 'JUN'], ['17', 'JUN'], ['24', 'JUN'], ['01', 'JUL'], ['08', 'JUL'], ['15', 'JUL'], ['22', 'JUL'], ['29', 'JUL'], ['05', 'AUG'], ['12', 'AUG'], ['19', 'AUG'], ['26', 'AUG'], ['02', 'SEP'], ['09', 'SEP'], ['16', 'SEP'], ['23', 'SEP'], ['30', 'OCT'], ['07', 'OCT'], ['14', 'OCT'], ['21', 'OCT'], ['28', 'OCT'], ['04', 'NOV'], ['11', 'NOV'], ['18', 'NOV'], ['25', 'NOV'], ['02', 'DEC'], ['9', 'DEC'], ['16', 'DEC'], ['23', 'DEC'], ['30', 'DEC']]; // The array you want to pass

  return (
    <div>
      <Output array={arr} />
    </div>
  )
};

export default Pass2024;
