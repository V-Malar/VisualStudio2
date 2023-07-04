// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const arr = [['01', 'JAN'], ['08', 'JAN']]; // The array you want to pass

  return <ChildComponent arrProp={arr} />;
};

export default ParentComponent;
