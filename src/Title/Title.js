import React from 'react';
import './Title.scss';

export default function Title(props) {
    return (
        <div className="Title">
            <h1 className="section-heading animated fadeIn delay-2s">
                {props.pageTitle}
            </h1>
        </div>
    )
}
