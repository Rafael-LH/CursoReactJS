import React, {Component} from 'react'
import './video.css'
export default class Video extends Component{


      togglePlay = e =>{
        if (this.props.pausa) {
              this.video.play()
        }else {
              this.video.pause()
        }
      }

    componentWillReceiveProps(nextProps){//ciclo de vida de un componente, con componentWillReceiveProps lo utilizamos cuando me llegan nuevas propiedades
          if(nextProps.pausa !== this.props.pausa){
              this.togglePlay()
          }
    }
    setRef = e =>{
        this.video = e
    }
    render(){
        return(
          <video
            autoPlay={this.props.autoplay}
            src={this.props.src}
            ref={this.setRef}/>
        )
     }
  }
