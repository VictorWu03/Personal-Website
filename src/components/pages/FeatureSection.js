import React from 'react';
import Grid from 'react';
import Item from 'react';
import '../../App.css';
import './FeatureSection.css';
import Footer from '../Footer';

export default function FeatureSection() {
    return (
        <div class="container">
            <div class="feature-title">
                <h1>Summer 22 Collection</h1>
            </div>
            <div class="feature-container">
                <h2>Software Engineer</h2>
                <h4>Versa Networks</h4>
                <h4>San Jose, California, United States</h4>
                <div class="skills-container">
                    Skills: Javascript, HTML, CSS, Bootstrap 5, PHP, WordPress
                </div>
                <div class="description-container">
                    <p>Completed a 16 week intership with Versa Networks as a front-end software engineer. During this time, I created a variety of front-end elements for the Versa site used across 300 pages. Additionally, I worked on the optimization of scripts used on the Versa site improving SEO optimization by 30%. I am now working part-time at Versa Networks as a software engineer after the completion of the internship and I am continuing to contibute to the front-end library of Versa products.</p>
                </div>
            </div>
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
            <Footer />
        </div>
        

        
    )
}

