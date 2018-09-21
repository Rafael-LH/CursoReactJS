import React from 'react'
import './progressBar.css'

// el tipo range es una propiead (que en HTML es atributo) la cual nos permite mover la barra de reproduccion
    const ProgressBar = props =>(
          <div className='progressBar'>
              <input
                type='range'
                min={0}
                max={props.duration}
                value={props.value}
                onChange={props.handleProgressChange}
              />
          </div>
    )
    export default ProgressBar
