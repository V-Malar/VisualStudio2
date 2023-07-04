// import './App.css';
// import CDisplay from './components/CDisplay';
// // import WeeklyCalendar from './components/WeeklyCalendar';
// // import Register from './components/CDisplay';
// import Output from './components/Output.jsx';
// import Pass2023 from './components/Pass2023';
// import Pass2024 from './components/Pass2024';
// // import ParentComponent from './components/ParentComponent';
// function App() {
//   return (
//     <div className="App">
//       {/* <Register/> */}
//       {/* <WeeklyCalendar/> */}
//       {/* <CDisplay/> */}
//       <Pass2023/>
//       {/* <Pass2024/> */}

//       {/* <ParentComponent/> */}
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Print from './assets/css/Print';
// import Output from './components/Output';
import Pass from './components/Pass';
import Pass2023 from './components/Pass2023';
// import Pass2024 from './components/Pass2024';
// import Pass2025 from './components/Pass2025';
// import ComponentA from './ComponentA';
// import ComponentB from './ComponentB';
// import ComponentC from './ComponentC';

function App() {
//   const arr1 = [['01', 'JAN'], ['08', 'JAN'], ['15', 'JAN'], ['22', 'JAN'], ['29', 'JAN'], ['05', 'FEB'], ['12', 'FEB'], ['19', 'FEB'], ['26', 'FEB'], ['05', 'MAR'], ['12', 'MAR'], ['19', 'MAR'], ['26', 'MAR'], ['02', 'APR'], ['09', 'APR'], ['16', 'APR'], ['23', 'APR'], ['30', 'APR'], ['07', 'MAY'], ['14', 'MAY'], ['21', 'MAY'], ['28', 'MAY'], ['04', 'JUN'], ['11', 'JUN'], ['18', 'JUN'], ['25', 'JUN'], ['02', 'JUL'], ['09', 'JUL'], ['16', 'JUL'], ['23', 'JUL'], ['30', 'JUL'], ['06', 'AUG'], ['13', 'AUG'], ['20', 'AUG'], ['27', 'AUG'], ['03', 'SEP'], ['10', 'SEP'], ['17', 'SEP'], ['24', 'SEP'], ['01', 'OCT'], ['08', 'OCT'], ['15', 'OCT'], ['22', 'OCT'], ['29', 'OCT'], ['05', 'NOV'], ['12', 'NOV'], ['19', 'NOV'], ['26', 'NOV'], ['03', 'DEC'], ['10', 'DEC'], ['17', 'DEC'], ['24', 'DEC'], ['31', 'DEC']]; // The array you want to pass
//   const arr2 = [['01', 'JAN'], ['08', 'JAN'], ['15', 'JAN'], ['22', 'JAN'], ['29', 'JAN'], ['05', 'FEB'], ['12', 'FEB'], ['19', 'FEB'], ['26', 'FEB'], ['04', 'MAR'], ['11', 'MAR'], ['18', 'MAR'], ['25', 'MAR'], ['01', 'APR'], ['08', 'APR'], ['15', 'APR'], ['22', 'APR'], ['29', 'APR'], ['06', 'MAY'], ['13', 'MAY'], ['20', 'MAY'], ['27', 'MAY'], ['03', 'JUN'], ['10', 'JUN'], ['17', 'JUN'], ['24', 'JUN'], ['01', 'JUL'], ['08', 'JUL'], ['15', 'JUL'], ['22', 'JUL'], ['29', 'JUL'], ['05', 'AUG'], ['12', 'AUG'], ['19', 'AUG'], ['26', 'AUG'], ['02', 'SEP'], ['09', 'SEP'], ['16', 'SEP'], ['23', 'SEP'], ['30', 'OCT'], ['07', 'OCT'], ['14', 'OCT'], ['21', 'OCT'], ['28', 'OCT'], ['04', 'NOV'], ['11', 'NOV'], ['18', 'NOV'], ['25', 'NOV'], ['02', 'DEC'], ['9', 'DEC'], ['16', 'DEC'], ['23', 'DEC'], ['30', 'DEC']]; // The array you want to pass
//   const arr3 = [['01', 'JAN'], ['08', 'JAN'], ['15', 'JAN'], ['22', 'JAN'], ['29', 'JAN'], ['05', 'FEB'], ['12', 'FEB'], ['19', 'FEB'], ['26', 'FEB'], ['05', 'MAR'], ['12', 'MAR'], ['19', 'MAR'], ['26', 'MAR'], ['02', 'APR'], ['09', 'APR'], ['16', 'APR'], ['23', 'APR'], ['30', 'APR'], ['07', 'MAY'], ['14', 'MAY'], ['21', 'MAY'], ['28', 'MAY'], ['04', 'JUN'], ['11', 'JUN'], ['18', 'JUN'], ['25', 'JUN'], ['02', 'JUL'], ['09', 'JUL'], ['16', 'JUL'], ['23', 'JUL'], ['30', 'JUL'], ['06', 'AUG'], ['13', 'AUG'], ['20', 'AUG'], ['27', 'AUG'], ['03', 'SEP'], ['10', 'SEP'], ['17', 'SEP'], ['24', 'SEP'], ['01', 'OCT'], ['08', 'OCT'], ['15', 'OCT'], ['22', 'OCT'], ['29', 'OCT'], ['05', 'NOV'], ['12', 'NOV'], ['19', 'NOV'], ['26', 'NOV'], ['03', 'DEC'], ['10', 'DEC'], ['17', 'DEC'], ['24', 'DEC'], ['31', 'DEC']]; // The array you want to pass
//   const [currentComponent, setCurrentComponent] = useState(2023);

//   const renderComponent = () => {
//     switch (currentComponent) {
//       case 2023:
//         return <Output array={arr1}/>;
//       case 2024:
//         return <Output array={arr2}/>;
//       case 2025:
//         return <Output array={arr3}/>;
//       default:
//         return null;
//     }
//   };

//   const handleClick = (component) => {
//     setCurrentComponent(component);
//   };

  return (
    // <div className="year">
    //   <h1 onClick={() => handleClick(2023)}>2023</h1>
    //   <h1 onClick={() => handleClick(2024)}>2024</h1>
    //   <h1 onClick={() => handleClick(2025)}>2025</h1>
    //   <div>{renderComponent()}</div>
    // </div>
    <div>
      <Pass/>
      <Pass2023/>
      <Print/>
    </div>
  );
}

export default App;
