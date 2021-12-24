import React from 'react'

function Projectpanel(props) {
    return (
        <>
        <li className="panel__item">
            <a className="panel__item__link" href={props.path}>
                <figure className="panel__item__pic-wrap" data-catagory={props.label}>
                    <img src={props.src} 
                    alt="Travel Image" 
                    className="panel__item__img" />
                </figure>
                <div className="panel__item__info">
                    <h5 className="panel__item_text">{props.text}</h5>
                </div>
            </a>
        </li>
        </>
    )
}

export default Projectpanel
