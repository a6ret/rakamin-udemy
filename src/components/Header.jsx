import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-[#30475E] border-b p-3 flex justify-between items-center'>
            <Link to='/' className='font-bold text-[#F5F5F5]'>
                BookingAPP
            </Link>

            <Navigation />
        </header>
    );
};

export default Header;
