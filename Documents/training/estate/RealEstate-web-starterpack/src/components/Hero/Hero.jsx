import react from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="flexCenter innerWidth paddings hero-container">
            <div className="hero-left">
                left
            </div>
            <div className="hero-right">
                <image src="./hero-image.png" alt = "hero-image" />
            </div>
        </div>
    </section>
  );
}

export default Hero;