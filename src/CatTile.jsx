import React, { Component } from 'react'

class CatTile extends Component {
  state = {
    showDetails: false,
  }

  toggleTile = (event) => {
    this.setState({
        showDetails: !this.state.showDetails
    })
  }

  handleLikes = (event) => {
    fetch(`http://localhost:3000/cats/${this.props.cat.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        likes: this.props.cat.likes + 1
      })
    })
    .then(r => r.json())
    .then((updatedCat) => {
      this.props.updateCat(updatedCat)
    })
  }

  render() {
    let {name, age, sex, picture, ["favorite toy"]: toy, likes} = this.props.cat

      return(
        <div className="cat-tile">
          
          <img alt={`${name} cat`} src={picture}/>
          <h3>{name}</h3>
          <p>{likes} likes</p>
          <button onClick={this.handleLikes}>Like</button>
          <button onClick = {this.toggleTile}>Learn more</button>
          
          { this.state.showDetails
            ?
            <p>{name}'s favorite toy is a {toy} and they are a {age}-year old {sex} cat.</p>
            :
            null
          }
        </div>    
    )
  }
}

export default CatTile