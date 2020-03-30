import React from 'react';
import './NotFound.scss';
import Title from './../Title/Title';

export default function NotFound() {
    return (
        <main className="NotFound">
            <div className="container">
                <section className="grid">
                    <div className="column-xs-12 column-md-1">
                        <Title pageTitle="Not Found"/>
                    </div>
                    <div className="column-xs-12 column-md-11">
                        <div className="messageWrapper">
                            <div className="message">
                                <h1>Oops!</h1>
                                <h2>404 - The Page can't be found</h2>
                            </div>
                            <a href="/">Go To Homepage</a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
