// ChildComponent.js
import React from 'react';

const ChildComponent = ({ arrProp }) => {
  // Use the arrProp in your component
  // For example, you can map over the array and render its contents
  return (
    <ul>
      {arrProp.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ChildComponent;
