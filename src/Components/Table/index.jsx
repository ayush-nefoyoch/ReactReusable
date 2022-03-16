import React from "react";

export const Table = (props) => {
  const { headers, data } = props;

  // const characterResults = results.map((character) => character.item);

  return (
    <>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {headers?.map((h1, index) => (
              <th scope="col" key={index}>
                {h1.field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((trow, index) => (
            <tr key={index}>
              {headers?.map((h1, index2) => (
                <td className="" key={index2}>
                  {trow[h1.header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
