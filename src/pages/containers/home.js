import React, {Component} from 'react'
import HomeLayout from '../components/HomeLayout'
import Categories from '../../categories/components/Categories'
import Related from '../components/Related'
import ModalContainer from '../../widgets/containers/ModalContainer'
import Modal from '../../widgets/components/Modal'
import HandleError from '../../error/containers/handleError'
import PlayerContainer from '../../player/containers/PlayerContainer'

//este seria como mi controlador en php del mvc
//smart component, componente inteligente, controlador del mvc
export default class Home extends Component{

            state = {
                close: false,
            }
            handleToggleModal = eve =>{
              this.setState({
                close: this.state.close ? false : true,
              })

            }
            render(){
                return(
                  <HandleError>
                      <HomeLayout>
                          <Related />
                          <PlayerContainer />
                          <Categories
                            categories={this.props.data.categories}
                            toggleModal={this.handleToggleModal}
                            />
                          {
                            this.state.close && //si esta condicion se cumple entonces me hara lo que esta dentro de ModalContainer esto es igual que un if ternario ? si : si no
                            <ModalContainer>
                                <Modal
                                  toggleModal={this.handleToggleModal}>
                                  <h1>Esto es un portal</h1>
                                </Modal>
                            </ModalContainer>
                          }
                      </HomeLayout>
                  </HandleError>

                )
            }
        }
