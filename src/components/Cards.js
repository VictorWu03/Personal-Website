import React from 'react'
import Carditem from './Carditem'
import './Cards.css';
import { Link } from 'react-router-dom';



function Cards() {
    return (
        <div className="cards">
            <h1>Check out my recent activity</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <Carditem 
                        src="images/image1.jpg"
                        text="WEATHER APPLICATION"
                        label="Projects"
                        path="https://github.com/VictorWu03/Weather-App" />
                        <Carditem 
                        src="images/image1.jpg"
                        text="SUDOKU SOLVER"
                        label="Projects"
                        path="https://github.com/VictorWu03/Sudoku-Solver" />
                        <Carditem 
                        src="images/image1.jpg"
                        text="GOMOKU GAME"
                        label="Projects"
                        path="https://github.com/VictorWu03/major-project-cs30" />
                        <Carditem 
                        src="images/image1.jpg"
                        text="RESUME"
                        label="Resume"
                        path="https://docs.google.com/document/d/1emkgOnnBvm7PyToIsE3QAEQVHgm730VjcmYd1jeNvuw/edit?usp=sharing"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
