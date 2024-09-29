// import React from "react";
// import "./Nav.scss";
// import { Link, useNavigate  } from "react-router-dom";
// import { useState, useRef, useEffect } from "react";
// import { AppContext } from "../../app";




// function Nav({ username, setUsername }) {

//   const navigate = useNavigate();

//   const [searchBar, setSearchBar] = useState(false);
//   const [query, setQuery] = useState('');
//   const inputRef = useRef();
//   //{current: undefined}

//   //Menjehere si klikon, me te dal me shkru
//   const handleSearchBarEffect = (e) => {
//     e.preventDefault();
//     setSearchBar(prevState => !prevState);
//     setTimeout(() => {
//       if (!searchBar) {
//         inputRef.current.focus();
//       }
//     }, 0);
//   }

//   const handleLogOut = (e) => {
//     e.preventDefault();
//     // setUsername('');
//     localStorage.setItem('user','');
//     navigate('/login');
//   }

//   const handleProfile = (e) => {
//     //steate me shtu ne app.js, 
//     //prej Home tek Banner pastaj tek Nav me props
//   }

//   // const handleSearchBar = (e) => {
//   //   if (e.type === 'keydown' && e.key === "Enter") {
//   //         navigate(`/search/${query}`, {state: { query }});
//   //         return true
//   //        }
//   //        else {
//   //         return false
//   //        }
//   // }

//   const handleSearchInput = (e) => {
//     if (e.key === "Enter" && query.trim()) { // Check for Enter key and non-empty query
//       navigate(`/search/${query}`, { state: { query } });
//     }
//   };
  

//   useEffect(() => {
//     window.addEventListener("keydown", handleSearchBar);

//     return () => {
//       window.removeEventListener("keydown", handleSearchBar);
//     };
//   }, [query]);


//   return (
//     <nav className="navContainer">
//       <ul>
//         <li>
//           <Link className="link" to="/home">
//             <p className="logo">FILMFLIX</p>
//           </Link>
//         </li>
//         <li>
//           <Link className="link" to="/favorites">
//             Favorites
//           </Link>
//         </li>
//         <li>
//           <Link className="link" to="/search">
//             {searchBar ? (
//               <input ref={inputRef}
//                 type="text"
//                 onBlur={e => handleSearchBarEffect(e)}
//                 onChange={e => setQuery(e.target.value)}
//                 onKeyDown={(e) => handleSearchInput(e)}
//                 placeholder="Search your movie here.." />
//             ) : (
//               <svg onClick={e => handleSearchBarEffect(e)}
//                 xmlns="http://www.w3.org/2000/svg"
//                 height="25px"
//                 viewBox="0 0 24 24"
//                 width="25px"
//                 fill="white"
//               >
//                 <path d="M0 0h24v24H0z" fill="none" />
//                 <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
//               </svg>
//             )}
//           </Link>
//         </li>
//       </ul>

//       {(username.length > 0) ? (
//         <>
//           <div className="accountContainer">
//             <div onClick={e => handleProfile(e)} className="loggedInfoContainer">
//               <p className='loggedMsg'>HI {username.toLocaleUpperCase()}</p>
//               <img className='avatar' src="../files/avatar-logo.png"></img>
//             </div>
//             <Link onClick={e => handleLogOut(e)} className="link logOut" to="/">
//               Log out
//             </Link>
//           </div>
//         </>
//       ) : (
//         <Link className="link logIn" to="/login">
//           Log in
//         </Link>
//       )}
//     </nav>
//   );
// }

// export default Nav;







import React, { useState, useRef } from "react";
import "./Nav.scss";
import { Link, useNavigate } from "react-router-dom";

function Nav({ username, setUsername }) {
  const navigate = useNavigate();

  const [searchBar, setSearchBar] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef();

  // Toggle search bar visibility and focus on input
  const handleSearchBarEffect = (e) => {
    e.preventDefault(); // Prevent any default action
    setSearchBar(prevState => !prevState); // Toggle the search bar

    // Focus on the input field after it becomes visible
    setTimeout(() => {
      if (!searchBar && inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  // Handle search input and navigate on Enter key
  const handleSearchInput = (e) => {
    if (e.key === "Enter" && query.trim()) { // Check for Enter key and non-empty query
      navigate(`/search/${query}`, { state: { query } }); // Programmatically navigate
    }
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.setItem('user', '');
    navigate('/login');
  };

  const handleProfile = (e) => {
    // Your profile handling logic here
  };

  return (
    <nav className="navContainer">
      <ul>
        <li>
          <Link className="link" to="/home">
            <p className="logo">FILMFLIX</p>
          </Link>
        </li>
        <li>
          <Link className="link" to="/favorites">
            Favorites
          </Link>
        </li>
        <li>
          {/* Search Bar Logic */}
          {searchBar ? (
            <input
              ref={inputRef}
              type="text"
              value={query} // Bind the input value to the state
              onBlur={e => handleSearchBarEffect(e)}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearchInput} // Only trigger on Enter
              placeholder="Search your movie here.."
            />
          ) : (
            <svg
              onClick={e => handleSearchBarEffect(e)}
              xmlns="http://www.w3.org/2000/svg"
              height="25px"
              viewBox="0 0 24 24"
              width="25px"
              fill="white"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          )}
        </li>
      </ul>

      {(username.length > 0) ? (
        <div className="accountContainer">
          <div onClick={e => handleProfile(e)} className="loggedInfoContainer">
            <p className='loggedMsg'>HI {username.toLocaleUpperCase()}</p>
            <img className='avatar' src="../files/avatar-logo.png" alt="Avatar" />
          </div>
          <Link onClick={e => handleLogOut(e)} className="link logOut" to="/">
            Log out
          </Link>
        </div>
      ) : (
        <Link className="link logIn" to="/login">
          Log in
        </Link>
      )}
    </nav>
  );
}

export default Nav;

