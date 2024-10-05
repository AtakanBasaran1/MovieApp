"use client"
import axios from 'axios'
import { useEffect, useState } from 'react';
import venom from './images/venom.png'

const Aside = () => {

    const [movies, setMovies] = useState([])
    const MoviesList = ['Venom']

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
        <div className='mt-[130px] flex justify-center relative'>
            <div>
                <img className='w-[500px] h-[200px] sm:w-[1550px] sm:h-[500px]' src={venom.src} alt="" />
                <ul className='mt-[-300px] ml-10 absolute text-white'>
                    {movies.map((movie, index) => (
                        <li key={index}>
                            {/* <h2 className='text-[20px] sm:text-[60px]'>{movie.Title} ({movie.Year})</h2> */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Aside