import React, { Component } from 'react'
import './App.css'
import CatsContainer from './CatsContainer.jsx'
import Form from './Form.jsx'
import Search from './Search.jsx'

class App extends Component {
  state = {
    // add attributes here
    cats: [],
    searchTerm: ""
  }

  componentDidMount() {
    // write a GET fetch request here to get all the cats
    fetch("http://localhost:3000/cats")
    .then(response => response.json())
    .then(catsArray => {
      this.setState({
        cats: catsArray
      })
    })
  }

  changeSearchTerm = (userInput) => {
    // write logic for updating the search term
    this.setState({
      searchTerm: userInput
    })
  }

  pickCats = () => {
    // write logic for filtering the cats array, depending on the search term

    // let searchedCats = this.state.cats.filter(cat => {
    //   return cat.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    // }) 
  }

  addNewCat = (newCat) => {
    // write logic for adding a new cat to the backend
    let copyOfCats = [...this.state.cats, newCat]
    this.setState({
      cats: copyOfCats
    })
  }

  updateCat = (updatedCat) => {
    // write logic for updating an existing cat to the backend
    let arrayOfUpdatedCats = this.state.cats.map(cat => {
      if (cat.name === updatedCat.name){
        return updatedCat
      } else {
        return cat
      }
    })
    this.setState({
      cats: arrayOfUpdatedCats
    })
  }

  render() {

    let searchedCats = this.state.cats.filter(cat => {
      return cat.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })

    return (
      <>
        <h1>Cats galore!</h1>
        <Search searchTerm={this.state.searchTerm} changeSearchTerm={this.changeSearchTerm}/>
        <CatsContainer cats={searchedCats} updateCat={this.updateCat}/>
        <Form addNewCat={this.addNewCat}/>
      </>
    )
  }
}

export default App