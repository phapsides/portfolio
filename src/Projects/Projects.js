import React from 'react';
import './Projects.scss';
import Title from './../Title/Title';
import MaterialCard from './MaterialCard/MaterialCard';
import getProjects from './getProjects';

export default function Projects() {
    return (
        <main className="Project">
            <div className="container">
                <section className="grid">
                    <div className="column-xs-12 column-md-1">
                        <Title pageTitle="Projects" />
                    </div>
                    <div className="column-xs-12 column-md-11">
                        <section className="grid">
                            {
                                getProjects().map(projectItem => 
                                    <MaterialCard 
                                        key={projectItem.slug}
                                        slug={projectItem.slug} 
                                        title={projectItem.title} 
                                        coreTechnologies={projectItem.coreTechnologies}
                                    />
                                )
                            }
                        </section>
                    </div>
                </section>
            </div>
        </main>
    )
}