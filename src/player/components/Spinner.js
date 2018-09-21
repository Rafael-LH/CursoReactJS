import React from 'react'
import './css/spinner.css'

// lo que estoy validando es si me muevo es true por lo tanto me aparecera el letrero de cargado y cuando se detiene
// no me aparecera el letrero de cargando porque el video ya cargo

    //Manera 1 de poder validar dentro de JSX
    // const Spinner = props => (
    //       <div className='spinner'>
    //           {
    //               props.active &&
    //                 <span>Cargando...</span>
    //           }
    //       </div>
    //   )

      //Manera 2 de poder validar dentro de JSX
      const Spinner = props => {

          if(!props.active) return null //si esto es distinto a true osea false me retornara null por lo tanto lo siguiente nunca se ejecutara

          return(
            <div className='spinner'>
              <span>Cargando...</span>
            </div>
          )
      }
    export default Spinner
