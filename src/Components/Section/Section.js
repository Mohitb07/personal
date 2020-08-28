import React from 'react';

// import background from '../../Images/background.jpg'
import styles from './Section.module.css'
import profile from '../../Images/profile3.jpg'

class Header extends React.Component {
    render(){

       return ( 
        <div className={styles.container}>
            <section className={styles.about}>
                <h2>About Me</h2>
                <div>
                    <img src={profile}/>
                </div>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus labore tempora culpa molestiae illum eveniet consequatur aspernatur mollitia odio excepturi, eum error animi et sit consectetur aliquam doloremque, delectus aperiam placeat fugiat incidunt. Rerum quam unde eveniet culpa iure repellendus tenetur! Consectetur, doloremque iusto voluptate eius adipisci modi autem.
                </p>
            </section>
        </div>
       )
    }
}

export default Header;