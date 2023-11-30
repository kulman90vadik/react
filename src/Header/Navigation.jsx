

import './navigation.scss';
import { NavLink } from "react-router-dom";


const Navigation = () => {

  const activeLink = 'navigation__link navigation__link--active';
  const normalLink = 'navigation__link';

  return (
    <nav className="navigation">
      <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>Home</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/houses" className={({isActive}) => isActive ? activeLink : normalLink}>Houses</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="persons" className={({isActive}) => isActive ? activeLink : normalLink}>Persons</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="quotes" className={({isActive}) => isActive ? activeLink : normalLink}>Quotes</NavLink>
          </li>
        </ul>
    </nav>
  );
}
 
export default Navigation;
