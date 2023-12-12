import React from 'react'
import "./home.css"

import Myfirst from '../../components/myfirst/Myfirst'
import Second  from '../../secondcomp/Second'
import  Third  from '../../thirdcomp/Third'

// let a=5;

export const Homepage = (props) => {
  return (
    <div className='home-main'>
      <div> <Myfirst/> </div>
      <div>
<Myfirst/>
</div>

<div>
  <Myfirst/>
  <Second value={props.pico} />
  {/* <Third/> */}
</div>

<div>
  <br/>
  <br/>
  The Esha Waheed
  <Third/>
</div>
    </div>
  )
}
 export default Homepage

