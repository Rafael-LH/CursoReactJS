import React from 'react'
import Category from './Category'


// componente funcional, dum component, componente tonto, componente UI (user interface), vista
export default function Categories(props){
          return(
              <div>
                {
                  props.categories.map(items =>{
                    return <Category key={items.id} {...items} />
                  })
                }
              </div>
          )
}
