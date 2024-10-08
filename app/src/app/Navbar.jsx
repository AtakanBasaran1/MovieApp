'use client';
import React, { useState } from 'react';
import logo from './images/logo.png';
import { IoMenu } from "react-icons/io5";
import './Navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <div id='navbar' className="absolute left-0 w-full h-[90px] sm:h-[110px] text-black shadow-2xl z-[1000] shadow-black border-black flex justify-between items-center px-5">

            <img className='sm:w-[110px] w-[70px] ml-[30px] cursor-pointer' src={logo.src} alt="logo" />


            {/* Üye Ol butonu */}
            <div className='flex flex-row gap-10'>

                <div className='text-white flex flex-row gap-10 '>
                    <h1 className='text-[16px] font-normal cursor-pointer hover:text-gray-300'>Ana Sayfa</h1>
                    <h1 className='text-[16px] font-normal cursor-pointer hover:text-gray-300'>Filmler</h1>
                    <h1 className='text-[16px] font-normal cursor-pointer hover:text-gray-300'>Diziler</h1>
                </div>

                <div class="input-wrapper">
                    <button class="icon">
                        <svg
                            width="25px"
                            height="25px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                                stroke="#fff"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M22 22L20 20"
                                stroke="#fff"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </svg>
                    </button>
                    <input type="text" name="text" class="input" placeholder="Aratınız.." />
                </div>
                <button className='bg-red-600 w-[120px] h-[33px] hover:bg-red-500 rounded-md text-white mr-[50px] mt-5'>
                    <p className='mt-3'>Üye Ol</p>
                </button>
            </div>

            {/* Mobile menu icon */}
            <IoMenu onClick={() => setMenu(true)} className='sm:hidden size-[100px] cursor-pointer transition-transform ease-in-out hover:scale-110' />

            {/* Mobile menu */}
            {menu ? (
                <div id='menu' className='sm:hidden bg-white z-50 fixed w-[300px] h-full top-0 right-0 shadow-[4px_0_15px_rgba(0,0,0,0.2)]'>
                    <IoMenu onClick={() => setMenu(false)} className='size-[40px] mt-[20px] cursor-pointer ml-9 transition-transform ease-in-out hover:scale-110' />

                    <div className='ml-9 mt-10 text-[16px] flex flex-col '>
                        <div className='flex flex-col justify-start text-start items-start gap-5'>
                            <button className='hover:bg-gray-200 p-2 rounded-lg'>Tüm Ürünler</button>
                            <button className='hover:bg-gray-200 p-2 rounded-lg'>Ayakkabılar</button>
                            <button className='hover:bg-gray-200 p-2 rounded-lg'>Air Podlar</button>
                            <button className='hover:bg-gray-200 p-2 rounded-lg'>Puflar</button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Navbar;
