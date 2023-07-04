import React, { useRef } from 'react'

export default function Print() {
    const inputtext1 = useRef();
    const inputtext2 = useRef();
    function display1()
    {
        alert(inputtext1.current.value);
       
    }
    function display2(e)
    {
        alert(e.target.value);
    }
  return (
    <div>
        <input type = "text" onClick = {display1} ref={inputtext1}/>
        <input type = "text" onClick = {display2} ref={inputtext2}/>
    </div>
  )
}
