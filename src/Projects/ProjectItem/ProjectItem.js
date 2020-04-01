import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectItem.scss';
import '@fortawesome/fontawesome-free';


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
                    <div className="mc-content">
                        <div className="img-container">
                            <img src="https://picsum.photos/seed/picsum/718/718" alt={`${props.title} cover`} />
                        </div>
                        <div className="mc-description">
                            {props.description}
                        </div>
                    </div>
                    <button className="mc-btn-action">
                        <i className="fa fa-bars"></i>
                    </button> 
                    <div className="mc-footer">
                        <h4>
                            Technologies/Stack
                        </h4>   
                        <i className="fa fa-bars"></i>
                        <i className="fa fa-bars"></i>
                        <i className="fa fa-bars"></i>
                        <i className="fa fa-bars"></i>
                    </div>
                </article>
            </Link>
        </div>
    )
}