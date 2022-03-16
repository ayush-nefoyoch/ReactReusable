import React, { useState } from "react";

export const Form = (props) => {
  const { formFields } = props;
  // const initialForm = formFields.reduce((acc, curr) => {
  //   acc[curr.name] = "";
  //   return acc;
  // }, {});

  const [fields, setFields] = useState({});
  const handleChange = (e) => {
    const { target: input } = e;
    let fields1 = { ...fields };
    fields1[input.name] = input.value;
    setFields(fields1);
  };
  return (
    <div className="container">
      {formFields.map((field, index) => (
        <div className="form-group" key={index}>
          <input
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={fields[field.name]}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      ))}
      <div className="form-group">
        <button
          className="btn btn-primary"
          onClick={() => props.onSubmit(fields)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

// previous table code
{
  /* <div className="container">
        <div className="row bg-dark text-white">
          {headers.map((h1, index) => (
            <div className={`col-${h1.cols}`} key={index}>
              {h1.header}
            </div>
          ))}
        </div>
        {data.map((trow, index) => (
          <div className="row" key={index}>
            {headers.map((h1, index2) => (
              <div className={`col-${h1.cols} border`} key={index2}>
                {trow[h1.field]}
              </div>
            ))} */
}
{
  /* <div className={`col-${deleteOptions.cols} border`}>
            <button
              className="btn btn-sm btn-warning"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div> */
}
{
  /* </div>
        ))}
      </div> */
}
// delete function in table
// const handleDelete = (index) => {
//   deleteOptions.onDelete(index);
// };

// App.js - delete and form submit
// const handleDelete = (index) => {
//   let newData = [...data]; // copy of data
//   newData.splice(index, 1);
//   setTable({ ...table, data: newData }); //spread our table and change the data
// };

// const submitHandler = (formData) => {
//   let newData = [...data, formData];
//   setTable({ ...table, data: newData });
// };
// const deleteOptions = { cols: 2, onDelete: handleDelete };

// Form component
{
  /* <h4 className="text-center m-2">New Details</h4>
      <Form formFields={formFields} onSubmit={submitHandler} /> */
}

// Pagination with class component

// import React, { Component } from "react";
// import { tableData } from "../../constant/tableData";
// import { Table } from "../Table";
// import { Button } from "../Button";
// import DropDown from "../Dropdown";
// export default class Pagination extends Component {
//   state = {
//     currentPage: 1,
//     limit: 2,
//     data: this.props.data,
//   };

//   handleChange = (e) => {
//     this.setState({
//       limit: e.target.value,
//       currentPage: 1,
//     });
//   };

//   firstPageFunc = () => {
//     if (this.state.currentPage > 1) {
//       this.setState({
//         currentPage: 1,
//       });
//     }
//   };

//   prevPageFunc = () => {
//     if (this.state.currentPage > 1) {
//       this.setState({
//         currentPage: this.state.currentPage - 1,
//       });
//     }
//   };

//   nextPageFunc = () => {
//     if (this.state.currentPage < this.state.data.length / this.state.limit) {
//       this.setState({
//         currentPage: this.state.currentPage + 1,
//       });
//     }
//   };

//   lastPageFunc = () => {
//     this.setState({
//       currentPage: Math.round(this.state.data.length / this.state.limit),
//     });
//   };

//   render() {
//     let { limit, data, currentPage } = this.state;
//     let filteredArray = [...data];
//     let start = (currentPage - 1) * limit;
//     let end = parseInt(start) + parseInt(limit);
//     console.log("Data Class", data);
//     filteredArray = filteredArray.slice(start, end);

//     return (
//       <>
//         <Table headers={tableData.headers} data={filteredArray} />
//         <DropDown dropDown={this.handleChange} />
//         <section>
//           <Button label="first" onClick={this.firstPageFunc} />
//           <Button label="prev" onClick={this.prevPageFunc} />
//           <Button label={this.state.currentPage} />
//           <Button label="next" onClick={this.nextPageFunc} />
//           <Button label="last" onClick={this.lastPageFunc} />
//         </section>
//       </>
//     );
//   }
// }
