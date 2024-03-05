import React from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => {
 return  (
  <div>
    <h4> List Component </h4>
    {console.log(props)}
    There are {props.users.length} users.
    {props.users.map((user, index) => (
      <div key={index}>
       <ListItem user={user} />
      </div>
    ))}
  </div> 
)};

export default List;
