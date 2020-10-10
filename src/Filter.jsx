import React, { Component } from 'react'

class Filter extends Component {
  handleSelect = (event) => {
    this.props.changeFilterTerm(event.target.value)
  }

  render() {
    return (
      <>
        <select value={this.props.searchTerm} onChange={this.handleSelect}>
          <option value="all">all cats</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </>
    )
  }
}

export default Filter