import React from 'react'
import './css/videoPlayerControls.css'

    const VideoPlayerControls = props =>(
          <div className='videoPlayerControls'>
              {props.children}
          </div>
    )
    export default VideoPlayerControls
