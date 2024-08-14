import React, {useState, useEffect} from 'react'
import './CategoryCard.scss'
import CardMovieSlide from '../CardMovieSlide/CardMovieSlide'

import Slider from 'react-slick';




function CategoryCard({category}) {
  const apiKey = 'd165967b6b2897b819c9bfc9f9a64ba4';
  const baseUrl = 'https://api.themoviedb.org/3';
  // const category = 'movie/popular';
  const [movies, setMovies]=useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
        try {
            const resp = await fetch(`${baseUrl}/${category}?api_key=${apiKey}`);
            const apidata = await resp.json();

            console.log('test' + apidata.results);
            setMovies(apidata.results);
        }
        catch (err) {
            console.log(err);
        }
    }
    fetchInfo();
}, [])

let settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

  return (
    <div className="slider-container">
    <Slider {...settings}>
      {movies.map((e,i)=><CardMovieSlide key={e.id} movie={e}/>)}
    </Slider>
    test
    </div>
  )
}

export default CategoryCard