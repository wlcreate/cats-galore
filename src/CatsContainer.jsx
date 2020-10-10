import React from 'react'
import CatTile from './CatTile.jsx'

const CatsContainer = (props) => {
  let catsArr = props.cats.map((cat) => {
    return <CatTile cat = {cat} key = {cat.id} updateCat={props.updateCat}/>
  })

  return(
    <div className="cat-container">
      { catsArr }
    </div>
  )
}

export default CatsContainer