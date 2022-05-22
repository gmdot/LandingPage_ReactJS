import './Square.css'
import React from 'react';

import LogoReact from '../../img/React-icon.svg.png'
import LogoAngular from '../../img/Angular-Logo.png'
import LogoVue from '../../img/Vue-Logo.png'

function Square() {
    return (
        <div className="squares">
            <div className="squareFrameWork">
                <h2>ReactJS</h2>
                <img className="logoReact" src={LogoReact} alt="" />
                <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
                    É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. 
                    É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.</p>
            </div>
            <div className="squareFrameWork">
                <h2>Angular</h2>
                <img className="logoAngular" src={LogoAngular} alt="" />
                <p>Angular é uma plataforma de aplicações web de código-fonte aberto e 
                    front-end baseado em TypeScript liderado pela Equipe Angular do Google e 
                    por uma comunidade de indivíduos e corporações. Angular é uma reescrita completa do AngularJS, 
                    feito pela mesma equipe que o construiu.</p>
            </div>
            <div className="squareFrameWork">
                <h2>VueJS</h2>
                <img className="logoVue" src={LogoVue} alt="" />
                <p>O Vue.js conta com uma arquitetura que pode ser adotada de forma incremental, 
                    e que foca na renderização declarativa e na composição de componentes. 
                    Funcionalidades avançadas necessárias para aplicações complexas 
                    (como encaminhamento, gestão de estados e automação de compilação) 
                    são oferecidas por meio de bibliotecas e pacotes de suporte mantidos oficialmente, 
                    sendo o Nuxt.js como uma das soluções mais populares.</p>
            </div>
        </div>
    )
}

export default Square;