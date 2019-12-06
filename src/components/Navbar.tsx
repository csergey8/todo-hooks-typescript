import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
    return (
        <>
        <div>NavBar</div>
        <NavLink to="/">Todo</NavLink>
        <NavLink to="/about">About</NavLink>
        </>
    )
}
