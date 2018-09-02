import React from 'react'

//componente funcional
export default function Volumen(props){
          const {
              color4,
              size,
          } = props
          return(
            <svg viewBox='0 0 32 32' fill={color4} width={size} height={size}>
                {props.children}
            </svg>
          )
}
