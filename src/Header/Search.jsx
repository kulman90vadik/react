import { useRef } from 'react';

import './search.scss';

const Search = () => {

  const inputSearch = useRef();

  return (
    <div className="search">
      <input className='search__input' ref={inputSearch} name='search' type="search" placeholder=''/>
    </div>
  );
}
 
export default Search;