import React from 'react';
import './Footer.scss';
import 'devicon';

export default function Footer(props) {
    return (
        <div className="Footer">
            <h4>
                Technologies/Stack
            </h4>
            {/* TODO: Populate the below from getProjects */}
            <i class={`devicon devicon-react-original colored`}></i>
            <i class={`devicon devicon-javascript-plain colored`}></i>
            <i class={`devicon devicon-sass-original colored`}></i>        
        </div>
    )
}
