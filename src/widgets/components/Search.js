import React from 'react'
import './search.css'

// export default function Search(props){ //se puede hacer de esta manera un componente de UI
//         return(
//
//         )
//     }

// NOTA: si le queremos dar un valor inicial a nuestro input no podemos poner value porque despues no dejara modificar ese valor
      // entonces devemos utilizar defaultValue='Rafael' y seguido del valor como su fue un value

//NOTA: lo que hice en la linea 23 que es el onChange esto es para controlar lo que me llegue por la caja de texto, para modificar lo que me llegue

// las ref se utilizan como referencia en react es como un id pero en react en vez de id se utiliza ref
const Search = props =>( //o tambien de esta manera con un arrow function, el return biene implicito, es por eso que no hace fatlta poner
      <form className='search' onSubmit={props.handleSubmit}>
          <input ref={props.setRef}
                 name='search'
                 placeholder='Search'
                 className='search-input'
                 type='text'
                 onChange={props.handleChange}
                 value={props.value}/>

      </form>
)

export default Search
