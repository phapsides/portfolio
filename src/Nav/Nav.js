import React from 'react'
import { Link } from 'react-router-dom';
import 'animate.css';
// import Logo from './logo.svg';
import './Nav.scss';

export default function Nav() {
    return (
        <nav className="Nav">
            <div className="container">
                <div className="grid">
                    <div className="column-xs-12 column-md-8">
                        <p className="logo animated flipInX delay-3s">Panos Hapsides</p>
                        {/* <img className="logo animated flipInX delay-3s" src={Logo} alt="Panos Hapsided logo" /> */}
                    </div>
                    <div className="column-xs-12 column-md-4">
                        <ul>
                            <li>
                                <Link to="/">About</Link>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}