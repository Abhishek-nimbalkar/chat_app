import React from "react";

import { useTable } from "react-table";
const TableComp = (props:any) => {
  console.log(props?.data);
  
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
      {props?.data?.map((item:any) => {
        if(item.price){
          return(
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  </tr>
              )
        }
        else{
          return(
            <tr key={item.id}>
                  <td>{item.name.firstname}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  </tr>
          )
        }
              
                
              }
            )}
      </tbody>
    </table>
  );
};

export default TableComp;
