import React, { Component } from 'react'

class CatTile extends Component {
  state = {
    showDetails: false,
    likes: 0
  }

  toggleTile = (event) => {
    this.setState({
        showDetails: !this.state.showDetails
    })
  }

  handleLikes = (event) => {
    event.preventDefault()

    let newLikes = this.props.cat.likes + 1

    fetch(`http://localhost:3000/cats/${this.props.cat.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        likes: newLikes
      })
    })
    .then(r => r.json())
    .then(console.log)
  }

  render() {
    let { name, age, sex, picture, likes, ["favorite toy"]: toy } = this.props.cat

      return(
        <div className="cat-tile">
          <img alt={ `${name} cat` } src={ picture } onClick = { this.toggleTile } />
          <h3>{ name }</h3>
          <button onClick={ this.handleLikes }>Likes: { likes } </button>

          { this.state.showDetails ?
          <>
            <p>Age: { age }</p>
            <p>Sex: { sex }</p>
            <p>Favorite toy: { toy }</p>
          </>
          : null }
        </div>    
    )
  }
}

export default CatTile