import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

import "./search.scss";

import { updateSearchValue, closeSearchHandler } from "../redux/slices/searchClise";
import { updateSearchValuePersons} from "../redux/slices/searchClise";

const Search = () => {
  const location = useLocation();
  const inputSearch = useRef();
  const dispatch = useDispatch();
  const valueSearch = useSelector((state) => state.valueSearch.valueSearch);

  const clickSearchHandler = (e) => {
    if(location.pathname === '/houses') {
      dispatch(updateSearchValue(e.target.value));
    }
    if(location.pathname === '/persons') {
      dispatch(updateSearchValuePersons(e.target.value));
    }
  };


  const closeSearch = () => {
    dispatch(closeSearchHandler());
    inputSearch.current.focus();
  }

  return (
    <div className="search">
      <input
        className="search__input"
        ref={inputSearch}
        name="search"
        type="search"
        
        placeholder={(location.pathname === '/houses') ?  'Search by house' : 'Search by persons'}
        value={valueSearch}
        onChange={(e) => clickSearchHandler(e)}
      />
      {!valueSearch ? (
        <svg
          className="search__icon-search"
          width="80px"
          height="80px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.1"
            d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            fill="#323232"
          />
          <path
            d="M15 15L21 21"
            stroke="#323232"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="#323232"
            strokeWidth="2"
          />
        </svg>
      ) : (
        <svg
          onClick={closeSearch}
          className="search__icon-close"
          width="80px"
          height="80px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
          />
        </svg>
      )}
    </div>
  );
};

export default Search;
