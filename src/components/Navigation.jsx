import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);

    let menu;
    let menuOverlay;
    if (showMenu) {
        menu = (
            <div className='fixed bg-[#30475E] top-0 left-0 h-full w-2/3 z-50 shadow p-3 text-[#F5F5F5]'>
                <Link
                    to='/'
                    className='font-bold text-lg underline underline-offset-8 cursor-pointer'>
                    BookingAPP
                </Link>
                <ul className='py-5'>
                    <li className='py-2 font-bold'>
                        <NavLink
                            to='/'
                            className='hover:text-teal-500 duration-300'>
                            Home
                        </NavLink>
                    </li>
                    <li className='py-2 font-bold'>
                        <NavLink
                            to='/products'
                            className='hover:text-teal-500 duration-300'>
                            Product
                        </NavLink>
                    </li>
                    <li className='py-2 font-bold'>
                        <NavLink
                            to='/about'
                            className='hover:text-teal-500 duration-300'>
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
        menuOverlay = (
            <div
                className='bg-black-t-50 fixed top-0 left-0 w-full h-full z-50'
                onClick={() => setShowMenu(false)}></div>
        );
    }

    return (
        <nav>
            {/*Dekstop menu*/}
            <ul className='hidden md:flex w-[200px] justify-evenly text-[#F5F5F5]'>
                <li className='font-bold'>
                    <NavLink
                        to='/'
                        className='hover:text-teal-500 duration-300'>
                        Home
                    </NavLink>
                </li>
                <li className='font-bold'>
                    <NavLink
                        to='/products'
                        className='hover:text-teal-500 duration-300'>
                        Product
                    </NavLink>
                </li>
                <li className='font-bold'>
                    <NavLink
                        to='/about'
                        className='hover:text-teal-500 duration-300'>
                        About
                    </NavLink>
                </li>
            </ul>

            {/*Mobile menu*/}
            <FaBars
                className='text-xl text-[#F5F5F5] md:hidden'
                onClick={() => setShowMenu(!showMenu)}
            />

            {menuOverlay}
            {menu}
        </nav>
    );
};

export default Navigation;
