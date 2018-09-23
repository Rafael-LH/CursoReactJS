import React from 'react'
import VolumeIcon from '../../icons/components/Volumen'
import './css/volume.css'
import Mute from '../../icons/components/Mute'

// lo que le estoy indicando con los atributos de min es el minimo volumen y max es el maximo y step es un rango
// que esta entre 0 y 1 entre el minimo y maximo

    const Volume = props => (
          <div className='volume'>
                <button onClick={props.handleVolumenClick}>
                  {
                    !props.mute
                    ?
                      <Mute
                        color="white"
                        size={25}
                      />
                    :
                      <VolumeIcon
                        color="white"
                        size={25}
                      />
                }
                </button>
                <div className='volume-range'>
                  <input
                      className='inputRange'
                      type='range'
                      min={0}
                      max={1}
                      step={.05}
                      id='input-range'
                      onChange={props.handleVolumeChange}
                  />
                </div>
          </div>
    )
    export default Volume
