import React from 'react';


class Cards extends React.Component {
    render(){

       return ( 
            <React.Fragment>
              <div class="card mr-20" style={{width:'18rem'}}>
                    <img src={this.props.src} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.title}</h5>
                            <p class="card-text">{this.props.text}</p>
                        <a href="#" class="btn btn-primary">View</a>
                    </div>
           </div>    
            </React.Fragment>
       )
    }
}

export default Cards;