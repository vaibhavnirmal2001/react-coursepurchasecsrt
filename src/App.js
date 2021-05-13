import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render(){
    var courses=[
      {name:'Complete iOS10 dev course', price: 199},
      {name:'Complete Javascript course', price: 299},
      {name:'Complete Front-end dev course', price: 180},
      {name:'Complete React dev course', price: 190}
    ];
    return(
     
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome To Course Purchase Page
          </p>

        </header>

      <Coursesales items={courses}/>

      </div>
  
    );
  }
}

export default App;
