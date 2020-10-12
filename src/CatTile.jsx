import React, { Component } from 'react'

class CatTile extends Component {
  state = {
    // add attributes here
    display: false // if false mean do not show more information
  }

  toggleTile = () => {
    // update the state for toggling the cat's information
    this.setState({
      display: !this.state.display
    })
  }

  handleLikes = () => {
    // write a PATCH fetch request for increasing a cat's likes
    fetch(`http://localhost:3000/cats/${this.props.cat.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        likes: this.props.cat.likes + 1
      }),
    })
    .then(response => response.json())
    .then(updatedCatObj => {
      this.props.updateCat(updatedCatObj)
    })
  }

  render() {
    let {name, picture, likes, age, sex} = this.props.cat
      return(
        <div className="cat-tile">
          <img alt={name} src={picture}/>
          <h3>{name}</h3>
          <p>{likes} likes</p>
          <button onClick={this.handleLikes}>Like</button>
          <button onClick={this.toggleTile}>Learn more</button>
          {
            this.state.display
            ?
            <div>
              <p>{name}'s favorite toy is a {this.props.cat["favorite toy"]} and they are a {age}-year old {sex} cat.</p>
            </div>
            :
            null
          }
        </div>    
    )
  }
}

export default CatTile