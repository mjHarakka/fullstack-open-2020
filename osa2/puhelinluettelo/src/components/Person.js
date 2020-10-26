import React from "react";

const Person = (props) => {
  return (
    <div>
        {props.person.name} {props.person.number}
        <button onClick={props.handleDelete}>delete</button> 
    </div>
  );
};

export default Person;
