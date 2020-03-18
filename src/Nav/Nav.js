import React from 'react'
import './Nav.scss';

export default function Nav() {
    return (
        <nav className="Nav">
            <div className="container">
                <div className="grid">
                    <div className="column-xs-12 column-md-8">
                        <p className="logo">Panos Hapsides</p>
                    </div>
                    <div className="column-xs-12 column-md-4">
                        <ul>
                            <li>
                                <a href="/" title="">About</a>
                            </li>
                            <li>
                                <a href="/" title="">Projects</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
