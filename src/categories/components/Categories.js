import React from 'react'
import Category from './Category'
import './categories.css'
import Search from '../../widgets/containers/SearchContainer.js'


// componente funcional, dum component, componente tonto, componente UI (user interface), vista del mvc
export default function Categories(props){
          return(
              <div className='Categories'>
              <Search />
                {
                  props.categories.map(items =>{
                    return (
                          <Category
                            key={items.id}
                            {...items}
                            toggleModal={props.toggleModal}
                            />
                        )
                  })
                }
              </div>
          )
}
