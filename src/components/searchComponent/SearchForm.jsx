import './stylesSearch.css';

import { FaSistrix } from 'react-icons/fa';
function SearchForm({ setSearch, searchSubmit }) {
  const searchOnchange = (event) => {
    setSearch(event.target.value);
    //console.log(event.target.value)
    
  };
  return (
    <div className="cont-search">
      <form onSubmit={searchSubmit} className="row g-2" >
          <div className="col-auto mb-3">
            <input
            type="text"
            className="form-control"
            name="search"
            onChange={searchOnchange}
            placeholder="Search City..."
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">Search <FaSistrix/></button>
          </div>
      </form>
    </div>
  );
}

export default SearchForm;
