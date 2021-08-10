import React from 'react';

import classes from './sectionTwo.module.css';

const sectionTwo = (props) => {
    // Sekcja 2: zdjęcie z tekstem overlay, na 100% szerokości i pełną wysokość ekranu – responsywne. Tekst na najechanie myszą ma znikać z ekranu – w dowolny sposób. (2)

    return (
        <section id="section2" >

        <header className={classes.masthead}>
        <div className="container h-100 overflow-hidden">
            <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
                <h1 className={["fw-light", classes.textWhite, classes.hideText].join(' ')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aut laudantium ex libero.</h1>
            </div>
            </div>
        </div>
        </header>
        </section>
    );
}

export default sectionTwo;
