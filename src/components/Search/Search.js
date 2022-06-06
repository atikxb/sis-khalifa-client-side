import React from 'react';
const Search = ({ handleSearch, searchId }) => {
    return (
        // <div className="search d-flex justify-content-end mb-3">
        //     <div className="search-container">
        //         <form onSubmit={handleSearch}>
        //             <input ref={searchId} type="text" placeholder="ex: st-101" name="search" required />
        //             <button type="submit"><i className="fa fa-search"></i></button>
        //         </form>
        //     </div>
        // </div>
        <div className="col-auto">
            <form onSubmit={handleSearch} className="table-search-form row gx-1 align-items-center">
                <div className="col-auto">
                    <input ref={searchId} type="text" id="search-orders" name="searchorders"
                        className="form-control search-orders" placeholder="ex: 101" required />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn app-btn-secondary">Search</button>
                </div>
            </form>
        </div>
    );
};

export default Search;