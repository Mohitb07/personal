// import React from 'react';

// // import background from '../../Images/background.jpg'
// import styles from './Interest.module.css'
// import html from '../../Images/html.png'
// import css from '../../Images/css.png'
// import js from '../../Images/js.webp'
// import python from '../../Images/python1.png'
// import django from '../../Images/django.webp'
// import react from '../../Images/react.webp'
// import nodejs from '../../Images/nodejs.png'
// import bootstrap from '../../Images/bootstrap.png'

// class Header extends React.Component {
//     render(){

//        return ( 
//         <div className={styles.background}>
//         <div className={styles.container} id="interest">
//             <div className="container">
//             <section className={styles.interest} data-aos="fade-up">
//                 <h2>Currently working with these:</h2>
//                 <h3>Languages:</h3>
//                 <img src={html} alt='html'/>
//                 <img src={css} alt='css'/>
//                 <img src={js} alt='js'/>
//                 <img src={python} alt='python'/>
//                 <h3>Technologies:</h3>
//                 <img src={django} alt='django'/>
//                 <img src={react} alt='react'/>
//                 <img src={nodejs} alt='nodejs'/>
//                 <img src={bootstrap} alt='bootstrap'/>
//             </section>
//             </div>
//         </div>
//         </div>
//        )
//     }
// }

// export default Header;

import React from 'react';

// import background from '../../Images/background.jpg'
import styles from './Interest.module.css'
// import html from '../../Images/html.png'
// import css from '../../Images/css.png'
// import js from '../../Images/js.webp'
// import python from '../../Images/python1.png'
// import django from '../../Images/django.webp'
// import react from '../../Images/react.webp'
// import nodejs from '../../Images/nodejs.png'
// import bootstrap from '../../Images/bootstrap.png'
import { DiNodejs,DiMongodb, DiReact, DiCss3, DiPython, DiBootstrap, DiJavascript1, DiHtml5 } from 'react-icons/di';
class Header extends React.Component {
    render(){

       return ( 
        <div className={styles.background}>
        <div className={styles.container} id="interest">
            {/* <div className="container"> */}
            <section className={styles.interest} data-aos="fade-up">
                <h2>Currently <span>working</span><br/> with these</h2>
                <div className={styles.icons}>
                    <DiHtml5 className={styles.icon}/>
                    <DiCss3 className={styles.icon}/>
                    <DiJavascript1 className={styles.icon}/>
                    <DiBootstrap className={styles.icon}/>
                    <br/>
                    <DiReact className={styles.icon}/>
                    <DiNodejs className={styles.icon}/>
                    <DiPython className={styles.icon}/>
                    <DiMongodb className={styles.icon}/>
                    
                    <br/>
    
                </div>
                    
                {/* <img src={css} alt='css'/>
                <img src={js} alt='js'/>
                <img src={python} alt='python'/>
                <h3>Technologies:</h3>
                <img src={django} alt='django'/>
                <img src={react} alt='react'/>
                <img src={nodejs} alt='nodejs'/>
                <img src={bootstrap} alt='bootstrap'/> */}
            </section>
            {/* </div> */}
        </div>
        </div>
       )
    }
}

export default Header;