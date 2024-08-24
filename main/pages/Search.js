import React, { useState, useEffect,useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { AppContext } from '../app';
import Nav from '../components/Nav/Nav';
import Details from '../components/Detalis/Details';
import CardMovieSearch from '../components/CardMovieSearch/CardMovieSearch';
import '../styles/Search.scss'

function Search() {
  const username = localStorage.getItem('user');
  const {handleFavoriteMoviesButton} = useContext(AppContext);

  const { details, setDetails } = useContext(AppContext);
  const [detailsMovie, setDetailsMovie] = useState();



  const location = useLocation();
  const {query} = location.state || '';

  const apiKey = 'd165967b6b2897b819c9bfc9f9a64ba4';
  const baseUrl = 'https://api.themoviedb.org/3';

  const [searchedReasults, setSearchedResults] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const resp = await fetch(`${baseUrl}/search/movie?query=${query}&api_key=${apiKey}`);
        const apidata = await resp.json();
        setSearchedResults(apidata.results);
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchInfo();
  }, [query]);

  const handleDetailsPopUp = (movie) => {
    setDetailsMovie(movie);
    setDetails(prevState => !prevState);
  };

  return (
    <div className='SearchContainer'>
      <Nav username={username}
      />
       {details && <Details details={details}
                              movie={detailsMovie}
                              username={username}
                              handleDetailsPopUp={handleDetailsPopUp}
                              handleFavoriteMoviesButton={handleFavoriteMoviesButton} />}

      <div className="favorite-card">
      {searchedReasults.length > 0 ? (
        searchedReasults.map(movie => (
          // <div key={movie.id}
          //   className="movie-card">
          //   <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          //   <div className='movie-content'>
          //     <h3>{movie.title} - {movie.release_date.slice(0, 4)}</h3>
          //     {
          //       (movie.overview.length > 420) ? <p>{movie.overview.slice(0,420)}...</p> : <p>{movie.overview}</p>
          //       }
          //   </div>
          // </div>
          
          <CardMovieSearch key={movie.id}
                          movie={movie} 
                          username={username}
                          handleDetailsPopUp={handleDetailsPopUp}
                          handleFavoriteMoviesButton={handleFavoriteMoviesButton} />

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

export default Search