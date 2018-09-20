import React from 'react'
import './timer.css'

// UI Component, Component de UI, Dumb Component, Componente Tonto
  const Timer = props => (
        <div className='timer'>
            <p>
              <span> {props.currentTime} / {props.duration} </span>
            </p>
        </div>
  )
  export default Timer
