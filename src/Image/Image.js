import React from 'react'
import './Image.scss'

export default function Image(props) {
    return (
        <img 
            src={props.image} 
            alt={props.imageTitle} 
            className={props.className}
        />
    )
}
