import React from 'react'

export default function Icon(props){
        const {
            color,
            size,
        } = props
        
        return(
              <svg viewBox='0 0 32 32' fill={color} width={size} height={size}>
                  {props.children}
              </svg>
        )
}
