import React, { Component } from 'react'

class CatTile extends Component {
  state = {
    showTile: false
  }

  render() {
    let { name, age, sex, picture } = this.props.cat 

    return (
      <div className="cat-tile">
        <img src={ picture }/>
        <h3>{ name }</h3>
        <p>Age: { age }</p>
        <p>Sex: { sex }</p>
      </div>
    )
  }
}

export default CatTile