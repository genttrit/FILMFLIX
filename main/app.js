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
    // const [bannerMovie, setBannerMovie] = useState('');

    // const apiKey = 'd165967b6b2897b819c9bfc9f9a64ba4';
    // const baseUrl = 'https://api.themoviedb.org/3';
    // const category = 'movie/popular';

    // useEffect(() => {
    //     const fetchInfo = async () => {
    //         try {
    //             const respMostPopular = await fetch(`${baseUrl}/${category}?api_key=${apiKey}`);
    //             const dataMostPopular = await resp.json();
    //             setBannerMovie(dataMostPopular.results[0]);
    //             // console.log(dataMostPopular.results[0]);
    //         }
    //         catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     fetchInfo();
    // }, [])

   

    return (<AppContext.Provider value={{
        details, setDetails,
        username, setUsername
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
