import React from 'react'
import Play from '../../icons/components/Play'
import Pause from '../../icons/components/Pause'
import './playPause.css'

  const PlayPausa = props =>(
          <div className='playPause'>
            {
              props.pause //si esto es true se mostrara el boton de play
                ?
                  <button onClick={props.handleToggleClick}>
                    <Play
                    color='white'
                    size={25}/>
                  </button>
                : //de lo contrario se mostrara el boton de pausa
                    <button onClick={props.handleToggleClick}>
                      <Pause
                          color='white'
                          size={25}/>
                    </button>
            }
         </div>
  )
  export default PlayPausa
