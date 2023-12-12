import React from 'react'
import "./home.css"

import Myfirst from '../../components/myfirst/Myfirst'
import Second  from '../../secondcomp/Second'
import  Third  from '../../thirdcomp/Third'

let a="";

export const Homepage = (props) => {
  function handleClick (){
    {a='You pressed the button'}
    {console.log(a)}
  }
  return (
    <div className='home-main'>
<Myfirst clik={handleClick}/>
    </div>
  )
}
 export default Homepage

