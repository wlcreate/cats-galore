import React, { Component } from 'react'

class Form extends Component {
  state = {
    // add attributes here
    name: "",
    age: "",
    sex: "",
    picture: "",
    "favorite toy": ""
  }

  handleChange = (evt) => {
    // write logic for updating the state with the user's input
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (event) => {
    // write a POST fetch request for creating a new cat
    event.preventDefault()
    fetch("http://localhost:3000/cats", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        age: this.state.age,
        sex: this.state.sex,
        picture: this.state.picture,
        likes: 0,
        "favorite toy": this.state["favorite toy"]
      })
    })
    .then(response => response.json())
    .then(newCat => {
        this.props.addNewCat(newCat)
    })
  }

  render() {
    return (
      <div>
        
        <form onSubmit={this.handleSubmit}>
          <h3>Add a new cat</h3>

          <label>Name</label>
          <input type="text" name="name" value={this.state.name} autoComplete="off" onChange={this.handleChange}/>

          <label>Age</label>
          <input type="text" name="age" value={this.state.age} autoComplete="off" onChange={this.handleChange}/>

          <label>Sex</label>
          <input type="text" name="sex" value={this.state.sex} autoComplete="off" onChange={this.handleChange}/>

          <label>Image link</label>
          <input type="text" name="picture" value={this.state.picture} autoComplete="off" onChange={this.handleChange}/>

          <label>Favorite toy</label>
          <input type="text" name="favorite toy" value={this.state["favorite toy"]} autoComplete="off" onChange={this.handleChange}/>
          
        <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}

export default Form