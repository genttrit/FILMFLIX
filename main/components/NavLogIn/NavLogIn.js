import React from "react";
import "./NavLogIn.scss";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

function NavLogIn() {
  const [logged, setLogged] = useState(false);
  const [searchBar, setSearchBar] = useState(false);


  const handleLogIn = (e) => {
    e.preventDefault();
    setLogged(prevState => !prevState);
  };

  return (
    <nav className="navContainer">
      <ul>
        <li>
          <Link className="link" to="/">
            <p className="logo">FILMFLIX</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavLogIn;
