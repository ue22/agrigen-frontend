import React from 'react';
import '../styles/home.css';

const HomePage = () => {
    return (
        <div>
             <header>
                <nav>
                    <div className="logo">Agri<span>Gen</span></div>
                    <ul>
                        <li><a href="/HomePage">Home</a></li>
                        <li><a href="/Dashboard">Dashboard</a></li>
                        <li><a href="/pages/SignInPage.js">Login</a></li>
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
