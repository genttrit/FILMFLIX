import React, { useEffect, useState } from 'react'
import './FavoriteCard.scss'

function FavoriteCard() {

//   const [favorites, setFavorites] = useState([]);
// // const [loading, setLoading] = userState(true);

// const username = localStorage.getItem('user');
// console.log(username);

// useEffect(()=>{
//   const fetchFavoriteMovies = async () => {
//     try{
//         const resp = await fetch(`http://localhost:3000/users`);
//         const data = await resp.json();
//         console.log(data);
        
//         const userObj = data.find(user => user.username === username);
//         if (userObj) {
//           setFavorites(userObj.favorites);
//         } else {
//           console.log('User not found');
//         }
//       } catch (err) {
//         console.log(err);
//       }
// }
// fetchFavoriteMovies();
// },[username])


  return (
    <div className='FavoriteCardComponent'>
      {/* <div className="favorite-card">
      {favorites.length > 0 ? (
        favorites.map(movie => (
          <div key={movie.id} 
              className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))
      ) : (
        <div>No favorite movies found.</div>
      )}
    </div> */}
    </div>
  )
}

export default FavoriteCard