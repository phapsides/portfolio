import React from 'react'
import { Link } from 'react-router-dom';
import 'animate.css';
import './Nav.scss';

export default function Nav() {
    return (
        <nav className="Nav">
            <div className="container">
                <div className="grid">
                    <div className="column-xs-12 column-md-8">
                        <p className="logo animated flipInX delay-3s">
                            <Link to="/">
                                Panos Hapsides
                            </Link>
                        </p>
                    </div>
                    <div className="column-xs-12 column-md-4">
                        <ul>
                            <li>
                                <Link to="/">About</Link>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}