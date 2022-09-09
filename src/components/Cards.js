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
                        text="Pathfinding Visualizer"
                        label="Pathfinding Visualizer"
                        path="https://github.com/VictorWu03/pathfinding-visualizer"
                        />
                        <Carditem 
                        src="images/image1.jpg"
                        text="Financial Algorithmic Trader"
                        label="Algorithmic Trader"
                        path="https://github.com/VictorWu03/Algorithmic-Trader"
                        />
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
    
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
