import React from 'react'
import Projectpanel from './Projectpanel';
import './Projects.css';

function Panel() {
    return (
        <div className="panel">
            <h1>Recent Projects</h1>
            <div className="panel__container">
                <div className="panel__wrapper">
                    <ul className="panel__item">
                        <Projectpanel 
                        src="images/image1.jpg"
                        text="WEATHER APPLICATION"
                        label="Projects"
                        path="https://github.com/VictorWu03/Weather-App" />
                        <Projectpanel  
                        src="images/image1.jpg"
                        text="SUDOKU SOLVER"
                        label="Projects"
                        path="https://github.com/VictorWu03/Sudoku-Solver" />
                        <Projectpanel 
                        src="images/image1.jpg"
                        text="GOMOKU GAME"
                        label="Projects"
                        path="https://github.com/VictorWu03/major-project-cs30" />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Panel
