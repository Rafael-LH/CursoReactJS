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
                close: false, //le damos el estado inicial
            }
            handleToggleModal = media =>{
              this.setState({
                close: this.state.close ? false : true,
                media
              })

            }
            // autoplay esta por defaul en true y de esta manera es como mando el autoplay en true a PlayerContainer
            render(){
                return(
                  <HandleError>
                      <HomeLayout>
                          <Related />
                          <Categories
                            categories={this.props.data.categories}
                            toggleModal={this.handleToggleModal}
                            />
                          {
                            this.state.close && //si esta condicion se cumple entonces me hara lo que esta dentro de ModalContainer esto es igual que un if ternario ? si : si no
                            <ModalContainer>
                                <Modal
                                  toggleModal={this.handleToggleModal}>
                                  <PlayerContainer
                                      autoplay={true}
                                      src={this.state.media.src}
                                      title={this.state.media.title}
                                    />
                                </Modal>
                            </ModalContainer>
                          }
                      </HomeLayout>
                  </HandleError>

                )
            }
        }
