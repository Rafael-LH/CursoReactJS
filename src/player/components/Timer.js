import React from 'react'
import './timer.css'
  const Timer = props => (
        <div className='timer'>
            <p>
              <span>{props.duration}</span>
            </p>
        </div>
  )
  export default Timer
