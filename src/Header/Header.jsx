import Navigation from "./Navigation";
import Search from "./Search";
import { useLocation } from "react-router-dom";

import "./header.scss";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="header">
      <div className="header__container">
        <Navigation />

        {(location.pathname === "/houses" ||
          location.pathname === "/persons") && <Search />}
          
      </div>
    </div>
  );
};

export default Header;
