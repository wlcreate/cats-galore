import React, { Component } from 'react';
import './App.css';
import CatsContainer from './CatsContainer.jsx'
import listOfCats from './listOfCats'

class App extends Component {
  state = {
    allCats: listOfCats,
    searchParams: "all"
  }

  handleSelect = (event) => {
    console.log(event.target)

    this.setState({
      searchParams: event.target.value
    }) 
  }

  pickCats = () => {
    let { allCats, searchParams } = this.state
    let newCats = allCats

    if (searchParams === "male") {
      let copyCats = [...allCats]
      newCats = copyCats.filter(cat => cat.sex === "Male")
    } else if (searchParams === "female") {
      let copyCats = [...allCats]
      newCats = copyCats.filter(cat => cat.sex === "Female")
    } else {
      return newCats
    }
    return newCats
  }

  render() {
    return (
      <>
      <select value={this.state.searchParams} onChange={this.handleSelect}>
      <option value="all">All cats</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <h1>Cats!</h1>
      <CatsContainer cats={this.pickCats()}/>
      </>
    )
  }
}

export default App