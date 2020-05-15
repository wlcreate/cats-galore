import React from 'react'
import CatTile from './CatTile.jsx'

let CatsContainer = (props) => {
  let arrOfCats = props.cats.map((singleCat) => {
    console.log(singleCat)
    return <CatTile 
      cat = { singleCat }
      key = { singleCat.id }
    />
  })

  return(
    <div className="cat-container">
      { arrOfCats }
    </div>
  )
}

export default CatsContainer