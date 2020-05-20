import React, { Component } from 'react';
import './App.css';
import CatsContainer from './CatsContainer.jsx'
import SelectCat from './SelectCat.jsx'
import Form from './Form.jsx'
import FilterCats from './FilterCats.jsx'

class App extends Component {
  state = {
    cats: [],
    searchTerm: "All"
  }

  componentDidMount() {
    fetch("http://localhost:3000/cats")
    .then(r => r.json())
    .then((newArr) => {
      this.setState({
        cats: newArr
      })
    })
  }

  changeSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    })
  }

  pickCats = () => {
    let { cats, searchTerm } = this.state 
    let newArr = cats 

    if (searchTerm === "All") {
      newArr = cats
    } else {
      newArr = cats.filter((cat) => cat.sex === searchTerm)
    }
    return newArr
  }

  addNewCat = (cat) => {
    this.setState({
      cats: [...this.state.cats, cat]
    })
  }

  render() {
    

    return (
      <>
        <h1>Cats galore!</h1>
        <SelectCat searchTerm = {this.state.searchTerm} changeSearchTerm = { this.changeSearchTerm } />
        <FilterCats cats = {this.state.cats}/>
        <CatsContainer cats = { this.pickCats() }/>
        <Form addNewCat = { this.addNewCat } cats = { this.pickCats() }/>
      </>
    )
  }
}

export default App