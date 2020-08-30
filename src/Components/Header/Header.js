import React from 'react';

import styles from './Header.module.css'

class Header extends React.Component {
    render(){

       return ( 
        <div className={styles.container}>
            
            <header className={styles.header}>

            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
                <a className="navbar-brand" href="/">Mohit Bisht</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#interest">Interest</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    </ul>
                </div>
                </nav>
            
                <h1 data-aos="fade-down">HI, I'M MOHIT</h1>
                <p data-aos="fade-up">Full Stack Web Developer</p>
            </header>
        </div>
       )
    }
}

export default Header;