import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = e => {
      if(e.originalTarget.tagName != 'BUTTON' && e.originalTarget.tagName != 'SPAN')
        setMenuOpen(false);
    }
    document.body.addEventListener('click', closeMenu);

    return () => document.body.addEventListener('click', closeMenu);
  }, []);

  return (
    <header>
      <div className='wrapper'>
        <button className='nav-toggle'>
          <span className='hamburguer'></span>
        </button>
        <NavLink to='/'>SAT 2400</NavLink>
        <nav className={`${menuOpen ? 'visible' : ''}`}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/get-song'>Get a song</NavLink>
          <NavLink to='/meet-team'>The Team</NavLink>
        </nav>
      </div>
    </header>
  )
}