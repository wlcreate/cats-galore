import React, { Component } from 'react'

class SelectCat extends Component {
  handleSelect = (event) => {
    this.props.changeSearchTerm(event.target.value)
  }

  render() {
    return (
      <div>
        <select value={this.props.searchTerm} onChange={this.handleSelect}>
          <option value="All">All cats</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
    )
  }
}

export default SelectCat
