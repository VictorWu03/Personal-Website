import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const ButtonResume = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => { 
    const checkButtonStyle = STYLES.includes(buttonStyle) 
        ? buttonStyle 
        : STYLES[0]; 

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0];

    return (
        <a className='btn-mobile'
        href={"https://docs.google.com/document/d/1emkgOnnBvm7PyToIsE3QAEQVHgm730VjcmYd1jeNvuw/edit?usp=sharing"} >
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </a>
    );
}; 