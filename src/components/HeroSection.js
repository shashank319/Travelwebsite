import React from 'react'
import '../App.css'
import Button from './Button'
import './HeroSection.css'
import Globe from '../videos/video-2.mp4';

function HeroSection() {
    return (
        <div className="hero-container container-fluid">
           <video src={Globe} autoPlay loop  muted type="video/mp4"/>
            <h1>MY  VISIT AROUND WORLD</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                &nbsp;
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch Trailer <i className="far fa-play-circle"/>
                </Button>
                
            </div>
        </div>
    )
}

export default HeroSection
