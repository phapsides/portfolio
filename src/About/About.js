import React from 'react';
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
                            <h1 class="section-heading">About Me</h1>
                        </div>
                    </div>
                    <div class="column-xs-12 column-md-4">
                        <img className="imageCover" src={me} alt="" />
                    </div>
                    <div class="column-xs-12 column-md-7">
                        <div class="intro">
                            <h2>
                                I am ...
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
                                Qui nisi aliqua voluptate ea voluptate nulla sit. Ut sunt nostrud dolor laborum culpa et culpa adipisicing elit voluptate reprehenderit dolore. Id nisi officia culpa enim mollit culpa culpa duis in. Pariatur aute amet magna aute id. Ex minim aliqua ea irure mollit culpa. Nisi esse amet ea reprehenderit adipisicing id voluptate.
                            </h3>
                        </blockquote>
                    </div>
                    <div class="column-xs-12 column-md-5">
                        <img className="imageCover" src={workstation} alt="" />
                    </div>
                </section>
            </div>
        </main>
    )
}
