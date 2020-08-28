import React from 'react';

import Header from './Components/Header/Header';
import Section from './Components/Section/Section';
import Interest from './Components/InterestSection/Interest';

class App extends React.Component {
    render(){
        return (
           <> 
            <Header/>
            <Section/>
            <Interest/>
            </>
        )
    }
}

export default App;