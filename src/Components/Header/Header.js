import React from 'react';

import background from '../../Images/background.jpg'
import styles from './Header.module.css'

class Header extends React.Component {
    render(){

       return ( 
        <div className={styles.container}>
            <header className={styles.header}>
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
                <h1>Hi, I m Mohit</h1>
            </header>
        </div>
       )
    }
}

export default Header;