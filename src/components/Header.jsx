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
        <button className='nav-toggle' onClick={() => setMenuOpen(prevMenuOpen => !prevMenuOpen)}>
          <span className='hamburguer'></span>
        </button>
        <NavLink className='logo nav-link' to='/'>📱 ➡ 🎶</NavLink>
        <nav className={`${menuOpen ? 'visible' : ''}`}>
          <NavLink className='nav-link' to='/'>Home</NavLink>
          <NavLink className='nav-link' to='/get-song'>Get a song</NavLink>
          <NavLink className='nav-link' to='/meet-team'>The Team</NavLink>
        </nav>
      </div>
    </header>
  )
}