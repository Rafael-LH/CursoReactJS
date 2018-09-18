import React, {Component} from 'react'
import './video.css'
export default class Video extends Component{
    render(){
        return(
          <video
            autoPlay={this.props.autoPlay}
            src={this.props.src}/>
        )
     }
  }
