import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Thi is the header</h1>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/friends'>Friends</CustomLink>
            <Link to='/posts'>Posts</Link>
            <CustomLink to='/about'>About</CustomLink>
          
            
        </div>
    );
};

export default Header;