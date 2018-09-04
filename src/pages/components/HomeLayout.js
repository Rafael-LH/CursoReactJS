import React, {Component} from 'react'
import './HomeLayout.css'
//este seria como mi vista en php del mvc
//component UI (user interface) componente funcional dum component (componente tonto)
  export default function HomeLayout(props){
            return(
                <section className='HomeLayout'>
                    {props.children}
                </section>
            )
  }
