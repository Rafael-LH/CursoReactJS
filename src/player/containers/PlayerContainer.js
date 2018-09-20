import React,{Component} from 'react'
import Player from '../components/Player'
import Video from '../components/Video'
import Title from '../components/Title'
import PlayPausa from '../components/PlayPausa'
import Timer from '../components/Timer'
import VideoPlayerControls from '../components/VideoPlayerControls'


  export default class PlayerContainer extends Component{
              state = {
                  pause: true,
                  duration: 0,
              }
              togglePlay = e =>{
                  this.setState({
                      pause: !this.state.pause //cambia el valor booleano de true a false y viceversa cada vez que llamemos a esta funcion
                  })
              }
              componentDidMount(){ //ciclo de vida de un componente con componentDidMount, lo que hace es cambiar el estado de las propiedades que me llegan
                  this.setState({
                      pause: (!this.props.autoplay) // aqui lo que estoy diciendo esque si autoplay llega en true entonces pausa va hacer true por lo tanto
                      // el icono que se mostrara sera el de pausa
                      //autoplay es una propiedad que me llega a este component entonces con componentDidMount la puedo modificar
                  })
              }
              handleLoadedMetadata = event =>{
                  this.video = event.target //quien disparo el evento ? pues event.taget
                  this.setState({
                      duration: this.video.duration
                  })
              }
              render(){
                  return(
                      <Player>
                      <Title title='Holi'/>
                      <VideoPlayerControls>
                          <PlayPausa
                                pause={this.state.pause}
                                handleToggleClick={this.togglePlay}
                                />
                          <Timer duration={this.state.duration}/>
                        </VideoPlayerControls>
                          <Video
                              pausa={this.state.pause}
                              autoplay={this.props.autoplay}
                              handleLoadedMetadata={this.handleLoadedMetadata}
                              src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'/>
                       </Player>
                  )
              }
          }
