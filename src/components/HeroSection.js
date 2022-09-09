import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { ButtonResume } from './ButtonResume';
import { ButtonProject } from './ButtonProject';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-3.mp4" autoPlay loop muted />
            <h1>
                VICTOR WU 
            </h1>
            <p>
                Software Engineer | Versa Networks
            </p>
            <p>
                Computer Science Student | University of Waterloo
            </p>
            <div className="hero-btns">
                <ButtonResume 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    RESUME
                </ButtonResume>
                <ButtonProject 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    Projects <i className='far fa-play-circle' />
                </ButtonProject>
            </div>
            
        </div>
    )
}

export default HeroSection;


