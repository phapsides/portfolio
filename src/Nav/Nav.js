import React from 'react'
import 'animate.css';
import Logo from './logo.svg';
import './Nav.scss';

export default function Nav() {
    return (
        <nav className="Nav">
            <div className="container">
                <div className="grid">
                    <div className="column-xs-12 column-md-8">
                        {/* <p className="logo animated flipInX delay-3s">Panos Hapsides</p> */}
                        <img className="logo animated flipInX delay-3s" src={Logo} alt="" />
                    </div>
                    <div className="column-xs-12 column-md-4">
                        <ul>
                            <li>
                                <a href="/" title="About">About</a>
                            </li>
                            <li>
                                <a href="/" title="Projects">Projects</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
