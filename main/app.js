import React, { Component, useState, useEffect, createContext} from "react";
import { createRoot } from "react-dom/client";
import './styles/app.scss'
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Search from "./pages/Search";
import Details from "./components/Detalis/Details";
import { HashRouter, Routes, Route} from "react-router-dom";

export const AppContext = createContext();

function App(){



    const apiKey = 'd165967b6b2897b819c9bfc9f9a64ba4';
    const baseUrl = 'https://api.themoviedb.org/3';

    useEffect(()=>{
        const fetchInfo = async () =>{
            try{
                const resp = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`);
                const data = await resp.json();
                console.log(data);
                
            }
            catch(err){
                console.log(err);
            }
        }
        fetchInfo();
    },[])

    const [details,setDetails] =useState(false);
    const [username, setUsername] = useState('');

    return (<AppContext.Provider value={{
        details,setDetails,
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
root.render(<App/>);
