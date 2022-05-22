import React from 'react';
import './VisitRepo.css'

import GitHubLogo from '../../img/GitHub.png'

function VisitRepo(){
    return (
        <a href="https://github.com/gmdot/LandingPage_ReactJS">
            <div className="container">
                <img src={GitHubLogo} alt="" />
                <h2>Visite o repositório desta aplicação</h2>
            </div>
        </a>
    )
}

export default VisitRepo;