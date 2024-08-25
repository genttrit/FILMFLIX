import React, {useState, useEffect} from 'react'
import './CategoryCard.scss'
import CardMovieSlide from '../CardMovieSlide/CardMovieSlide'

import Slider from 'react-slick';





function CategoryCard({category, title,details, username, handleDetailsPopUp, handleFavoriteMoviesButton}) {
  const apiKey = 'd165967b6b2897b819c9bfc9f9a64ba4';
  const baseUrl = 'https://api.themoviedb.org/3';
  // const category = 'movie/popular';
  const [movies, setMovies]=useState([]);
  const [windowDesktop, setWindowDesktop] = useState(true);

  useEffect(() => {
    (window.innerWidth > 920) ? setWindowDesktop(true) : setWindowDesktop(false);
    
    const fetchInfo = async () => {
        try {
            const resp = await fetch(`${baseUrl}/${category}?api_key=${apiKey}`);
            const apidata = await resp.json();

            // console.log('test' + apidata.results);
            setMovies(apidata.results);
        }
        catch (err) {
            console.log(err);
        }
    }
    fetchInfo();
}, [])

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: 'gray', borderRadius:'50%' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: 'gray', borderRadius:'50%' }}
      onClick={onClick}
    />
  );
}



let setting1280px = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
}

let setting920px = {
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
}



let settings = {};


(windowDesktop) ? settings = setting1280px : settings = setting920px;

  return (
    <div className="CategoryCardContainer">
    <h3 style={{margin: '10px'}}>{title}</h3>
    <Slider {...settings}>
      {movies.map((e,i)=><CardMovieSlide
      key={e.id} 
      details={details} 
      movie={e} 
      username={username}
      handleDetailsPopUp={(e) => handleDetailsPopUp(e)}
      handleFavoriteMoviesButton={handleFavoriteMoviesButton}/>)}
    </Slider>
    </div>
  )
}

export default CategoryCard