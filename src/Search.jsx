import React from 'react'

const Search = (props) => {

  let handleChange = (evt) => {
    // write logic for updating the search term in the App component's state
    props.changeSearchTerm(evt.target.value)
  }

  return(
    <>
      <form>
        <h3>Search for a cat's name</h3>
        <input type="text" value={props.searchTerm} onChange={handleChange}/>
      </form>
    </>
  )
}

export default Search