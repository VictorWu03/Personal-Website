import React from 'react'
import Projectpanel from './Projectpanel';
import './Projects.css';
import './FeatureSection.css';
import Footer from '../Footer';

function Panel() {
    return (
        <div class="container">
            <div class="feature-title">
                <h1>Projects</h1>
            </div>
            {/* <div class="feature-container">
                <h2>Software Engineer</h2>
                <h4>Versa Networks</h4>
                <h4>San Jose, California, United States</h4>
                <div class="skills-container">
                    Skills: Javascript, HTML, CSS, Bootstrap 5, PHP, WordPress
                </div>
                <div class="description-container">
                    <p>Completed a 16 week intership with Versa Networks as a front-end software engineer. During this time, I created a variety of front-end elements for the Versa site used across 300 pages. Additionally, I worked on the optimization of scripts used on the Versa site improving SEO optimization by 30%. I am now working part-time at Versa Networks as a software engineer after the completion of the internship and I am continuing to contibute to the front-end library of Versa products.</p>
                </div>
            </div> */}
            <div class="feature-container">
                <h2>Finance Trading Algorithm</h2>
                <div class="skills-container">
                    Skills: Python, Numpy, Pandas, xlsxwriter
                </div>
                <div class="description-container">
                    <p>Created 3 algorithmic trading strategies ( equal weight, quantitative momentum, quantitative value ) for stocks listed on the S&amp;P 500 using data from the IEX Cloud API. I utilized Python along with the Numpy, Pandas, and xlsxwriter libraries to produce the top 50 stocks based on each algorithmic trading strategy. The program produces the top 50 stocks, number of shares to buy, and the price to buy at in a downloadable excel file</p>
                </div>
            </div>
            <div class="feature-container">
                <h2>Pathfinding Visualizer</h2>
                <div class="skills-container">
                    Skills: Javascript, React
                </div>
                <div class="description-container">
                    <p>Created a program which uses various pathfinding algorithms such as Dijkstra's Algorithm to find the shortest path in a interactive grid. Users have the ability to place walls to create custom maps for the pathfinding algorithm to operate in. The pathfinding process is visualized and animated using javascript and react.</p>
                </div>
            </div>
            <div class="feature-container">
                <h2>Gomoku</h2>
                <div class="skills-container">
                    Skills: Javascript
                </div>
                <div class="description-container">
                    <p>Created a program runs a game of gomoku for both single-player and two-player modes. The single player version features a computer algorithm that makes intelligient decisions based on the current board and game state.</p>
                </div>
            </div>
            <Footer />
        </div>
        


        // <div className="panel">
        //     <h1>Recent Projects</h1>
        //     <div className="panel__container">
        //         <div className="panel__wrapper">
        //             <ul className="panel__item">
        //                 <Projectpanel 
        //                 src="images/image1.jpg"
        //                 text="WEATHER APPLICATION"
        //                 label="Projects"
        //                 path="https://github.com/VictorWu03/Weather-App" />
        //                 <Projectpanel  
        //                 src="images/image1.jpg"
        //                 text="SUDOKU SOLVER"
        //                 label="Projects"
        //                 path="https://github.com/VictorWu03/Sudoku-Solver" />
        //                 <Projectpanel 
        //                 src="images/image1.jpg"
        //                 text="GOMOKU GAME"
        //                 label="Projects"
        //                 path="https://github.com/VictorWu03/major-project-cs30" />

        //             </ul>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Panel
