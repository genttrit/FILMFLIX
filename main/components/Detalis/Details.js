import React, { useContext, useState } from "react";
import "./Details.scss";


function Details({details, movie, handleDetailsPopUp}) {
  
  return (
    details && (
      <div
        className="containerDetalis"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
        }}
      >
        <button className="closeBtn" onClick={(e) => handleDetailsPopUp(e)}>
          X
        </button>
        <div className="contentContainer">
          <h2>{movie.original_title} - {movie.release_date.substring(0,4)}</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="btnContainer">
            <button className="btnFavorite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                viewBox="0 0 24 24"
                width="16px"
                fill="#00000"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              Add to Favorites
            </button>

          </div>
        </div>
      </div>
    )
  );
}

export default Details;
