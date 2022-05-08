import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHomeUser, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.module.scss';

export const Sidebar = () => {
  return (
    <div className='navbar'>
      <nav className='navbarCont'>
        <NavLink exact='true' activeclassname='activeHome' className='navbarContHome' to='/'>
          <FontAwesomeIcon icon={faHomeUser}/>
        </NavLink>
        <NavLink activeclassname='activeAbout' className='navbarContAbout' to='/about'>
          <FontAwesomeIcon icon={faUser}/>
        </NavLink>
        <NavLink activeclassname='activeGit' className='navbarContGit' to='/about'>
          <FontAwesomeIcon icon={faGithub}/>
        </NavLink>
      </nav>
    </div>
  );
} 
