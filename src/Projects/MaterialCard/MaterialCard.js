import React from 'react';
import { Link } from 'react-router-dom';
import './MaterialCard.scss';
import Content from './Content/Content';
import BtnAction from './BtnAction/BtnAction';
import Footer from './Footer/Footer';

export default function ProjectItem(props) {
    return (
        <div className="column-xs-12 column-md-4">
            <Link to={`/projects/${props.slug}`} className="ProjectItem">
                <article className={`material-card ribbon`}>
                    <h2>
                        <span>{props.title}</span>
                        <strong>
                            {/* TODO: Update the star with code icon */}
                            <i className="fa fa-fw fa-star"></i>
                            {props.company}
                        </strong>
                    </h2>
                    <Content />
                    <BtnAction />
                    <Footer />
                </article>
            </Link>
        </div>
    )
}