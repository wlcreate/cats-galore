import React, { Component } from 'react'

class CatTile extends Component {
  state = {
    showTile: false,
    likes: 0
  }

  toggleTile = (event) => {
    this.setState((prevState) => {
      return {
        showTile: !prevState.showTile
      }
    })
  }

  handleLikes = (event) => {
    event.preventDefault() 
    let newLikes = this.props.cat.likes + 1
    console.log(newLikes)
    this.setState({
        likes: newLikes
    })
  }

  render() {
    let { name, age, sex, picture, likes } = this.props.cat

      return(
        <div className="cat-tile">
          <img alt={ `${name} cat` } src={ picture }/>
          <h3>{ name }</h3>
          <button onClick={ this.toggleTile }>About {name}</button>

          { this.state.showTile ?
          <>
            <p>Age: { age }</p>
            <p>Sex: { sex }</p>
            <p>Likes: { likes }</p>
            <button onClick={ this.handleLikes }>Like</button>
          </>
          : null }
        </div>    
    )
  }
}

export default CatTile