import React, { useState } from 'react';

const Pass2023 = () => {
  const [labels, setLabels] = useState([
    'Label 1',
    'Label 2',
    'Label 3',
    'Label 4',
    'Label 5',
    'Label 6'
  ]);
  const [displayedLabels, setDisplayedLabels] = useState(labels.slice(0, 3));
  const [pdisables, setpDisables] = useState(true);
  const [ndisables, setnDisables] = useState(true);
  const handlenClick = () => {
    const nextLabels = labels.slice(3, 6);
    setDisplayedLabels(nextLabels);
    setnDisables(!ndisables);
    setpDisables(true);
  };
  const handlepClick = () => {
    const nextLabels = labels.slice(0, 3);
    setDisplayedLabels(nextLabels);
    setpDisables(!pdisables);
    setnDisables(true);
  };


  return (
    <div>
      <button onClick={handlepClick} disabled={!pdisables}>Previous</button>
      <ul>
        {displayedLabels.map((label, index) => (
          <li key={index}>{label}</li>
        ))}
      </ul>
      <button onClick={handlenClick} disabled={!ndisables}>Next</button>
    </div>
  );
};

export default Pass2023;
