import React from 'react'
import CatTile from './CatTile.jsx'

let CatsContainer = (props) => {
  let catsArr = props.cats.map((cat) => {
    
    return <CatTile 
      cat = { cat }
      key = { cat.id }
    />
  })

  return(
    <div className="cat-container">
      { catsArr }
    </div>
  )
}

export default CatsContainer