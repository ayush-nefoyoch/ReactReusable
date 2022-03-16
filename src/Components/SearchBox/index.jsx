import React from "react";
import "./Search.css";

function Search({ queryHandler }) {
  return (
    <>
      <h1 className="text-center mt-5 mb-5">Search</h1>
      <div className="row mb-5">
        <div className="col-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control w"
              placeholder="Search this blog"
              onChange={(e) => queryHandler(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
