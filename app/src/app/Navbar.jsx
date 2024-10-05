'use client';
import React, { useState } from 'react';
import logo from './images/logo.png';
import { IoMenu } from "react-icons/io5";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import './Navbar.css'


const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <div id='navbar' className="fixed mt-[-130px] left-0 w-full h-[90px] sm:h-[130px] text-black shadow-2xl  z-[1000]  shadow-black border-black bg-gray-900 opacity-80">
            <img className='sm:w-[120px] w-[70px] relative ml-[70px] mt-[10px] sm:mt-[0px] sm:ml-[50px] cursor-pointer' src={logo.src} alt="logo" />



            <IoMenu onClick={() => setMenu(true)} className='sm:hidden size-[40px] mt-[-55px] cursor-pointer ml-5 transition-transform ease-in-out hover:scale-110' />
            <WiMoonAltFirstQuarter className='sm:block absolute sm:size-[45px] sm:mt-[-75px] cursor-pointer sm:ml-[1400px] ml-[360px] mt-[-40px] size-[40px] w-[110px] transition-transform ease-in-out hover:scale-110' />
            {/* desktop menu */}
            <div className='mt-[-1000px]   sm:flex sm:justify-center sm:text-center sm:items-center sm:mt-[-65px] sm:gap-5'>

                <div className='mt-[-10px]'>
                    <div class="search">
                        <input placeholder="Search..." type="text" />
                        <button type="submit">Go</button>
                    </div>
                </div>

            </div>

            {/* mobile menu */}
            {menu ? (
                <div id='menu' className='sm:hidden bg-white z-50 fixed  w-[300px] h-full mt-[882px] shadow-[4px_0_15px_rgba(0,0,0,0.2)]'>
                    <IoMenu onClick={() => setMenu(false)} className='size-[40px] mt-[20px]  cursor-pointer ml-9 transition-transform ease-in-out hover:scale-110' />

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
}

export default Navbar;
