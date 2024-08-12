import React from 'react'

function FavDetailButton({fontSize,btnSize}) {
    const style = {fontSize:{fontSize}}
  return (
        <div className="btnContainer" style={style}>
          <button className="btnFavorite">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={`${fontSize}`}
              viewBox="0 0 24 24"
              width={`${fontSize}`}
              fill="#00000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Favorite
          </button>

          <button className="btnDetails">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height={`${fontSize}`}
              viewBox="0 0 24 24"
              width={`${fontSize}`}
              fill="#FFFFFF"
            >
              <g>
                <path d="M0,0h24v24H0V0z" fill="none" />
                <path d="M11,7h2v2h-2V7z M11,11h2v6h-2V11z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20 c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z" />
              </g>
            </svg>
            Details
          </button>
        </div>
  )
}

export default FavDetailButton