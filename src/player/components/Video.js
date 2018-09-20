import React, {Component} from 'react'
import './video.css'
export default class Video extends Component{


      togglePlay = e =>{
        if (this.props.pausa) {
              this.video.play() //play y pausa son metodos nativos de la etiqueta video
        }else {
              this.video.pause()
        }
      }

    //ciclo de vida de un componente, con componentWillReceiveProps lo utilizamos cuando me llegan nuevas propiedades, lo que puedo hacer validar o modificar esas propiedades
    componentWillReceiveProps(nextProps){
          if(nextProps.pausa !== this.props.pausa){ //aqui lo que hago es validar si es distinto mis nuevas propiedades nextProps con mis propiedades que ya tengo
              this.togglePlay()
          }
    }
    setRef = e =>{
        this.video = e
    }
    render(){
        const {
          handleLoadedMetadata
        } = this.props
        return(
          <div className='video'>
              <video
                autoPlay={this.props.autoplay}
                src={this.props.src}
                ref={this.setRef}
                onLoadedMetadata={handleLoadedMetadata}/>
            </div>
        )
     }
  }
