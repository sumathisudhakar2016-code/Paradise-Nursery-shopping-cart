import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-content fade-in">
                <div className="landing-text-container">
                    <h1 className="landing-title">Welcome To Paradise Nursery</h1>
                    <div className="divider"></div>
                    <p className="landing-subtitle">
                        Where Green Meets Serenity
                    </p>
                    <p className="landing-description">
                        At Paradise Nursery, we are passionate about bringing nature closer to you.
                        Our mission is to provide a wide range of high-quality plants that not only
                        enhance the beauty of your surroundings but also contribute to a healthier
                        and more sustainable lifestyle. From air-purifying plants to aromatic fragrant
                        ones, we have something for every plant enthusiast.
                    </p>
                    <Link to="/products">
                        <button className="get-started-btn">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
