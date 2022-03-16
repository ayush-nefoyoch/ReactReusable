import React, { useState, useEffect } from "react";
import { Pagination } from "./Components/Pagination";
import Fuse from "fuse.js";
import SearchBox from "./Components/SearchBox";
import { Table } from "./Components/Table";
import { SearchResults } from "./Components/SearchResults";

function App() {
  const [apiData, setApiData] = useState(undefined);
  const [filteredData, setFilteredData] = useState([]);
  const [dropDownValue, setDropDownValue] = useState(10);

  const getHeaders = (headers) => {
    if (headers === undefined) return [];
    const arr = headers.map((header) => ({
      header,
      field: header.split("_").join(" "),
    }));
    arr.splice(4, 2);
    return arr;
  };

  useEffect(() => {
    fetch("https://mocki.io/v1/60c10e1e-e172-42ca-affd-84661c9dc643")
      .then((response) => response.json())
      .then((json) => {
        setApiData(json);
        setFilteredData(json.users.data.data);
      });
  }, []);

  const fuse = new Fuse(apiData?.users.data.data, {
    keys: ["name", "email", "Id"],
    includeScore: true,
  });

  const queryHandler = (query) => {
    console.log(query);
    const results = fuse.search(query);
    const characterResults = query
      ? results.map((character) => character.item)
      : apiData?.users.data.data;
    setFilteredData(characterResults);
    console.log(dropDownValue);
  };
  return (
    <div className="container">
      <SearchBox queryHandler={queryHandler} />

      {/* if user wants only search but not pagination */}
      {/* <SearchResults
        data={filteredData}
        headers={getHeaders(apiData?.users?.columns)}
      /> */}

      {/* is user want to run both pagination as well searching */}
      <Pagination
        data={filteredData}
        headers={getHeaders(apiData?.users?.columns)}
      />
    </div>
  );
}

export default App;
