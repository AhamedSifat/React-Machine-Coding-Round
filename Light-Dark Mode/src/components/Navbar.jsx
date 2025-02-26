import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <div className='nav-link'>
        <Link className='link' to='/'>
          Home
        </Link>
        <Link className='link' to='/about'>
          about
        </Link>
        <Link className='link' to='/blog'>
          blog
        </Link>
      </div>
      <div className='mode-switch'>
        <label>
          <input
            type='checkbox'
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
          <span className='slider-round'></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
