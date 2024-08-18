import React, {useContext, useEffect, useState} from 'react'
import Nav from '../components/Nav/Nav'
import Banner from '../components/Banner/Banner'
import Details from '../components/Detalis/Details';
import { AppContext } from "../app";
import CategoryCard from '../components/CategoryCard/CategoryCard';
import '../styles/Home.scss'

function Home() {

  const { details, setDetails } = useContext(AppContext);
  const {username, setUsername} = useContext(AppContext);

  const [bannerMovie, setBannerMovie] = useState();
  const [detailsMovie, setDetailsMovie] = useState();


  const apiKey = 'd165967b6b2897b819c9bfc9f9a64ba4';
  const baseUrl = 'https://api.themoviedb.org/3';

  useEffect(() => {
    const fetchInfo = async () => {
        try {
            const resp = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`);
            const apidata = await resp.json();
            const randomNumber = Math.floor(Math.random() * 20)+1;
            console.log(apidata.results[randomNumber]);
            setBannerMovie(apidata.results[randomNumber]);
            setDetailsMovie(apidata.results[randomNumber]);
        }
        catch (err) {
            console.log(err);
        }
    }
    fetchInfo();
}, [])


  const handleDetailsPopUp = (movie) => {
    setDetailsMovie(movie);
    setDetails(prevState => !prevState);
  };

  console.log(details);

  return (
    <div className='HomeContainer'>
        {details && <Details details={details}
                              movie={detailsMovie}
                              handleDetailsPopUp={handleDetailsPopUp} />}
        {bannerMovie && <Banner  details={details}
                username={username}
                setUsername={setUsername}
                bannerMovie={bannerMovie}
                handleDetailsPopUp={handleDetailsPopUp}/>}
        <CategoryCard handleDetailsPopUp={handleDetailsPopUp} title='Popular now' category={'movie/popular'} />
        <CategoryCard handleDetailsPopUp={handleDetailsPopUp} title='All time top rated' category={'movie/top_rated'} />
        <CategoryCard handleDetailsPopUp={handleDetailsPopUp} title='Playing now in the cinema' category={'movie/now_playing'} />
        <CategoryCard handleDetailsPopUp={handleDetailsPopUp} title='Upcomming soon...' category={'movie/upcoming'} />
    </div>
  )
}

export default Home