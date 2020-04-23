import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import test from './../common/images/workstation.jpg';
import Logo from './logo.svg';

export default function Home() {
    return (
        <main className="Home">
            <section className="p-0 block">
                <div className="container-fluid minh-100vh">
                    <section className="grid content-center">
                        <div className="content">
                            <img className="logo" src={Logo} alt="Panos Hapsided logo" />
                            <ul className="social-icons">
                                <li>
                                    <Link to="//www.linkedin.com/in/panoshapsides/" target="_blank">
                                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M437 0H75C33.645 0 0 33.645 0 75v362c0 41.355 33.645 75 75 75h362c41.355 0 75-33.645 75-75V75c0-41.355-33.645-75-75-75zm45 437c0 24.813-20.188 45-45 45H75c-24.813 0-45-20.188-45-45V75c0-24.813 20.188-45 45-45h362c24.813 0 45 20.188 45 45zm0 0" />
                                            <path d="M91 422h90V210H91zm30-182h30v152h-30zm0 0M331.086 210H331c-10.371 0-20.473 1.734-30 5.102V210h-90v212h90V315c0-8.27 6.73-15 15-15s15 6.73 15 15v107h90V304.687c0-48.546-39.383-94.64-89.914-94.687zM391 392h-30v-77c0-24.813-20.188-45-45-45s-44.996 20.188-45 44.996V392h-30V240h30v30.02l24.008-18.032C305.449 244.145 317.895 240 331 240h.059c31.93.031 59.941 30.258 59.941 64.688zm0 0M91 180h90V90H91zm30-60h30v30h-30zm0 0" />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="//github.com/phapsides" target="_blank">
                                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M256 0C115.3 0 0 116.3 0 257c0 139.883 114.25 255 256 255 141.574 0 256-114.945 256-255C512 116.3 396.7 0 256 0zm45 477.5c-14.398 3-29.7 4.5-45 4.5s-30.602-1.5-45-4.5v-70.2c0-16.8 4.5-22.8 10.5-30.902 3.055-3.492 4.898-6.625 18.598-27.296L217 345.5c-59.402-8.7-82.8-39.602-92.102-63.602-12-32.097-5.699-72.3 15.903-97.796 3.3-3.903 6-10.504 3.601-17.403-4.504-13.8-3.902-35.699-.902-44.101 15.906 2.273 32.262 13.668 45.902 21.902 6.286 3.668 9.582 2.7 12.598 3 10.96-2.281 28.059-7.8 54.3-7.8 16.2 0 33.302 2.398 50.102 7.198 3.004-.07 7.832 2.485 16.2-2.398 14.257-8.687 30.058-19.691 45.898-21.902 3 8.402 3.602 30.3-.898 44.101-2.403 6.899.296 13.5 3.601 17.403 21.598 25.5 27.899 65.699 15.899 97.796-9.301 24-32.7 54.903-92.102 63.602l-23.098 3.602c14.16 21.367 15.653 23.93 18.602 27.296C296.5 384.5 301 390.5 301 407.301zm30-8.7v-61.5c0-17.1-3.602-28.5-8.402-36.902 45.601-12.296 78.004-39.3 92.402-78 15.3-40.796 8.402-89.398-17.102-123 4.504-20.097 4.504-52.199-6.296-67.199C386.8 95.602 380.199 92 371.8 92h-.301c-23.262 1.258-41.57 12.973-61.2 24.898-18-4.8-36.3-7.199-54.6-7.199-18.598 0-37.2 2.7-53.696 7.2C181.34 104.437 163.207 93.226 139.3 92c-7.5 0-14.102 3.602-18.903 10.2-10.796 15-10.796 47.1-6.296 67.198-25.504 33.602-32.403 82.5-17.102 123 14.398 38.7 46.8 65.704 92.402 78-3.722 6.512-6.668 14.915-7.828 26.286-9.21 3.175-17.199 4.21-24.629 2.027-7.836-2.316-13.941-7.547-19.246-16.469-11.914-20.015-32.207-36.355-55.312-34.23l2.636 29.883c10.7-.98 21.348 10.34 26.88 19.671 9.124 15.368 21.417 25.446 36.546 29.914 11.23 3.31 21.496 3.23 32.551.872V468.8C93.7 438.199 30 354.8 30 257 30 132.8 131.8 30 256 30s226 102.8 226 227c0 97.8-63.7 181.2-151 211.8zm0 0" />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="grid">
                        <div className="column-xs-6 column-md-6 text-center">
                            <Link to="/about" className="block">
                                <div className="bg-holder" style={{ backgroundImage: `url(${test})` }}>
                                </div>
                                <div className="sidebar-item">
                                    <img className="mb-2 mb-lg-3 nav-icon" src="assets/img/lineicons/favorites.svg" alt="" />
                                    <h2 className="font-weight-light fs-1 fs-xl-3">About</h2>
                                </div>
                            </Link>
                        </div>
                        <div className="column-xs-6 column-md-6 text-center">
                            <Link to="#" className="block">
                                <div className="bg-holder" style={{ backgroundImage: `url(${test})` }}>
                                </div>
                                <div className="sidebar-item">
                                    <img className="mb-2 mb-lg-3 nav-icon" src="assets/img/lineicons/suitcase.svg" alt="" />
                                    <h2 className="font-weight-light fs-1 fs-xl-3">Skills</h2>
                                </div>
                            </Link>
                        </div>
                        <div className="column-xs-6 column-md-6 text-center">
                            <Link to="/projects" className="block">
                                <div className="bg-holder" style={{ backgroundImage: `url(${test})` }}>
                                </div>
                                <div className="sidebar-item">
                                    <img className="mb-2 mb-lg-3 nav-icon" src="assets/img/lineicons/heart.svg" alt="" />
                                    <h2 className="font-weight-light fs-1 fs-xl-3">Projects</h2>
                                </div>
                            </Link>
                        </div>
                        <div className="column-xs-6 column-md-6 text-center">
                            <Link to="#" className="block">
                            <div className="bg-holder" style={{ backgroundImage: `url(${test})` }}>
                            </div>
                            <div className="sidebar-item">
                                <img className="mb-2 mb-lg-3 nav-icon" src="assets/img/lineicons/placeholder.svg" alt="" />
                                <h2 className="font-weight-light fs-1 fs-xl-3">Contact</h2>
                            </div>
                            </Link>
                        </div>
                    </section>
                </div>
                {/* end of .container */}
            </section>
        </main>
    );
}
