import React,{Component} from 'react'
import Player from '../components/Player'
import Video from '../components/Video'
import Title from '../components/Title'
import PlayPausa from '../components/PlayPausa'
import Timer from '../components/Timer'
import VideoPlayerControls from '../components/VideoPlayerControls'
import FormattedTime from '../components/Utilidades'
import ProgressBar from '../components/ProgressBar'
import Spinner from '../components/Spinner'
import Volume from '../components/Volume'
import FullScreen from '../components/FullScreen'

  export default class PlayerContainer extends Component{
              state = {
                  pause: true,
                  duration: 0,
                  currentTime: 0,
                  loading: false,
                  mute: false,
                  volume: 0,
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
              handleTimeUpdate = event =>{
                  // console.log(this.video.currentTime); //currentTime es una propiedad nativa del elemento html video. la cual nos traera lo que dura nuestro video este log se imprimira segundo por segundo
                  this.setState({
                      currentTime: this.video.currentTime
                  })
              }
              handleProgressChange = event =>{
                  this.video.currentTime = event.target.value
              }
              handleSeeking = event =>{ //me he movido
                    this.setState({
                        loading: true
                    })
              }
              handleSeeked = event =>{ //he parado mi movimiento me detuve
                    this.setState({
                        loading: false
                    })
              }
              handleVolumeChange = event =>{
                    this.video.volume =  event.target.value //volume es un atributo nativo de HTML 5 de la etiqueta/elemento video, el cual me trae el valor del volumen, en que punto de la barra esta
              }
              handleVolumenClick = event =>{
                      this.setState({
                          mute: !this.state.mute, //de arranque estyo validando si se llama a esta funcion cambiara de false a true
                          volume:  this.video.volume,
                      })

                        this.video.volume = (!this.state.mute) ? 0 : this.state.volume
                        // console.log(this.state.volume);
              }
              handleClickFullScreen = event =>{
                  if(!document.webkitIsFullScreen){ //fullScreen es una API nativa del navegador el cual funciona distinto en cada navegadores como por ejemplo webkitIsFullScreen es para chrome
                      //mando el fullScreen
                      this.player.webkitRequestFullscreen() //webkitRequestFullScreen tambien en un API nativa del navegador
                    }else {
                      //salgo del fullScreen
                      document.webkitExitFullscreen()
                  }
              }
              setRef = event =>{
                  this.player = event //resivira el elemento HTML
              }
              render(){
                  return(
                      <Player>
                      <Title title='Holi'/>
                      <VideoPlayerControls
                        setRef={this.setRef}
                      >
                          <PlayPausa
                                pause={this.state.pause}
                                handleToggleClick={this.togglePlay}
                          />
                          <Timer
                              currentTime={FormattedTime(this.state.currentTime)}
                              duration={FormattedTime(this.state.duration)}
                          />
                          <ProgressBar
                              duration={this.state.duration}
                              value={this.state.currentTime}
                              handleProgressChange={this.handleProgressChange}
                          />
                          <Volume
                            handleVolumeChange={this.handleVolumeChange}
                            handleVolumenClick={this.handleVolumenClick}
                            mute={this.state.mute}
                          />
                        <FullScreen
                            handleClick={this.handleClickFullScreen}
                          />
                      </VideoPlayerControls>
                         <Spinner
                              active={this.state.loading}
                          />
                          <Video
                              pausa={this.state.pause}
                              autoplay={this.props.autoplay}
                              handleLoadedMetadata={this.handleLoadedMetadata}
                              handleTimeUpdate={this.handleTimeUpdate}
                              handleSeeking={this.handleSeeking}
                              handleSeeked={this.handleSeeked}
                              src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'/>

                       </Player>
                  )
              }
          }
