import React from 'react'

// componente funcional
export default function FullScreen(props){

          const {
              color3,
              size,
          } = props

          return(
            <svg viewBox='0 0 32 32' fill={color3} width={size} height={size}>
                  {props.children}
            </svg>
          )

  }
