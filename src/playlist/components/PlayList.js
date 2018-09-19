import React, {PureComponent} from 'react'
import Media from './media'
import './playlist.css'

//este seria como mi vista en php del mvc. componente inteligente, smart component, componente de UI(user interface)
//componente funcional, con los componentes funcionales evitamos el re render
export default function Playlist(props){
            return(
              <div className='playlist'>
                  {
                    props.playlist.map(item => {
                      //como estoy recorriendo una lista de datos, react pide una propiedad (key) que es un valor unico el cual le tenemos que dar
                      //para que de esta manera react lo reconosca y pueda optimizar y agilizar mas el rendimiento de la app
                      return <Media
                              key={item.id}
                              {...item}
                              toggleModal={props.toggleModal}/>
                    })
                  }
              </div>
        )
    }
