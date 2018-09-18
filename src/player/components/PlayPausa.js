import React from 'react'
import Play from '../../icons/components/Play'
import Pause from '../../icons/components/Pause'
import './playPause.css'

  const PlayPausa = props =>(
          <div className='playPause'>
              <button>
                  <Play color='white' size={25}/>
              </button>
              <button>
                <Pause color='white' size={25} />
              </button>
          </div>
  )
  export default PlayPausa
