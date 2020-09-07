import React from 'react';

import Header from './Components/Header/Header';
import Section from './Components/Section/Section';
import Interest from './Components/InterestSection/Interest';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';

class App extends React.Component {
    render(){
        return (
           <> 
            <Header/>
            <Section/>
            <Interest/>
            <Form/>
            <Projects/>
            <Footer/>
            </>
        )
    }
}

export default App;