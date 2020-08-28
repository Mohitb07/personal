import React from 'react';

// import background from '../../Images/background.jpg'
import styles from './Interest.module.css'
import html from '../../Images/html.png'
import css from '../../Images/css.png'
import js from '../../Images/js.webp'
import python from '../../Images/python1.png'
import django from '../../Images/django.webp'
import react from '../../Images/react.webp'

class Header extends React.Component {
    render(){

       return ( 
        <div className={styles.container}>
            <section className={styles.interest}>
                <h2>Interest and Skills</h2>
                <h3>Languages:</h3>
                <img src={html}/>
                <img src={css}/>
                <img src={js}/>
                <img src={python}/>
                <h3>Technologies:</h3>
                <img src={django}/>
                <img src={react}/>
            </section>
        </div>
       )
    }
}

export default Header;