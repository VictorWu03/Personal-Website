import React from 'react';
import '../../App.css';
import './Resume.css'

export default function Resume() {
    return (
        <div className="Resume-director">
            {/* <h3 className="resume-directory">
                <a href="https://github.com">RESUME</a>
                
            </h3> */}
                <iframe src="/assets/resume.pdf" 
                width="800" 
                height="1100">
        </iframe>
        </div>
    )
}