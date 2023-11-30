

import './navigation.scss';
import { NavLink } from "react-router-dom";


const Navigation = () => {

  const activeLink = 'navigation__link navigation__link--active';
  const normalLink = 'navigation__link';

  return (
    <nav className="navigation">
      <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink to="/" data-name="Home" className={({isActive}) => isActive ? activeLink : normalLink}>Home</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/houses" data-name="Houses" className={({isActive}) => isActive ? activeLink : normalLink}>Houses</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="persons" data-name="Persons" className={({isActive}) => isActive ? activeLink : normalLink}>Persons</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="quotes" data-name="Quotes" className={({isActive}) => isActive ? activeLink : normalLink}>Quotes</NavLink>
          </li>
        </ul>
    </nav>
  );
}
 
export default Navigation;
