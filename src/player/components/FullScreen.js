import React from 'react'
import IconFullScreen from '../../icons/components/FullScreen'
import './css/fullScreen.css'


  const FullScreen = props => (
        <div
            onClick={props.handleClick}
            className='fullScreen'>
            <IconFullScreen
                size={25}
                color='white'
            />
        </div>
  )
  export default FullScreen
