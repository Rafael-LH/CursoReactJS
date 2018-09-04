import React from 'react'
import Logo from '../../../images/logo.png'
import './related.css'


// componente funcional, dum component, componente tonto, componente UI (user interface), vista
export default function Related(props){
        return(
            <div className='Related'>
                <img src={Logo} width={250} />
            </div>
        )
}
