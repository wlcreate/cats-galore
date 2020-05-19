import React, { Component } from 'react'

class FilterCats extends Component {
  handleChange = (event) => {
    this.setState({
      
    })
  }
  render() {

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h3>Search for a cat</h3>
          <input type="text" value={ this.props.filterTerm } onChange={ this.handleChange } />
        <input type="submit" value="Submit" />
      </form>
      </>
    )
  }
}

export default FilterCats