"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import './style.css'
import { FaStar } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { FaPlay } from "react-icons/fa";



const Page = () => {

    const [movies, setMovies] = useState([])
    const MoviesList = ['The Godfather', 'Pulp Fiction', 'The Shawshank Redemption', 'The Dark Knight', '12 Angry Men', 'The Lord of the Rings: The Return of the King']

    useEffect(() => {
        const fetchMovies = async () => {
            const moviePromises = MoviesList.map(e =>
                axios.get(`http://www.omdbapi.com/?apikey=a4997432&t=${e}`)
            );

            const responses = await Promise.all(moviePromises);
            setMovies(responses.map(response => response.data));
        };

        fetchMovies();
    }, []);

    return (
        <div className='container-xl d-flex justify-content-center align-items-center text-white '>

            <h1 className='text-[22px] ml-[60px] mt-[100px] '>EN ÇOK OY ALAN FİLMLER</h1>

            <hr className="w-11/12 ml-[60px] h-1 border-none bg-gradient-to-r from-red-700 to-black rounded-[300px]" />


            <div className='justify-start ml-[60px] flex'>
                <ul className='mt-10 flex justify-start sm:flex-row sm:gap-[30px] items-center flex-col text-start'>
                    {movies.map((movie, index) => (
                        <li key={index} className='flex flex-col items-center from-red-700 to-black border-[1px] rounded-xl border-white opacity-90 hover:opacity-100 transition-transform ease-in-out hover:scale-105 transform'>

                            <div className='absolute flex flex-row mt-[130px] text-center items-center gap-3 cursor-pointer'>
                                <FaPlay className='text-[16px] mt-[-10px]' />
                                <h1 className='text-[16px] mt-0'>Trailer'ı İzle</h1>
                            </div>
                            {movie.Poster && <img className='w-[208px] h-[260px]  rounded-t-xl' src={movie.Poster} />}
                            <div className='bg-gray-900 h-[140px] w-[208px] border-t-2 border-white rounded-b-xl  '>

                                <div className='flex flex-row gap-2 mt-3'>


                                    <div className='flex flex-row mt-5 ml-8 gap-3'>
                                        <FaStar className='text-yellow-400 text-[18px]' />
                                        <h1 className='text-[18px] text-yellow-400 mt-0'>  {movie.imdbRating}  </h1>
                                    </div>
                                    <div className='flex flex-row mt-5 ml-5 gap-3'>
                                        <IoIosTime className='text-gray-400 text-[18px]' />
                                        <h1 className='text-[18px] text-gray-400 mt-0'>  {movie.Runtime}  </h1>
                                    </div>



                                </div>

                                <h1 className='text-[16px] items-center wrap flex-wrap max-w-[200px]  text-center'>{movie.Title} ({movie.Year})</h1>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>


        </div>

    )
}

export default Page;
