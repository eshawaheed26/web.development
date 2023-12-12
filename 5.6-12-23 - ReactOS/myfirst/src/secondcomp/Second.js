import React from 'react'
import pic from '../resource/11.png'
const Second = (props) => {
  return (
    <div style={{background:"blue"}}>
        Main content of the page
        <img src={pic}/>
        <img src={props.value}/>
    </div>
  )
}

export default Second