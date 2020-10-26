import React from "react";

const FilterForm = (props) => {
  return (
    <div>
      filter shown with
      <input onChange={props.handleFilterChange} value={props.nameFilter} />
    </div>
  );
};

export default FilterForm;
