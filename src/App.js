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