import React, {PureComponent} from 'react'
import Media from './media'
import Play from '../../icons/components/Play'

// componente funcional, con los componentes funcionales evitamos el re render
export default function Playlist(props){
          const playlist = props.data.categories[0].playlist
            return(
              <div className='Media'>
                  {
                    playlist.map(item => {
                      //como estoy recorriendo una lista de datos, react pide una propiedad (key) que es un valor unico el cual le tenemos que dar
                      //para que de esta manera react lo reconosca y pueda optimizar y agilizar mas el rendimiento de la app
                      return <Media key={item.id} {...item}/>
                    })
                  }
                  <Play size={35} color='red' color2='blue' color3='grey' color4='black'/>
              </div>
        )
    }
