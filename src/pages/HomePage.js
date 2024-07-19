import React from 'react';
import '../styles/home.css';

const HomePage = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className="logo">Shield<span>Harvest</span></div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="homepage-container">
                    <div className="homepage-box">
                        <h1>
                            Accurately track and<br />
                            forecast, and<br />
                            pest and<br />
                            disease outbreaks
                        </h1>
                        <button className="get-started-button">Get Started</button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
