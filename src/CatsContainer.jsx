import React from 'react'
import CatTile from './CatTile.jsx'

const CatsContainer = (props) => {
  // console.log("These are the cats:", props.cats)
  // write logic here for iterating through the cats array and returning a CatTile for each cat instance
  let arrayOfCatTiles = props.cats.map(catObj => {
    return <CatTile 
      key={catObj.name}
      cat={catObj}
      updateCat={props.updateCat}
    />
  })

  return(
    <div className="cat-container">   
      {/* put something in here */}
      {arrayOfCatTiles}
    </div>
  )
}

export default CatsContainer