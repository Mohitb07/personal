import React from 'react';

import styles from './Footer.module.css'

class Footer extends React.Component {
    render(){
        return (
            <React.Fragment>
                  <footer>
        <div className={styles.social}>
          <a href="https://www.facebook.com/mohit.bisht.1903" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-facebook" className="pr-2"></ion-icon></a>
          <a target="_blank" href="https://www.github.com/Mohitb07" rel="noopener noreferrer"><ion-icon name="logo-github" className="pr-2"></ion-icon></a>
          <a target="_blank" href="https://www.instagram.com/mohitbisht1903" rel="noopener noreferrer"><ion-icon name="logo-instagram" className="pr-2"></ion-icon></a>
          <a target="_blank" href="https://www.linkedin.com/in/mohit-bisht-b602511b3/" rel="noopener noreferrer"><ion-icon name="logo-linkedin" className="pr-2"></ion-icon></a>
          <a href="https://www.twitter.com/Mohitb07" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-twitter" className="pr-2"></ion-icon></a>
        </div>
        <div className={styles.footerMenu}>
            <div className="text-center">
            <a href="#about">About</a>
            <a href="/">Contact</a>
            <a href="/">Terms & Services</a>
            </div>
        
        </div>
        <div className={styles.copyright}>
          <p className="text-center">&copy; Mohit Bisht</p>
        </div>
    </footer>
            </React.Fragment>
        )
    }
}

export default Footer;