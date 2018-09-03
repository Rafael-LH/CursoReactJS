import React from 'react'

// componente funcional
export default function FullScreen(props){

          const {
              color3,
              size2,
          } = props

          return(
            <svg viewBox='0 0 31 31' fill={color3} width={size2} height={size2}>
                  {props.children}
            </svg>
          )

  }
