import React, { Component } from 'react'
import './App.css'
import CatsContainer from './CatsContainer.jsx'
import Form from './Form.jsx'
import Search from './Search.jsx'

class App extends Component {
  state = {
    // add attributes here
  }

  componentDidMount() {
    // write a GET fetch request here to get all the cats
  }

  changeSearchTerm = () => {
    // write logic for updating the search term
  }

  pickCats = () => {
    // write logic for filtering the cats array, depending on the search term 
  }

  addNewCat = () => {
    // write logic for adding a new cat to the backend
  }

  updateCat = () => {
    // write logic for updating an existing cat to the backend
  }

  render() {
    return (
      <>
        <h1>Cats galore!</h1>
        <Search/>
        <CatsContainer/>
        <Form/>
      </>
    )
  }
}

export default App