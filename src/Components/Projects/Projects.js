import React from 'react';

import styles from './Projects.module.css'
import Cards from '../Cards/Cards'
import Board from '../../Images/board.png'
import Weather from '../../Images/live_weather.png'
import Corona from '../../Images/corona-tracker.png'
import Google from '../../Images/google.png'
import bits from '../../Images/dirtybits.png'
import api from '../../Images/api.png'


class Projects extends React.Component {
    render(){

       return ( 
           <div id="projects" className={styles.myContainer}>          
           <div className="container" data-aos="fade-up" >
               <div className={styles.newContainer}>
               <div className={styles.heading}>
                <h2 style={{fontSize:'40px', paddingTop:'40px'}} className="text-center">Some Projects</h2>
               </div>
                   
               <div className={styles.cards}>  
                    <Cards src={bits} title={'DirtyBits'} text={'Online Coding Platform'} go={'https://dirtybits.herokuapp.com/'} source={'https://github.com/Mohitb07/Dirtybits'}/>
                    <Cards src={Board} title={'Discussion Thread'} text={'General Discussion website'} go={'http://mohitboard.herokuapp.com/'}  source={'https://github.com/Mohitb07/mohitboard'}/>
                    <Cards src={api} title={'Task Manager API'} text={'Authenticate User and CRUD their Posts'} go={'https://bisht-task-manager-api.herokuapp.com/'} source={'https://github.com/Mohitb07/Task-Manager-REST-API'}/>
                    <Cards src={Weather} title={'Live Weather'} text={'Live weather details'} go={'https://mohitb07.github.io/live_weather/'} source={'https://github.com/Mohitb07/live_weather'}/>
                    <Cards src={Corona} title={'Corona-Tracker'} text={'Daily Corona Tracker'} go={'https://mohitb07.github.io/corona-tracker/'} source={'https://github.com/Mohitb07/corona-tracker'}/>
                    <Cards src={Google} title={'Google-Clone'} text={'Fully functional google clone'} go={'https://mohitb07.github.io/google/'} source={'https://github.com/Mohitb07/google'}/>

                    {/* <Cards src={ConvertorV2} title={'Exchange Ratev2.0'} text={'Latest Exchange Rate'} go={'https://mohitb07.github.io/exchange_rate-V2.0/'} source={'https://github.com/Mohitb07/exchange_rate-V2.0'}/>
                    <Cards src={ConvertorV1} title={'Exchange Ratev1.0'} text={'Latest Exchange Rate'} go={'https://mohitb07.github.io/exchange_rateV1.0/'} source={'https://github.com/Mohitb07/exchange_rateV1.0'}/> */}
               </div>
               </div>
              
           </div>
           </div>
       )
    }
}

export default Projects;