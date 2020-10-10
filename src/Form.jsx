import React, { Component } from 'react'

class Form extends Component {
  state = {
      name: "",
      age: "",
      sex: "",
      ["favorite toy"]: "",
      picture: ""
    }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch("http://localhost:3000/cats", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      }, 
      body: JSON.stringify({
        name: this.state.name,
        age: this.state.age,
        sex: this.state.sex,
        ["favorite toy"]: this.state["favorite toy"],
        picture: this.state.picture,
        likes: 0
      })
    })
    .then(r => r.json())
    .then((newCat) => {
      this.props.addNewCat(newCat)
    })
  }

  render() {
    let {name, age, sex, ["favorite toy"]: toy, picture} = this.state 

    return (
      <div>
        
        <form onSubmit={this.handleSubmit}>
          <h3>Add a new cat</h3>

          <label>Name</label>
          <input type="text" name="name" value={name} onChange={this.handleChange} autoComplete="off"/>

          <label>Age</label>
          <input type="text" name="age" value={age} onChange={this.handleChange} autoComplete="off" />

          <label>Sex</label>
          <input type="text" name="sex" value={sex} onChange={this.handleChange} autoComplete="off" />

          <label>Image link</label>
          <input type="text" name="picture" value={picture} onChange={this.handleChange} autoComplete="off" />

          <label>Favorite toy</label>
          <input type="text" name="favorite toy" value={toy} onChange={this.handleChange} autoComplete="off" />
          
        <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}

export default Form