import React from "react";
import { Table } from "../Table";

export const SearchResults = ({ headers, data }) => {
  return (
    <div>
      <Table headers={headers} data={data} />
    </div>
  );
};
