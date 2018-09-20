import React,{Component} from 'react'
    // UI Component, Component de UI, Dumb Component, Componente Tonto
    const FormattedTime = secs =>{
        const minutes = parseInt(secs / 60, 10) //el segundo parametro son las milesimas que quiero que se muestren en este caso seran 2
        const secons = parseInt(secs % 60, 10) //aqui saco el reciduo de de segundos que me lleguen entre 60 EJE: si tengo 60 segundos y lo divido entre 63 me devolvera 3 que es la sobra de la divicion
        return `${minutes}:${leftPad(secons.toString() )}`
    }
    const leftPad = number =>{
        const pad = '00'
        const numberLength = number.length
        const padLength = pad.length

        return pad.substring(0, padLength - numberLength) + number
    }

    export default FormattedTime
