import React from 'react'
import Icon from './Icon'
import Pause from './Pause'
import FullScreen from './FullScreen'
import Volumen from './Volumen'

// componente funcional
export default function Play(props){
        return (
            <Icon {...props}>
              <path xmlns="http://www.w3.org/2000/svg" d="M6 4l20 12-20 12z"/>
            </Icon>
          )
}
