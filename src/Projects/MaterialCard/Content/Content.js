import React from 'react';
import './Content.scss';

export default function Content(props) {
    return (
        <div className="Content">
            <div className="img-container">
                <img src="https://picsum.photos/seed/picsum/718/718" alt={`${props.title} cover`} />
            </div>
            <div className="description">
                {props.description}
            </div>
        </div>
    )
}
