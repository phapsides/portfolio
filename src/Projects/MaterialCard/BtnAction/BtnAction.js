import React from 'react';
import './BtnAction.scss';

export default function BtnAction(props) {
    return (
        <button
            onClick={props.isOpen}
            className="BtnAction"
        >
            <i className="fa fa-bars"></i>
        </button> 
    )
}
