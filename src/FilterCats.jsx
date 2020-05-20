import React, { Component } from 'react'
import CatTile from './CatTile.jsx'

class FilterCats extends Component {
  state = {
    cats: this.props.cats,
    filterTerm: ""
  }

  handleFilterTerm = (event) => {
    this.setState({
      filterTerm: event.target.value
    })
  }

  catArr = () => {
    return this.state.cats.filter((cat) => {
      return cat.name === this.state.filterTerm
    })
  }

  render() {

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h3>Search for a cat</h3>
          <input type="text" value={ this.state.filterTerm } onChange={ this.handleFilterTerm } />
      </form>

      { this.state.cats.map((cat) => {
        return <CatTile key={cat.id} cat={cat} />
      }) }
      </>
    )
  }
}

export default FilterCats