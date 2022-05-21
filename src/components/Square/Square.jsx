import './Square.css'
import React from 'react';

import LogoReact from '../../img/React-icon.svg.png'

function Square() {
    return (
        <div className="squareReact">
            <h2>ReactJS</h2>
            <img src={LogoReact} alt="" />
            <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
                 É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. 
                 É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.</p>
        </div>
    )
}

export default Square;