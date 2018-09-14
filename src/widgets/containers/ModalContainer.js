import React,{Component} from 'react'
import ReactDOM, {createPortal} from 'react-dom' //createPortal es una funcion de react-dom para renderear otro componente

// los portales se utilizan para renderear componentes dentro de otro container/contenedor, esto se suele utilizar cuando
// creas modales
export default class ModalContainer extends Component{
          render(){
              // return createPortal(que voy a renderear, donde lo voy a renderear)
              return createPortal(
                    this.props.children,
                    document.getElementById('modal-container')
                  )
            }
        }
