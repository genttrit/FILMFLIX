import React from 'react'

function CardMovieSlide({movie}) {
    return (
        <><div key={movie.id} className='cardContainer'>
            <img className='cardImg' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
            <h6>{movie.original_title}</h6>
        </div></>
    )
}

export default CardMovieSlide