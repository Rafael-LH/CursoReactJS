import React from 'react'
import {render} from 'react-dom'
import Home from '../pages/containers/home'
import data from '../api.json'

//este seria como mi controlador en php del mvc
// ReactDOM.render(que voy a renderizar, y donde lo voy a renderizar)
render(
        <Home data={data}/>,  
        document.getElementById('home-container')
      )
