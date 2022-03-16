import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import DropDown from "../Dropdown";
import { Table } from "../Table";

export const Pagination = ({ data, headers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredArray, setfilteredArray] = useState([]);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    paginate(data, currentPage, pageSize);
  }, [data, currentPage, pageSize]);

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    setfilteredArray(_(items).slice(startIndex).take(pageSize).value());
  };

  const handleChange = (e) => {
    setPageSize(e.target.value);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleFirst = () => {
    setCurrentPage(1);
  };

  const handleLast = () => {
    setCurrentPage(Math.ceil(data?.length / pageSize));
  };

  const isFirst = () => {
    return currentPage === 1;
  };

  const isLast = () => {
    return currentPage === Math.ceil(data?.length / pageSize);
  };

  return (
    <>
      <Table headers={headers} data={filteredArray} />
      <DropDown dropDown={handleChange} />
      <section>
        <Button label="first" onClick={handleFirst} disabled={isFirst()} />
        <Button label="prev" onClick={handlePrevious} disabled={isFirst()} />
        <Button label={currentPage} />
        <Button label="next" onClick={handleNext} disabled={isLast()} />
        <Button label="last" onClick={handleLast} disabled={isLast()} />
      </section>
    </>
  );
};
