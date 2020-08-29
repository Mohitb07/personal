import React from 'react';

// import background from '../../Images/background.jpg'
import styles from './Section.module.css'
import profile from '../../Images/profile3.jpg'

class Header extends React.Component {
    render(){

       return ( 
        <div className="container">
            <div className="container">
            <section className={styles.about} data-aos="fade-up">
                <h2>ABOUT ME</h2>
                <div>
                    <img src={profile}/>
                </div>
                <p className="container text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus labore tempora culpa molestiae illum eveniet consequatur aspernatur mollitia odio excepturi, eum error animi et sit consectetur aliquam doloremque, delectus aperiam 
                </p>
            </section>
            </div>
        </div>
       )
    }
}

export default Header;