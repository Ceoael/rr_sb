import React from 'react';

import classes from './sectionFour.module.css';

const sectionFour = () => {

      // Sekcja 4: Sekcja na całą szerokość, z paddingiem top/bottom zależnym od wysokości ekranu, oraz left/right zależnym od szerokości ekranu. Sekcja ma mieć inny kolor tła, niż reszta dokumentu. W sekcji ma znajdować się kontener, o standardowej szerokości dla użytego frameworka CSS, a w środku dwa boxy, z borderem, obrazkiem oraz tekstem. (1) Należy użyć dowolnej animacji jQuery na obrazkach. (1)

    return (
        <section className={classes.sectionFour} id="section4">
            <div className={classes.sectionFour__container}>
                <div className={classes.sectionFour__box}>
                    <img className={classes.sectionFour__img} src="https://images.unsplash.com/photo-1628538746355-4a5b376e56ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80" alt="forest"/>
                    <p className={classes.sectionFour__p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>

                <div className={classes.sectionFour__box}>
                    <img className={classes.sectionFour__img} src="https://images.unsplash.com/photo-1628374234362-6e6bc7aed270?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="room"/>
                    <p className={classes.sectionFour__p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </section>
    )
}

export default sectionFour;
