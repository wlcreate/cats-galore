import React, { Component } from 'react';
import './App.css';
import CatsContainer from './CatsContainer.jsx'
import listOfCats from './listOfCats'

class App extends Component {
  state = {
    allCats: listOfCats
  }

  render() {
    return (
      <>
      <h1>Cats!</h1>
      <CatsContainer cats={this.state.allCats}/>
      </>
    )
  }
}

export default App