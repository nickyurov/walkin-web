import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Homepage from './Homepage/Homepage';
import UnitPage from './UnitPage/UnitPage';

        // <Homepage/>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <UnitPage />
        <Footer/>
      </div>
    );
  }
}

export default App;
