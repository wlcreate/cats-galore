import React, { Component } from 'react'

class CatTile extends Component {
  state = {
    // add attributes here
  }

  toggleTile = () => {
    // update the state for toggling the cat's information
  }

  handleLikes = () => {
    // write a PATCH fetch request for increasing a cat's likes
  }

  render() {
      return(
        <div className="cat-tile">
          <img alt={""} src={""}/>
          <h3>{""}</h3>
          <p>{""} likes</p>
          <button>Like</button>
          <button>Learn more</button>
        </div>    
    )
  }
}

export default CatTile