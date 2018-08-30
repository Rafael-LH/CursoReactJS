import React from 'react'
import {render} from 'react-dom'
import Playlist from './src/playlist/components/playlist'
import data from './src/api.json'

// ReactDOM.render(que voy a renderizar, y donde lo voy a renderizar)
render(<Playlist data={data} />, document.getElementById('container') )
