import React from 'react'
import './css/videoPlayerControls.css'

    const VideoPlayerControls = props =>(
          <div
              className='videoPlayerControls'
              ref={props.setRef}>
              {props.children}
          </div>
    )
    export default VideoPlayerControls
