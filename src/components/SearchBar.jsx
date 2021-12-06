const SearchBar = () => {
    return (
        <div className="search">
            <h2>Track your courer</h2>
            <p>Enter tracking number and choose courier partner to search</p>
            <div className="search-bar">
                <select name="" id="">
                    <option value="dtdc">DTDC</option>
                    <option value="dtdc">BlueDart</option>
                </select>
                <input type="text" placeholder="Enter tracking number" />
                <button>
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
