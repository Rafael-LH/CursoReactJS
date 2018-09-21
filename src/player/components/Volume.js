import React from 'react'
import VolumeIcon from '../../icons/components/Volumen'
import './css/volume.css'

// lo que le estoy indicando con los atributos de min es el minimo volumen y max es el maximo y step es un rango
// que esta entre 0 y 1 entre el minimo y maximo

    const Volume = props => (
          <button className='volume' onClick={props.handleVolumenClick}>
                <VolumeIcon
                  color="white"
                  size={25}
                />
              <div className='volume-range'>
                <input
                    type='range'
                    min={0}
                    max={1}
                    step={.05}
                    onChange={props.handleVolumeChange}
                />
              </div>
          </button>
    )
    export default Volume
