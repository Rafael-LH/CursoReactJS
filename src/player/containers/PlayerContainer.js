import React,{Component} from 'react'
import Player from '../components/Player'
import Video from '../components/Video'
import Title from '../components/Title'
import PlayPausa from '../components/PlayPausa'


  export default class PlayerContainer extends Component{
              render(){
                  return(
                      <Player>
                          <Title title='Holi'/>
                          <PlayPausa />
                          <Video
                              autoPlay={false}
                              src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'/>
                       </Player>
                  )
              }
          }
