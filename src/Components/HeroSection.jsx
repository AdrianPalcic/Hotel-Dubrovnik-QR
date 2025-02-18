import React from 'react'

const HeroSection = () => {
    return (
        <div className="hero-section">
            <img
                src="\Hotel Dubrovnik hero.avif"
                alt="Hotel Dubrovnik"
                className="hero-image"
                loading='lazy'
            />
            <div className="overlay">
                <div className="content-container">
                    <h1 className="title">Hotel Dubrovnik Kavana</h1>

                </div>
            </div>
        </div>
    )
}

export default HeroSection