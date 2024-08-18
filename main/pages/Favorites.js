import React, {useState, useContext} from 'react'
import Nav from '../components/Nav/Nav'
import { AppContext } from "../app";
import '../styles/Favorites.scss'

function Favorites() {
  const {username, setUsername} = useContext(AppContext);
  return (
    <div className='favoritesContainer'>
    <Nav username={username}
          setUsername={setUsername} />
          <div className='favoriteCardContainer'>
            <div className='facoriteMovieCard'>
              
            </div>
          </div>
    </div>
  )
}

export default Favorites