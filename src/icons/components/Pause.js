import React from 'react'

export default function Pausa(props){

        const {
              color2,
              size
        } = props

      return(
              <svg viewBox='0 0 32 32' fill={color2} width={size} height={size}>
                  {props.children}
              </svg>
        )
}
