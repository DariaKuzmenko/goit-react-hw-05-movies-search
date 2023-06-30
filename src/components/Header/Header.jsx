import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderList } from './Header.styled';

function Header() {
  return (
    <header>
      <nav>
        <HeaderList>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </HeaderList>
      </nav>
    </header>
  );
}

export default Header;
