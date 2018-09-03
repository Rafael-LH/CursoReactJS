import React, {PureComponent} from 'react'
import Media from './media'

//este seria como mi vista en php del mvc
// componente funcional, con los componentes funcionales evitamos el re render
export default function Playlist(props){
            return(
              <div className='Media'>
                  {
                    props.playlist.map(item => {
                      //como estoy recorriendo una lista de datos, react pide una propiedad (key) que es un valor unico el cual le tenemos que dar
                      //para que de esta manera react lo reconosca y pueda optimizar y agilizar mas el rendimiento de la app
                      return <Media key={item.id} {...item}/>
                    })
                  }
              </div>
        )
    }
