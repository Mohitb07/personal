import React from 'react';
 
import './Cards.css'

import Button from '../Button'

class Cards extends React.Component {

    render(){

       return ( 
            <React.Fragment>
              <div className="card mr-20" style={{width:'18rem'}}>
                    <img src={this.props.src} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.text}</p>
                            <a href={this.props.go} target="_blank" rel="noopener noreferrer"><Button value={'Visit'}/></a>
                            <a href={this.props.source} target="_blank" rel="noopener noreferrer"><Button value={'Source'}/></a>
                    </div>
           </div>    
            </React.Fragment>
       )
    }
}

export default Cards;