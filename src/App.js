import React, { Component } from 'react'
import './App.css'
import CatsContainer from './CatsContainer.jsx'
import Filter from './Filter.jsx'
import Form from './Form.jsx'
import Search from './Search.jsx'

class App extends Component {
  state = {
    cats: [],
    selectedSex: "all",
    searchTerm: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/cats")
    .then(r => r.json())
    .then((catsArray) => {
      this.setState({
        cats: catsArray
      })
    })
  }

  changeSelectedSex = (term) => {
    this.setState({
      selectedSex: term
    })
  }

  changeSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    })
  }

  pickCats = () => {
    let {cats, selectedSex, searchTerm} = this.state
    let newCatsArray = [...cats]

    // if (selectedSex === "all") {
    //   return newCatsArray
    // } else {
    //   return newCatsArray = cats.filter((cat) => cat.sex === selectedSex)
    // }
    
    if (searchTerm === "") {
      return newCatsArray
    } else {
      return newCatsArray = cats.filter((cat) => {
        return cat.name.includes(searchTerm)
      })
    }
  }

  addNewCat = (newCat) => {
    this.setState({
      cats: [...this.state.cats, newCat]
    })
  }

  updateCat = (updatedCat) => {
    let newCatsArray = this.state.cats.map((cat) => {
      if (cat.id === updatedCat.id) {
        return updatedCat
      } else {
        return cat
      }
    })

    this.setState({
      cats: newCatsArray
    })
  }

  render() {
    return (
      <>
        <h1>Cats galore!</h1>
        <Filter selectedSex={this.state.selectedSex} changeSelectedSex={this.changeSelectedSex} />
        <Search changeSearchTerm={this.changeSearchTerm} searchTerm={this.state.searchTerm}/>
        <CatsContainer cats = {this.pickCats()} updateCat={this.updateCat}/>
        <Form addNewCat = {this.addNewCat} cats = {this.pickCats()}/>
      </>
    )
  }
}

export default App