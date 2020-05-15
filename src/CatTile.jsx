import React, { Component } from 'react'

class CatTile extends Component {
  state = {
    showTile: false,
    likes: 0
  }

  toggleTile = () => {
    this.setState({
      showTile: !this.state.showTile
    })
  }

  handleLikes = (event) => {
    console.log(event.target.innerText)
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    let { name, age, sex, picture, likes } = this.props.cat
    let catInfo = () => {
      return(
        <div className="cat-tile">
          <img alt={ `${name} cat` } src={ picture }/>
          <h3>{ name }</h3>
          <p>Age: { age }</p>
          <p>Sex: { sex }</p>
          <p>Likes: { likes }</p>
        </div>
      )
    }
    
    return (
      <>
        <button onClick={ this.toggleTile }>Show {name}</button>

        { this.state.showTile
          ?
          <div className="cat-tile">
          <img alt={ `${name} cat` } src={ picture }/>
          <h3>{ name }</h3>
          <p>Age: { age }</p>
          <p>Sex: { sex }</p>
          <p>Likes: { likes }</p>
          <button onClick={ this.handleLikes }>Likes: { likes }</button>
          </div>

          : null }
      </>
    )
  }
}

export default CatTile