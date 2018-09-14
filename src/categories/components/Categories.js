import React from 'react'
import Category from './Category'
import './categories.css'

// componente funcional, dum component, componente tonto, componente UI (user interface), vista
export default function Categories(props){
          return(
              <div className='Categories'>
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
