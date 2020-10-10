import React from 'react'

const Search = (props) => {

  let handleChange = (event) => {
    props.changeSearchTerm(event.target.value)
  }

  return(
    <>
      <form>
        <h3>Search for a cat's name</h3>
        <input type="text" value={props.searchTerm} onChange={handleChange} />
      </form>
      </>
  )
}

export default Search