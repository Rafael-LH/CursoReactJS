import React, {Component} from 'react'
import RegularError from '../components/RegularError'
import './handleError.css'


export default class HandleError extends Component{

          state = {
              handleError: false, //devemos de dar un estado inicial
          }

          // el component did catch se utiliza como un manejador de errores o mas bien es un manejador de errores el cual nos reporta su hubo un error
          // como por ejemplo tendremos casos donde a un componente no le lle la informacion no se este rendereando por alguna razon entonces en el navegador
          // no ocurrira nada o tambien que resivamos un valor o dato que no estabamos esperando
          componentDidCatch(error, info){
            this.setState({
                handleError: true,
            })
          }
          render(){
              // dentro del metodo render podemos poner cualquier cosa que sea de javascript
              // si hay un error en este componente o en cual quiera de sus hijos aparecera este mensaje por pantalla
            if (this.state.handleError) {
                return (
                <div className='handleError'>
                  <RegularError error='ha ocurrido algun error' />
                </div>
              )
             }
                return this.props.children
          }
      }
