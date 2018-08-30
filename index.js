import React from 'react'
import {render} from 'react-dom'
import Media from './src/playlist/components/media'


// ReactDOM.render(que voy a renderizar, y donde lo voy a renderizar)
render(<Media bandera={true} type='video' title='¿Por que aprender React?' author='Rafael Lopez' btn='Saber Mas' img='http://localhost:9000/images/covers/responsive.jpg'/>, document.getElementById('container') )
