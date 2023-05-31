import React, { useState } from 'react'
import '../src/App.css'

export default function Counter() {
    const [value, setValue] = useState(0)

    function handleClick(e){
        e.preventDefault();
        console.log(e);
        if(e.target.id=='up') setValue(value+1)
        else if(e.target.id=='down') setValue(value-1)
        else if(e.target.id=='left') setValue(value-10)
        else setValue(value+10)
    }
  return (
    <div className='counter'>
    <h1 id='head'>Counter</h1>
    <br/><br/><br/>
    <button id='left' onClick={handleClick}>⏪</button>
    <button id='up'  onClick={handleClick}>⏫</button>
    <button id='down' onClick={handleClick}>⏬</button>
    <button id='right' onClick={handleClick}>⏩</button>
    <h1 id='value'>{value}</h1>
    </div>
  )
}
