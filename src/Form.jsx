import React, { Component } from 'react'

class Form extends Component {
  state = {
    // add attributes here
  }

  handleChange = () => {
    // write logic for updating the state with the user's input
  }

  handleSubmit = (event) => {
    // write a POST fetch request for creating a new cat
  }

  render() {
    return (
      <div>
        
        <form>
          <h3>Add a new cat</h3>

          <label>Name</label>
          <input type="text" name="name" value={""} autoComplete="off"/>

          <label>Age</label>
          <input type="text" name="age" value={""} autoComplete="off" />

          <label>Sex</label>
          <input type="text" name="sex" value={""} autoComplete="off" />

          <label>Image link</label>
          <input type="text" name="picture" value={""} autoComplete="off" />

          <label>Favorite toy</label>
          <input type="text" name="favorite toy" value={""} autoComplete="off" />
          
        <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}

export default Form