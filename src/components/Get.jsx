import React from 'react'
import '../assets/css/style.css';
import './Pass2023';
export default function Get({ val }) {
  console.log(val, 'valvalvalval');
  return (
    <table className="table">
      <thead>
        <th>DETAILS</th>
      </thead>
      <tbody>
        {
          val ? (val.map((item, index) => {
            return (
              <tr key={index}>
                <td><span style={{color: "blue"}}>Cost</span> {item}</td>
              </tr>
            )
          })) : null
        }
      </tbody>
    </table>
  )
}
