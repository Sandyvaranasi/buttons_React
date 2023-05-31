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
    <h1>Counter</h1><br/>
    <h1 id='up'  onClick={handleClick}>⏫</h1>
    <h1 id='down' onClick={handleClick}>⏬</h1>
    <h1>{value}</h1>
    <h1 id='left' onClick={handleClick}>⏪</h1>
    <h1 id='right' onClick={handleClick}>⏩</h1>
    </div>
  )
}
