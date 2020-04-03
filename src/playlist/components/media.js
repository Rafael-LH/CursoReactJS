import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'
import './media.css'
import PropTypes from 'prop-types'

//componente puro, el PureComponent valida si sus propiedades fueron actualizadas, esas es la diferencia entre un componente y un PureComponent
export default class Media extends PureComponent{
      //EJERCICIO 1
      // es un metodo que tienen todas las clases de javascript el cual se ejecuta al momento de ser instanciada
      //el constructor resive todas nuestras propiedades
          // esto esta hecho en ecma6
          // constructor(props){
          //     super(props) //y con super(props) podemos utilizar todas nuestras propiedades
          //     //enlazamos la funcion detalles con nuestra clase Media, bind es la funcion que contiene todas las funciones la cual nos permite definir el scope ademas de llamar/crear una funcion
          //     this.detalles = this.detalles.bind(this)
          // }

        //con esta arrow function hacemos lo que esta arriba ya que las arrow function heredan el contexto de su padre y quien es su padre ? pues Media
        //el cual tiene propiedades
         // detalles = e => {
         //    e.preventDefault()
         //    alert('Holi')
         // }

         //EJERCICIO 2 ecma6
         //para cambiar el valor de una propiedad de un componente lo hacemos de la siguiente manera
         // constructor(props){
         //     super(props)
         //     this.state = {
         //       author: props.author
         //
         //     }
         // }
         //con ecma7 no necesitamos el contructor para poder cambiar el estado de nuestras propiedades, solo necesitamos poner state seguido de
         // la propiedad que queremos cambiar su valor
         state = {  //con state cambiamos el valor de nuestras propiedades
           author: 'Rafael Lopez', //tenemos que poner un valor statico antes de cambiar el valor de la propiedad
           bandera: true
         }
         detalles = e => {
            e.preventDefault()
            //con este metodo puedo cambiar el valor de mis propiedades
            if(this.state.bandera){
              this.setState({
                  author: 'Edgar Antoñoo',
                  bandera: false
              })
          }else {
            this.setState({
                author: 'Rafael Lopez',
                bandera: true
            })
          }
      }

         //EJERCICIO 2 ecma7
         toggleModal = event => {
              this.props.toggleModal(this.props) //aqui le paso todas mis propedades a mi toggleModl que biene desde Home en pages/
         }
        render(){
            const styles = { //aqui creamos nuesro objeto constante para dar estilos
                container:{
                  color: '#44546b',
                  cursor: 'pointer',
                  width: 260,
                  border: '1px solid red'
                },
                h1:{
                  fontSize: '1.3em'
                }
            }

          return (
              // <div style={styles.container}> esta seria una manera de dar estilos dentro de js
              // para poner una calse de css en JSX lo hace mos con className de esta manera se tiene que hacer ne JSX para que tome los estilos de nuetsro Media.css
              //Nota: className, src, width esto no se le llaman atributos en React si no propiedades
              // en la parte del h1 estamos recibiendo una propiedad de nuestro componente media. con this.props podemos acceder a nuetsra propiedades del componente

              <div id='detalle' className="media">
                <div className='media-cover' onClick={this.toggleModal}>
                    <img className='media-image'
                         src={this.props.cover}
                         width={260}
                         height={160}/>
                    <h3 className='media-title' >{this.props.title}</h3>
                    <p className='media-author'>{this.props.author}</p>
                </div>
              </div>
           )
      }
 }
Media.propTypes = { //aqui estoy validando mi componente que valla a llegar el valor de dato deseado
    cover: PropTypes.string,
    title: PropTypes.string.isRequired, //la propiedad isRequired nos sirve para que no nos manden valores nulos
    author: PropTypes.string,
    btn: PropTypes.string,
    type: PropTypes.oneOf(['video','audio']) //con esto estoy validando que me llegue un tipo de video o audio que oneOf quiere decir uno de video o audio
}
