import React, { Component } from 'react'

class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      sex: '',
      ["favorite toy"]: '',
      picture: ''
    }
  }

  handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let { name, age, sex, ["favorite toy"]: toy, picture } = this.state 

    fetch("http://localhost:3000/cats", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      }, 
      body: JSON.stringify({
        name, age, sex, toy, picture
      })
    })
    .then(r => r.json())
    .then(console.log)
  }

  render() {
    let { name, age, sex, ["favorite toy"]: toy, picture } = this.state 

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={ name } onChange={ this.handleChange } />

          <label>Age</label>
          <input type="text" name="age" value={ age } onChange={ this.handleChange } />

          <label>Sex</label>
          <input type="text" name="sex" value={ sex } onChange={ this.handleChange } />

          <label>Picture</label>
          <input type="text" name="picture" value={ picture } onChange={ this.handleChange } />

          <label>Favorite toy</label>
          <input type="text" name="favorite toy" value={ toy } onChange={ this.handleChange } />
          
        <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}

export default Form