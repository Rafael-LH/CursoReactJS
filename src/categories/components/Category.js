import React from 'react'
import PlayList from '../../playlist/components/PlayList'
import './category.css'

// componente funcional, dum component, componente tonto, componente UI (user interface), vista
export default function Category(props){
      return(
          <div className='Category'>
            <p className='CategoryDescription'>{props.description}</p>
            <h2 className='CategoryTitle'>{props.title}</h2>
            <PlayList playlist={props.playlist}/>
          </div>
      )
}
