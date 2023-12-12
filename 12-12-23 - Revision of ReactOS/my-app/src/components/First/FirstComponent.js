import React from 'react'
import './first.css'
const FirstComponent = (props) => {
  return (
  <>  <div className='first-1'>
        FirstComponent
    </div>
    <h1>This is my 4th Semester <br/><br/> {props.abc} </h1>
    <button className='my-button' onClick={props.clik}>My Button</button>
    </>
  )
}

export default FirstComponent
