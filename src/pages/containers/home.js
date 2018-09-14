import React, {Component} from 'react'
import HomeLayout from '../components/HomeLayout'
import Categories from '../../categories/components/Categories'
import Related from '../components/Related'
import ModalContainer from '../../widgets/containers/ModalContainer'

//este seria como mi controlador en php del mvc
//smart component, componente inteligente
export default class Home extends Component{
            render(){
                return(
                  <HomeLayout>
                      <Related />
                      <Categories categories={this.props.data.categories} />
                      <ModalContainer>
                          <h1>Esto es un portal</h1>
                      </ModalContainer>
                  </HomeLayout>
                )
            }
        }
