import React from 'react'
import PlayList from '../../playlist/components/PlayList'

// componente funcional, dum component, componente tonto, componente UI (user interface), vista
export default function Category(props){
      return(
          <div>
            <p>{props.description}</p>
            <h2>{props.title}</h2>
            <PlayList playlist={props.playlist}/>
          </div>
      )
}
