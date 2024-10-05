"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import './style.css'
import Aside from './Aside'

const Page = () => {

  const [movies, setMovies] = useState([])
  const MoviesList = ['The Dark Knight', 'Breaking Bad', 'Vikings', 'Teen Wolf']

  useEffect(() => {
    const fetchMovies = async () => {
      const API_KEY = 'a4997432';
      const moviePromises = MoviesList.map(e =>
        axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${e}`)
      );


      const responses = await Promise.all(moviePromises);
      setMovies(responses.map(response => response.data));
    };

    fetchMovies();
  }, []);

  return (
    <div className='container-xl d-flex justify-content-center align-items-center '>

      <Aside />

      <div className='justify-center flex'>
        <ul className='mt-[150px] flex justify-center sm:flex-row sm:gap-10 items-center flex-col text-center'>
          {movies.map((movie, index) => (
            <li key={index} className='flex flex-col items-center'>
              <h2 className='text-[18px]' >{movie.Title} ({movie.Year})</h2>
              <h3 className='text-[18px]'>{movie.imdbRating}</h3>
              <h3 className='text-[18px]'>{movie.Runtime}</h3>
              {movie.Poster && <img className='w-[200px] h-[250px] mt-4' src={movie.Poster} />}
            </li>
          ))}
        </ul>
      </div>


    </div>

  )
}

export default Page;
