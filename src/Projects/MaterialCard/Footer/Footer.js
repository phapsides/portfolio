import React from 'react';
import './Footer.scss';
import 'devicon';

export default function Footer(props) {
    return (
        <div className="Footer">
            <h4>
                Technologies/Stack
            </h4>
            {
                props.coreTechnologies
                    .map(technology =>
                        <i className={`devicon devicon-${technology} colored`}></i> 
                    )
            }  
        </div>
    )
}
