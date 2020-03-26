import React from 'react';
import 'animate.css';
import './About.scss';
import me from './assets/me.jpg';
import workstation from './assets/workstation.jpg';

export default function About() {
    return (
        <main class="About">
            <div class="container">
                <section class="grid info">
                    <div class="column-xs-12 column-md-1">
                        <div class="about">
                            <h1 class="section-heading animated fadeIn delay-2s">About Me</h1>
                        </div>
                    </div>
                    <div class="column-xs-12 column-md-4">
                        <img className="imageCover animated fadeInLeft delay-1s" src={me} alt="" />
                    </div>
                    <div class="column-xs-12 column-md-7">
                        <div class="intro">
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
                    <div class="column-xs-12 column-md-7">
                        <blockquote>
                            <h3>
                                I am drowning in data, but I am starving for knowledge!
                            </h3>
                        </blockquote>
                    </div>
                    <div class="column-xs-12 column-md-5">
                        <img className="imageCover animated fadeInUp delay-2s" src={workstation} alt="" />
                    </div>
                </section>
            </div>
        </main>
    )
}
