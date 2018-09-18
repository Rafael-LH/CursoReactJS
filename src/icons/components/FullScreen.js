import React from 'react'
import Icon from './Icon'
// componente funcional
export default function FullScreen(props){
          return(
            <Icon {...props}>
              <path xmlns="http://www.w3.org/2000/svg" d="M32 0h-13l5 5-6 6 3 3 6-6 5 5z"/>
              <path xmlns="http://www.w3.org/2000/svg" d="M32 32v-13l-5 5-6-6-3 3 6 6-5 5z"/>
              <path xmlns="http://www.w3.org/2000/svg" d="M0 32h13l-5-5 6-6-3-3-6 6-5-5z"/>
              <path xmlns="http://www.w3.org/2000/svg" d="M0 0v13l5-5 6 6 3-3-6-6 5-5z"/>
            </Icon>
          )

  }
