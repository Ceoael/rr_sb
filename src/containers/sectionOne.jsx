import React, {useState} from 'react';

const sectionOne = (props) => {
    // Sekcja 1: logo, menu. Menu ma mieć właściwość „sticky”. Menu ma przełączać się na „offcanvas” (2) 

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top text-white">
            <div className="container-fluid ">
                <a className="navbar-brand" href="/#">
                    <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
                </a>
                <button 
                className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="/#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#section2">Section 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#section3">Section 3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#section4">Section 4</a>
                    </li>
                </ul>
                </div>
            </div>
            
        </nav>
    )
}

export default sectionOne;
