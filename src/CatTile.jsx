import React, { Component } from 'react'

class CatTile extends Component {
  state = {
    showTile: false
  }

  toggleTile = (event) => {
    console.log(event.target)
    this.setState({
      showTile: !this.state.showTile
    })
  }

  render() {
    let { name, age, sex, picture } = this.props.cat
    let catInfo = () => {
      return(
        <div className="cat-tile">
          <img alt={ `${name} cat` } src={ picture }/>
          <h3>{ name }</h3>
          <p>Age: { age }</p>
          <p>Sex: { sex }</p>
        </div>
      )
    }
    
    return (
      <>
        <button onClick={ this.toggleTile }>{ `Toggle ${name}` }</button>
        { this.state.showTile
          ?
          <div className="cat-tile">
          <img alt={ `${name} cat` } src={ picture }/>
          <h3>{ name }</h3>
          <p>Age: { age }</p>
          <p>Sex: { sex }</p>
          </div>

          : null }
      </>
    )
  }
}

export default CatTile