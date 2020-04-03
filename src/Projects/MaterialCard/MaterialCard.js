import React, { useState } from 'react';
import './MaterialCard.scss';
import Content from './Content/Content';
import BtnAction from './BtnAction/BtnAction';
import Footer from './Footer/Footer';

export default function ProjectItem(props) {

    let [isOpen, setIsOpen] = useState(false)

    return (
        <div className="column-xs-12 column-md-4">
            <div className="ProjectItem">
                <article className={`material-card ribbon ${isOpen && 'active'}`}>
                    <h2>
                        {props.title}
                    </h2>
                    <Content />
                    <BtnAction isOpen={() => setIsOpen(!isOpen)} />
                    <Footer />
                </article>
            </div>
        </div>
    )
}


