function SearchForm() {
  return (
    <div className="SearchForm">
      <form className="search-form">
        <div className="row justify-content-end">
          <div className="col-5">
            <input
              className="form-control shadow"
              type="search"
              id="search"
              placeholder="Enter a city"
              autoFocus="on"
              autoComplete="off"
            />
          </div>
          <div className="col-2 justify-content-around">
            <button
              type="submit"
              className="form-control btn shadow"
              id="search-btn"
            >
              Search
            </button>
          </div>
          <div className="col-2">
            <button
              type="submit"
              id="current-btn"
              className="form-control btn shadow"
            >
              Current
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
