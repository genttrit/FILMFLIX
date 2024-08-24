import React, { useState, useContext, useEffect } from 'react'
import Nav from '../components/Nav/Nav'
import FavoriteCard from '../components/FavoritesCard/FavoriteCard';
import { AppContext } from "../app";
import '../styles/Favorites.scss'

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const {allUserData, setAllUserData} = useContext(AppContext);

  const username = localStorage.getItem('user');
  // console.log(username);

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      try {
        const resp = await fetch(`http://localhost:3000/users`);
        const data = await resp.json();
        // console.log(data);

        const userObj = data.find(user => user.username === username);
        if (userObj) {
          setFavorites(userObj.favorites);
        } else {
          console.log('User not found');
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchFavoriteMovies();
  }, [username]);

  const handleRemoveFromFavorites = async (e, movieId) => {
    e.preventDefault();
    const currentUser = allUserData.filter((e)=> e.username === username)[0];

    try {
      const updatedFavorites = favorites.filter((movie)=>{
        return movie.id !== movieId
      });

      const response = await fetch(`http://localhost:3000/users/${currentUser.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...currentUser,
          favorites: updatedFavorites
        })
      });
    }

    catch (err) {
      console.log('there was an error with the update request', err);
    }
  }


  return (
    <div className='FavoritesContainer'>
      <Nav username={username}
      // setUsername={setUsername}
      />
      <div className="favorite-card">
        {favorites.length > 0 ? (
          favorites.map(movie => (
            <div key={movie.id}
              className="movie-card">
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
              <div className='movie-content'>
                <h3>{movie.title} - {movie.release_date.slice(0, 4)}</h3>
                {
                (movie.overview.length > 420) ? <p>{movie.overview.slice(0,420)}...</p> : <p>{movie.overview}</p>
                }
              </div>
              <div className='movie-remove'>
                <button
                  className='remove-movie-btn'
                  onClick={(e) => handleRemoveFromFavorites(e,movie.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className='no-fav-movie'>
            <h3 >No favorite movies found.</h3>
            </div>
        )}
      </div>
    </div>
  )
}

export default Favorites