import React from 'react'
import './modal.css'

//componente funcional, componente tonto, dumb component, componente de UI(user Interface)
export default function Modal(props){
      return(
          <div className='modal'>
              Esto es un Modal
              {props.children}
              <button onClick={props.toggleModal}>cerrar</button>
          </div>
      )
}
