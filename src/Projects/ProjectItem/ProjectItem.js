import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectItem.scss';

export default function ProjectItem(props) {
    return (
        <div className="column-xs-12 column-md-4">
            <Link to={`/projects/${props.slug}`} className="ProjectItem">
                <article className="material-card Pink">
                    <h2>
                        <span> {props.title}</span>
                        <strong>
                            {/* TODO: Update the star with code icon */}
                            <i className="fa fa-fw fa-star"></i>
                            {props.company}
                        </strong>
                    </h2>
                    <div className="mc-content">
                        <div className="img-container">
                            {/* <img className="img-responsive" src={props.image}> */}
                            <img src="https://picsum.photos/seed/picsum/200/300" alt={`${props.title} image cover`} />
                        </div>
                        <div className="mc-description">
                            {props.description}
                        </div>
                    </div>
                    <a className="mc-btn-action">
                        <i className="fa fa-bars"></i>
                    </a>
                    <div className="mc-footer">
                        <h4>
                            Technologies/Stack
                        </h4>
                        <Link className="fa fa-fw fa-facebook"></Link>
                        <Link className="fa fa-fw fa-twitter"></Link>
                        <Link className="fa fa-fw fa-linkedin"></Link>
                        <Link className="fa fa-fw fa-google-plus"></Link>
                    </div>
                </article>
            </Link>
        </div>
    )
}