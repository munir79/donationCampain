import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Resourses/Logo.png'
import '../Style/Header.css'

const Header = () => {
    return (
        <div className='header'>
         <div>
         <img src={logo} alt="" />
         </div>
         <div className='link'>
            <Link to='/home'>Home</Link>
            <Link to='/donation'>Donation</Link>
            <Link to='/statistics'>statistics</Link>
         </div>
        </div>
    );
};

export default Header;