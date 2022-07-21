import React from 'react';
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header />
                {/* the best ad */}
                <div className="the-best-ad">
                    <div>

                    </div>
                    <span>the best fitness club in the town</span>
                </div>
                {/* hero heading */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span>
                            +140
                        </span>
                        <span>
                            expert coaches
                        </span>
                    </div>
                    <div>
                        <span>
                            +978
                        </span>
                        <span>
                            numbers joined
                        </span>
                    </div>
                    <div>
                        <span>
                            +50
                        </span>
                        <span>
                            fitness programs
                        </span>
                    </div>
                </div>
                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                right side
            </div>
        </div>
    );
};

export default Hero;