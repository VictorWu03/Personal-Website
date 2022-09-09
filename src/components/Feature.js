import React from 'react'
import Carditem from './Carditem'
import './Cards.css';
import './Feature.css';
import { Link } from 'react-router-dom';



function Feature() {
    return (
        <div class="feature">

            <a href="/FeatureSection/" class="feature-link">
                <div class="feature-panel">
                    <h1 class="feature-text">Summer 22 Collection</h1>
                </div>
            </a>        
        </div>
    )
}

export default Feature