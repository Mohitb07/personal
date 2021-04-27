import React from 'react';

import styles from './Section.module.css'
import profile from '../../Images/man.png'

class Header extends React.Component {
    render(){

       return ( 
        //    <div className={styles.section}>
        //         <div  className="container" id="about">
        //             <div data-aos="fade-up" className={styles.box}>
        //         <section className={styles.about}>
        //             <h2 data-aos="fade-up">About Me</h2>
        //             <p data-aos="fade-up" className="container text-center">
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus labore tempora culpa molestiae illum eveniet consequatur aspernatur mollitia odio excepturi, eum error animi et sit consectetur aliquam doloremque, delectus aperiam 
        //             </p>
        //             <div data-aos="fade-up">
        //                 <img src={profile} alt='profile'/>
        //             </div>
        //         </section>
        //         </div>
        //         </div>
        //     </div>
        <div className={styles.section}>
            <div data-aos="fade-up" className="container">
                <section className={styles.about}>
                    <h2>About Me</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                    <p>industry. Lorem Ipsum standard dummy text.</p>
                </section>
                <section data-aos="fade-up" className={styles.hero}>
                    <img src={profile} alt='profile'/>
                    <div className={styles.innerDIV}>
                        <h2>Hi There</h2>
                        <p>In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis</p>
                            <h5>Name:</h5>
                            <p className={styles.name}>Mohit Singh Bisht</p>
                            <h5>Phone:</h5>
                            <p className={styles.phone}>+91 8929689980</p>
                            <h5>Email:</h5>
                            <p className={styles.phone}>bmohit980@gmail.com</p>
                            <h5>LinkedIn:</h5>
                            <p className={styles.phone}>Mohit bisht</p>
                    </div>

                </section>
            </div>
        </div>
        )
    }
}

export default Header;