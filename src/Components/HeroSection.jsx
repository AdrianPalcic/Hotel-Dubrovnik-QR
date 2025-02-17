import React from 'react'

const HeroSection = () => {
    return (
        <div className="hero-section">
            <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hotel%20Dubrovnik%20hero.jpg-eO81c6TNeIv7Gc81lLdbzR1R3gMRLb.jpeg"
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