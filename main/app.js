import React, { Component, useState, useEffect, createContext } from "react";
import { createRoot } from "react-dom/client";
import './styles/app.scss'
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Search from "./pages/Search";
import Details from "./components/Detalis/Details";
import { HashRouter, Routes, Route } from "react-router-dom";

export const AppContext = createContext();

function App() {
    const [details, setDetails] = useState(false);
    const [username, setUsername] = useState('');
    const [allUserData, setAllUserData] = useState([]);

    useEffect(()=>{
        const fetchAllUserData = async () => {
            try{
                const resp = await fetch('http://localhost:3000/users');
                const data = await resp.json();
                console.log(data);
                setAllUserData(data);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchAllUserData();
    },[]);



    const handleFavoriteMoviesButton = async (e,user, newFavorite) => {
        
        e.preventDefault();
        const currentUser = allUserData.filter((e)=> e.username === user)[0];

        if (!currentUser) {
            console.error('Please log in');
            // Redirect to login page
            return;
        }
        console.log(currentUser, currentUser.favorites)

        try {
            console.log('PUT :', user)
            const updatedFavorites = [...currentUser.favorites, newFavorite];
            const response = await fetch(`http://localhost:3000/users/${currentUser.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...currentUser,
                                    favorites: updatedFavorites })
            });
        }

        catch (err) {
            console.log('there was an error with the update request', err);
        }
    }



    return (<AppContext.Provider value={{
        details, setDetails,
        username, setUsername,
        allUserData, setAllUserData,
        handleFavoriteMoviesButton
    }}>
        <HashRouter>
            <Routes>
                <Route path='/' element={<LogIn />} />
                <Route path='/home' element={<Home />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/search' element={<Search />} />

                <Route path='/search/:id' element={<Search />} />

            </Routes>
        </HashRouter>
    </AppContext.Provider>)
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
