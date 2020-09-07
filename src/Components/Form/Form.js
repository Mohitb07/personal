import React from 'react';

import styles from './Form.module.css';

class Form extends React.Component {
    render(){
        return (
        <React.Fragment>
            <div className={styles.newContainer}>
            <div className="container">
                
                    <h2 className="text-center">Reach Me</h2>
                    <form className={styles.form}>
                        <input type="text" placeholder="@gmail.com"/>
                        <button><ion-icon size="large" name="send-sharp"></ion-icon></button>
                    </form>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default Form;