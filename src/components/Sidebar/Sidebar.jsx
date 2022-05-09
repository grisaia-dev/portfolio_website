import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHomeUser, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className='container'>
      <nav className='navbar'>
        <NavLink className='home' to='/home'>
          <FontAwesomeIcon icon={faHomeUser}/>
        </NavLink>
        <NavLink className='about' to='/about'>
          <FontAwesomeIcon icon={faUser}/>
        </NavLink>
        <NavLink className='git' to='/about-site'>
          <FontAwesomeIcon icon={faGithub}/>
        </NavLink>
      </nav>
    </div>
  )
}
export default Sidebar;
