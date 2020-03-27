import React from 'react';
import 'animate.css';
import './About.scss';
import Title from './../Title/Title';
import Image from './../Image/Image';
import profilePicture from './../common/images/profile-picture.jpg';
import workstation from './../common/images/workstation.jpg';

export default function About() {
    return (
        <main className="About">
            <div className="container">
                <section className="grid">
                    <div className="column-xs-12 column-md-1">
                        <Title 
                            pageTitle="About Me" 
                        />
                    </div>
                    <div className="column-xs-12 column-md-4">
                        <Image 
                            image={profilePicture} 
                            imageTitle="Panos Hapsides profile picture" 
                            className="imageCover animated fadeInLeft delay-1s"
                        />
                    </div>
                    <div className="column-xs-12 column-md-7">
                        <div className="intro">
                            <h2>
                                Front End Web Developer 
                            </h2>
                            <p>
                                Qui nisi aliqua voluptate ea voluptate nulla sit. Ut sunt nostrud dolor laborum culpa et culpa adipisicing elit voluptate reprehenderit dolore. Id nisi officia culpa enim mollit culpa culpa duis in. Pariatur aute amet magna aute id. Ex minim aliqua ea irure mollit culpa. Nisi esse amet ea reprehenderit adipisicing id voluptate.
                            </p>
                            <p>
                                Qui nisi aliqua voluptate ea voluptate nulla sit. Ut sunt nostrud dolor laborum culpa et culpa adipisicing elit voluptate reprehenderit dolore. Id nisi officia culpa enim mollit culpa culpa duis in. Pariatur aute amet magna aute id. Ex minim aliqua ea irure mollit culpa. Nisi esse amet ea reprehenderit adipisicing id voluptate.
                            </p>
                            <p>
                                Qui nisi aliqua voluptate ea voluptate nulla sit. Ut sunt nostrud dolor laborum culpa et culpa adipisicing elit voluptate reprehenderit dolore. Id nisi officia culpa enim mollit culpa culpa duis in. Pariatur aute amet magna aute id. Ex minim aliqua ea irure mollit culpa. Nisi esse amet ea reprehenderit adipisicing id voluptate.
                            </p>
                        </div>
                    </div>
                    <div className="column-xs-12 column-md-7">
                        <blockquote>
                            <h3>
                                I am drowning in data, but I am starving for knowledge! 
                            </h3>
                        </blockquote>
                    </div>
                    <div className="column-xs-12 column-md-5">
                        <Image 
                            image={workstation} 
                            imageTitle="My workstation" 
                            className="imageCover"
                        />
                    </div>
                </section>
            </div>
        </main>
    )
}
