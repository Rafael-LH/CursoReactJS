import React, {Component} from 'react'
// importamos nuestro componente de UI, Dumb component
import Search from '../components/Search'


// Smart component, Componente inteligente, controlador del mvc
export default class SearchContainer extends Component{
        state = {
            value: 'Rafael Lopez',
        }
        handleSubmit = e =>{
            e.preventDefault()
            // console.log(document.getElementById('input-search').value ) // se puede hacer de esta manera pero en react hay una mejor manera para hacerso y esa es con ref
            console.log(this.input.value);
        }
        setInputRef = element =>{
              this.input = element //hacemos referencia al input que seria el buscador, esta haciendo referencia a este mismo
        }
        handleInputChange = e =>{
          this.setState({
              value: e.target.value.replace(' ', '-')// o tambien this.e.input esto es lo mismo se puede hacer de estas dos maneras
              // lo de la funcion replace es solo para poder cambiar los espacios por guiones
          })
        }
        render(){
            return(
                // componente de UI
                <Search
                    setRef={this.setInputRef}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleInputChange}
                    value={this.state.value}/>
            )
        }
    }
